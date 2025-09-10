import { 
  users, type User, type InsertUser, 
  contactSubmissions, type Contact, type InsertContact 
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  createContactSubmission(submission: InsertContact): Promise<Contact>;
  getContactSubmission(id: number): Promise<Contact | undefined>;
  getAllContactSubmissions(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, Contact>;
  private userId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userId = 1;
    this.contactId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact form methods
  async createContactSubmission(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const submittedAt = new Date();
    const contact: Contact = { ...insertContact, id, submittedAt };
    this.contactSubmissions.set(id, contact);
    return contact;
  }

  async getContactSubmission(id: number): Promise<Contact | undefined> {
    return this.contactSubmissions.get(id);
  }

  async getAllContactSubmissions(): Promise<Contact[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
