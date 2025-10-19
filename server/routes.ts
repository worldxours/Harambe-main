import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = express.Router();
  
  // Contact form submission route
  apiRouter.post("/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      return res.status(201).json({
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
        data: submission
      });
    } catch (error) {
      // If it's a Zod validation error, return a 400 with details
      // `fromZodError` expects a ZodError, so only call it when the error has `issues`.
      const anyErr = error as any;
      if (anyErr && typeof anyErr === 'object' && Array.isArray(anyErr.issues)) {
        const validationError = fromZodError(anyErr);
        return res.status(400).json({
          success: false,
          message: validationError.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "An unexpected error occurred while processing your request."
      });
    }
  });

  // Get all contact submissions (could be used for an admin panel)
  apiRouter.get("/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.status(200).json({
        success: true,
        data: submissions
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while retrieving contact submissions."
      });
    }
  });

  // Mount API router
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
