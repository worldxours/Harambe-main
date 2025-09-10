import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Utensils, Wine, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[hsl(44,100%,95%)]">
        <div className="container mx-auto py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Fresh food with an authentic experience</h1>
              <p className="text-lg md:text-xl text-[#757575] mb-8">Experience authentic and delicious Ethiopian dining in the heart of our beautiful city. We've been serving the people of Vancouver delicious meals for 25 years.</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-md">
                  <Link href="/menu">View Our Menu</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-[hsl(44,100%,95%)] px-6 py-6 rounded-md">
                  <Link href="/contact">Book a Table</Link>
                </Button>
              </div>
              
              <div className="flex items-center mt-10 space-x-6">
                <div className="flex items-center">
                  <Clock className="text-[hsl(44,100%,52%)] mr-2 h-5 w-5" />
                  <span>Open 12pm - 10pm</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[hsl(44,100%,52%)] mr-2 h-5 w-5" />
                  <span>2149 Commercial Dr</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://s3-media0.fl.yelpcdn.com/bphoto/mZYxAdGPwQsdHnD5Gi7HYg/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Beautifully plated healthy dish" 
                className="rounded-lg shadow-xl w-full h-[400px] md:h-[500px] object-cover object-center"
              />
              <div className="absolute -bottom-6 -left-6 bg-[hsl(44,100%,52%)] p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-accent text-lg">Fresh ingredients daily!</p>
              </div>
            </div>
          </div>
          
          {/* Featured Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Leaf className="text-primary h-8 w-8 mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Authentic Ethiopian Cuisine</h3>
              <p className="text-[#757575]">We are proud to serve dishes rooted in centuries-old traditions, passed down through generations. From the rich, spicy stews, delicious veggie dishes to the unique flavours of injera, every bite tells a story of culture, community, and heritage. Whether you're new to Ethiopian food or a longtime lover, you'll find flavors here that are both comforting and unforgettable.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Utensils className="text-primary h-8 w-8 mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Fresh Ingredients, Bold Flavors</h3>
              <p className="text-[#757575]">We believe great food starts with great ingredients. That's why we source the freshest produce, imported spices, and high-quality meats to prepare every dish. Our kitchen is committed to cooking from scratch daily, ensuring that every plate is vibrant, nourishing, and full of life. You'll taste the difference in every bite — fresh, flavorful, and made with care.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Wine className="text-primary h-8 w-8 mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Welcoming Atmosphere</h3>
              <p className="text-[#757575]">With our warm environment, traditional Ethiopian decor, and the inviting aroma of spices in the air, our space is designed to make you feel like part of the family. Whether you're here for a quiet dinner, a celebration, or a cultural experience, our friendly staff and cozy ambiance create the perfect setting for memorable meals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
