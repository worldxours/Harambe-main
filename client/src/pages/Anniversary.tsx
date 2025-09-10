import { useEffect } from "react";
import confetti from "canvas-confetti";
import couponImagePath from "@/assets/harambe-25th-coupon.jpeg";

export default function Anniversary() {
  useEffect(() => {
    const triggerConfetti = () => {
      const colors = [
        '#228B22',
        '#FFD700', 
        '#DC143C',
        '#32CD32',
        '#FFA500'
      ];

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.2, y: 0.6 },
        colors: colors,
        scalar: 1.2,
        gravity: 0.8
      });

      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { x: 0.8, y: 0.6 },
          colors: colors,
          scalar: 1.1,
          gravity: 0.8
        });
      }, 300);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 90,
          origin: { x: 0.5, y: 0.4 },
          colors: colors,
          scalar: 0.9,
          gravity: 0.8
        });
      }, 600);
    };

    const timer = setTimeout(triggerConfetti, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(44,100%,95%)]">
      <section className="py-20 bg-gradient-to-br from-[hsl(122,63%,35%)] to-[hsl(122,63%,25%)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-heading">
              Come celebrate 
              <span className="block text-[hsl(44,100%,52%)]">25 Years of Harambe Ethiopian Restaurant</span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <div className="text-3xl md:text-4xl font-bold text-[hsl(44,100%,52%)] mb-4">
                25% OFF
              </div>
              <p className="text-xl md:text-2xl mb-2">
                Enjoy a special 25% off your food bill
              </p>
              <p className="text-lg opacity-90">
                (Drinks not included)
              </p>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Join us for Lunch or Dinner from <span className="font-bold text-[hsl(44,100%,52%)]">July 14-19, 2025</span> as we mark our 25th anniversary with gratitude and joy!
            </p>
            
            <p className="text-lg mb-4 text-white/90">
              <a 
                href={couponImagePath} 
                download="harambe-25th-anniversary-coupon.jpeg"
                className="text-[hsl(44,100%,52%)] hover:text-[hsl(44,100%,40%)] underline font-semibold"
              >
                Click here to download the coupon
              </a> or 
            </p>
            
            <div className="klaviyo-form-RBJUt3"></div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Offer valid during lunch and dinner hours only.</strong> To receive this discount please show this coupon at the restaurant (printed or from your phone)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[hsl(122,63%,35%)] to-[hsl(122,63%,25%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Thank you for being part of our journey!</h2>
          
          <div className="max-w-2xl mx-auto space-y-4 text-xl">
            <p className="font-semibold text-[hsl(44,100%,52%)]">Authentic Flavours. Warm Hospitality.</p>
            <p className="text-lg opacity-90">A Taste of Ethiopia in the Heart of Vancouver</p>
          </div>
        </div>
      </section>
    </div>
  );
}