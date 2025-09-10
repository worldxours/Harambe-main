import { useState } from "react";
import { Button } from "@/components/ui/button";
import { galleryData } from "@/data/galleryData";

type GalleryCategory = "all" | "restaurant" | "food" | "team";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  
  // Filter gallery items based on active category
  const filteredItems = activeCategory === "all" 
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xl text-[hsl(44,100%,52%)]">Our Space</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Photo Gallery</h2>
          <p className="text-[#757575]">Take a visual tour of our restaurant, dishes, and the people who make it all possible.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        {/* Gallery Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant={activeCategory === "all" ? "default" : "outline"} 
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            All
          </Button>
          <Button 
            variant={activeCategory === "restaurant" ? "default" : "outline"} 
            onClick={() => setActiveCategory("restaurant")}
            className={activeCategory === "restaurant" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Restaurant
          </Button>
          <Button 
            variant={activeCategory === "food" ? "default" : "outline"} 
            onClick={() => setActiveCategory("food")}
            className={activeCategory === "food" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Food
          </Button>
          <Button 
            variant={activeCategory === "team" ? "default" : "outline"} 
            onClick={() => setActiveCategory("team")}
            className={activeCategory === "team" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Team
          </Button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item overflow-hidden rounded-lg shadow-md">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90">
            View More Photos
          </Button>
        </div>
      </div>
    </section>
  );
}
