import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { menuData } from "@/data/menuData";
import { Star } from "lucide-react";

type Category = "all" | "appetizers" | "vegetarian" | "beef" | "chicken" | "lamb" | "combination-platters" | "fish" | "injera";

// Create a type for the menu items that handles different price formats
type MenuItem = {
  id: number;
  name: string;
  price: number | Record<string, number>;
  description: string;
  image: string;
  dietary?: string;
  popular?: boolean;
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  
  // Helper function to get items based on category
  const getItemsByCategory = (category: string): MenuItem[] => {
    if (category === "all") {
      return [
        ...(menuData.appetizers || []),
        ...(menuData.vegetarian || []),
        ...(menuData.beef || []),
        ...(menuData.chicken || []),
        ...(menuData.lamb || []),
        ...(menuData.combinationPlatters || []),
        ...(menuData.fish || []),
        ...(menuData.injera || [])
      ];
    }
    
    if (category === "combination-platters") {
      return menuData.combinationPlatters || [];
    }
    
    return menuData[category as keyof typeof menuData] || [];
  };

  // Get items for the currently selected category
  const currentItems = getItemsByCategory(activeCategory);

  return (
    <section className="py-16 md:py-24 bg-[hsl(44,100%,95%)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xl text-[hsl(44,100%,52%)]">Authentic & Traditional</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Our Ethiopian Menu</h2>
          <p className="text-[#757575]">Experience the vibrant flavors of traditional Ethiopian cuisine, prepared with authentic spices and time-honored recipes.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant={activeCategory === "all" ? "default" : "outline"} 
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            All
          </Button>
          <Button 
            variant={activeCategory === "appetizers" ? "default" : "outline"} 
            onClick={() => setActiveCategory("appetizers")}
            className={activeCategory === "appetizers" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Appetizers
          </Button>
          <Button 
            variant={activeCategory === "vegetarian" ? "default" : "outline"} 
            onClick={() => setActiveCategory("vegetarian")}
            className={activeCategory === "vegetarian" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Vegetarian
          </Button>
          <Button 
            variant={activeCategory === "beef" ? "default" : "outline"} 
            onClick={() => setActiveCategory("beef")}
            className={activeCategory === "beef" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Beef
          </Button>
          <Button 
            variant={activeCategory === "chicken" ? "default" : "outline"} 
            onClick={() => setActiveCategory("chicken")}
            className={activeCategory === "chicken" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Chicken
          </Button>
          <Button 
            variant={activeCategory === "lamb" ? "default" : "outline"} 
            onClick={() => setActiveCategory("lamb")}
            className={activeCategory === "lamb" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Lamb
          </Button>
          <Button 
            variant={activeCategory === "combination-platters" ? "default" : "outline"} 
            onClick={() => setActiveCategory("combination-platters")}
            className={activeCategory === "combination-platters" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Combination Platters
          </Button>
          <Button 
            variant={activeCategory === "fish" ? "default" : "outline"} 
            onClick={() => setActiveCategory("fish")}
            className={activeCategory === "fish" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Fish
          </Button>
          <Button 
            variant={activeCategory === "injera" ? "default" : "outline"} 
            onClick={() => setActiveCategory("injera")}
            className={activeCategory === "injera" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Injera
          </Button>
        </div>
        
        {/* Category Title */}
        {activeCategory !== "all" && (
          <div className="mb-12">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary text-center">
              {activeCategory === "combination-platters" ? "Combination Platters" : 
                activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </h3>
          </div>
        )}
        
        {/* Menu Items Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentItems.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                  <span className="text-[hsl(0,64%,50%)] font-medium whitespace-nowrap">
                    {typeof item.price === 'object' ? (
                      <div className="text-right">
                        {Object.entries(item.price).map(([key, value], index) => (
                          <div key={index} className="text-xs">{key}: ${value}</div>
                        ))}
                      </div>
                    ) : (
                      item.price ? `$${item.price}` : ''
                    )}
                  </span>
                </div>
                <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.dietary && (
                    <Badge variant="secondary" className="bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                      {item.dietary}
                    </Badge>
                  )}
                  {item.popular && (
                    <span className="text-[hsl(44,100%,52%)] flex items-center">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <span className="text-xs">Popular</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-[#757575] italic mb-4">* Menu items may contain allergens. Please inform your server of any dietary restrictions.</p>
          <Button className="bg-primary hover:bg-primary/90">
            Download Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}