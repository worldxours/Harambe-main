import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import harambeLogoPath from "@/assets/harambe-logo-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-[hsl(122,63%,25%)] text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img src={harambeLogoPath} alt="Harambe Logo" className="h-8 w-auto" />
              <span className="font-heading font-bold text-xl">Harambe</span>
            </Link>
            <p className="text-gray-300 mb-6">Authentic Ethiopian cuisine featuring traditional spices and family recipes.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[hsl(44,100%,52%)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(44,100%,52%)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(44,100%,52%)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[hsl(44,100%,52%)] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[hsl(44,100%,52%)] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-[hsl(44,100%,52%)] transition-colors">Menu</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[hsl(44,100%,52%)] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[hsl(44,100%,52%)] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[hsl(44,100%,52%)] mr-3 mt-1 shrink-0" />
                <span className="text-gray-300">2149 Commercial Dr<br/>Vancouver, BC, V5N 4B3</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[hsl(44,100%,52%)] mr-3 shrink-0" />
                <span className="text-gray-300">+1-604-216-1060</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[hsl(44,100%,52%)] mr-3 shrink-0" />
                <span className="text-gray-300">info@harambe.ca</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[hsl(44,100%,52%)] mr-3 mt-1 shrink-0" />
                <div className="text-gray-300">
                  <p>Sun - Thu: 12:00 PM - 10:00 PM</p>
                  <p>Fri - Sat: 12:00 PM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to get updates on seasonal menus and events.</p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-r-none focus-visible:ring-offset-0 text-foreground"
              />
              <Button type="submit" className="bg-[hsl(44,100%,52%)] text-[hsl(122,63%,25%)] rounded-l-none hover:bg-[hsl(44,100%,60%)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Harambe Ethiopian Restaurant. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-[hsl(44,100%,52%)] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[hsl(44,100%,52%)] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-[hsl(44,100%,52%)] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
