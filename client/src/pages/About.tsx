import { Sprout, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xl text-[hsl(44,100%,52%)]">Our Story</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">About Harambe Ethiopian Restaurant</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://s3-media0.fl.yelpcdn.com/bphoto/hd6kliVe-bu8TPWU0SXoTg/o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant interior with rustic decor" 
              className="rounded-lg shadow-xl w-full h-[400px] md:h-[500px] object-cover object-center"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-lg text-white hidden md:block">
              <p className="font-accent text-xl">Est. 2000</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">From Farm to Your Table</h3>
            <p className="text-[#757575] mb-6">Harambe Restaurant was born from a dream to share the rich culinary heritage of Ethiopia with our community. Founded by [Founder's Name(s)], who immigrated from Addis Ababa, our restaurant is a celebration of authentic flavors, traditional cooking methods, and the vibrant culture of our homeland.</p>
            
            <p className="text-[#757575] mb-6">The name "Harambe," meaning "all pull together" in Swahili, reflects our philosophy of unity and collective effort. While the term is more common in East Africa, its spirit resonates with the Ethiopian tradition of communal dining and shared experiences. We aim to create a space where people can come together, share delicious food, and connect with one another.</p>
            
            <p className="text-[#757575] mb-8">From hand-picked spices to meticulously prepared dishes, every meal at Harambe is a testament to our dedication to quality and authenticity. We invite you to join our family and experience the warmth of Ethiopian hospitality.</p>
            
            <div className="flex items-center space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                alt="Chef Daniel Kebede" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-medium">Daniel Kebede</p>
                <p className="text-[#757575] text-sm">Founder & Head Chef</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <Sprout className="text-[hsl(44,100%,52%)] h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Authenticity</h3>
            <p className="text-[#757575]">Serving genuine Ethiopian dishes made with traditional recipes and the freshest ingredients.</p>
          </div>
          
          <div className="text-center p-6">
            <Users className="text-[hsl(44,100%,52%)] h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Community</h3>
            <p className="text-[#757575]">Fostering a welcoming environment and giving back to the community that supports us.</p>
          </div>
          
          <div className="text-center p-6">
            <Heart className="text-[hsl(44,100%,52%)] h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Cultural Heritage</h3>
            <p className="text-[#757575]">Sharing the rich culture and culinary traditions of Ethiopia with our guests.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
