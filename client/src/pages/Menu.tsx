import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { menuData } from "@/data/menuData";
import { Star } from "lucide-react";

type Category = string;

// Create a type for the menu items that handles different price formats
type MenuItem = {
  id: number;
  name: string;
  price: number | Record<string, number>;
  description: string;
  image: string;
  dietary?: string;
  showdietary?: boolean;
  popular?: boolean;
  label?: string;
};

export default function Menu() {
  // Use a capitalized static default to match the static filter labels below
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [data, setData] = useState<typeof menuData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch('/data/menu.json')
      .then((res) => {
        if (!res.ok) throw new Error('no-json');
        return res.json();
      })
      .then((json) => {
        if (!mounted) return;
        const resolveImages = (obj: any) => {
          const out: any = {};
          for (const key of Object.keys(obj)) {
            const val = obj[key];
            if (Array.isArray(val)) {
              out[key] = val.map((item: any) => ({
                ...item,
                image: typeof item.image === 'string' && !item.image.startsWith('/') ? `/assets/${item.image}` : item.image
              }));
            } else {
              out[key] = val;
            }
          }
          return out;
        };

        setData(resolveImages(json));
      })
      .catch(() => setData(menuData as any))
      .finally(() => { if (mounted) setLoading(false); });

    return () => { mounted = false };
  }, []);

  // Helper: flatten all items from the source
  const getAllItems = (source: any): MenuItem[] => {
    const src = source || {};
    return [
      ...(src.appetizers || []),
      ...(src.vegetarian || []),
      ...(src.beef || []),
      ...(src.chicken || []),
      ...(src.lamb || []),
      ...(src.combinationPlatters || []),
      ...(src.fish || []),
      ...(src.injera || []),
    ];
  };

  // Helper function to get items based on category (category refers to dietary values)
  // Accepts dietary as either a string or an array in the source data.
  const getItemsByCategory = (category: string, source: any): MenuItem[] => {
    const all = getAllItems(source);
    if (category === "All") return all;

    const catLower = category.toLowerCase();

    return all.filter((item) => {
      const d = (item as any).dietary;
      if (!d) return false;
      if (Array.isArray(d)) {
        return d.some((v) => String(v).toLowerCase() === catLower);
      }
      return String(d).toLowerCase() === catLower;
    });
  };

  // Static filter categories (as requested)
  const FILTER_CATEGORIES = [
    "All",
    "Vegetarian",
    "Beef",
    "Chicken",
    "Lamb",
    "Fish",
    "Combination Platters",
  ];

  // Get items for the currently selected category
  const currentItems = getItemsByCategory(activeCategory, data || menuData);

  return (
    <section className="py-16 md:py-24 bg-[hsl(44,100%,95%)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xl text-[hsl(44,100%,52%)]">Authentic & Traditional</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Our Ethiopian Menu</h2>
          <p className="text-[#757575]">Experience the vibrant flavors of traditional Ethiopian cuisine, prepared with authentic spices and time-honored recipes.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        {/* Menu Categories (dietary-based) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FILTER_CATEGORIES.map((opt) => (
            <Button
              key={opt}
              variant={activeCategory === opt ? "default" : "outline"}
              onClick={() => setActiveCategory(opt)}
              className={activeCategory === opt ? "bg-primary text-white" : "text-primary border-primary"}
            >
              {opt}
            </Button>
          ))}
        </div>
        
        {/* Category Title */}
        {activeCategory !== "All" && (
          <div className="mb-12">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary text-center">
              {activeCategory}
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
                  {item.dietary && item.showdietary && (
                    <Badge variant="secondary" className="bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                      {item.dietary}
                    </Badge>
                  )}
                  {item.label && (
                    <Badge variant="secondary" className="bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                      {item.label}
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