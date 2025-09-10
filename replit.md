# Harambe Ethiopian Restaurant Website

## Overview

This is a full-stack web application for Harambe Ethiopian Restaurant, featuring a modern React frontend with a Node.js/Express backend. The application showcases the restaurant's menu, gallery, contact information, and celebrates their 25th anniversary. It's built with TypeScript and uses Drizzle ORM for database operations with PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom Ethiopian-themed color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Request Handling**: Express middleware for JSON parsing and logging
- **Error Handling**: Centralized error middleware with status codes

### Data Storage
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with schema-first approach
- **Development Storage**: In-memory storage implementation for development
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Form submissions with timestamp tracking
- **Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all contact submissions (admin functionality)

### Frontend Pages
- **Home**: Restaurant introduction and hero section
- **About**: Restaurant story and values
- **Menu**: Ethiopian food categories with images and pricing
- **Gallery**: Photo gallery with category filtering
- **Contact**: Contact form with validation
- **Anniversary**: 25th anniversary celebration page

### UI Components
- Responsive navigation header with mobile hamburger menu
- Footer with restaurant information and social links
- Form components with validation feedback
- Image galleries with category filtering
- Toast notifications for user feedback

## Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack Query
2. **Server Processing**: Express server handles requests with middleware pipeline
3. **Data Validation**: Zod schemas validate incoming data
4. **Storage Operations**: Drizzle ORM or memory storage handles data persistence
5. **Response**: Structured JSON responses with success/error status

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React routing

### UI and Styling
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Runtime type validation

### Development Tools
- **vite**: Fast build tool and dev server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle Kit pushes schema to PostgreSQL database

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and in-memory storage
- **Production**: Serves static files from Express with PostgreSQL database
- **Database URL**: Required environment variable for PostgreSQL connection

### Deployment Commands
- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build both frontend and backend for production
- `npm start`: Run production server
- `npm run db:push`: Deploy database schema changes

The application follows a monorepo structure with shared TypeScript types and schemas between frontend and backend, ensuring type safety across the entire stack.