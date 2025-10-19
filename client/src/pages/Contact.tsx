import { useForm, ValidationError } from "@formspree/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import hoursData from "@/data/hours.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwpnybnw");

  if (state.succeeded) {
    return (
      <section className="py-16 md:py-24 bg-[hsl(44,100%,95%)]">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Thank you!</h2>
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-[hsl(44,100%,95%)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xl text-[hsl(44,100%,52%)]">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Contact Us</h2>
          <p className="text-[#757575]">We'd love to hear from you! Reach out for reservations, feedback, or special event inquiries.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-primary">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required className="focus-visible:ring-primary w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="focus-visible:ring-primary w-full p-2 border rounded" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" className="focus-visible:ring-primary w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required className="focus-visible:ring-primary w-full p-2 border rounded">
                  <option value="">Please select a subject</option>
                  <option value="reservation">Reservation</option>
                  <option value="feedback">Feedback</option>
                  <option value="event">Private Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required className="resize-none focus-visible:ring-primary w-full p-2 border rounded" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" disabled={state.submitting} className="w-full bg-[hsl(0,64%,50%)] hover:bg-[hsl(0,64%,45%)] p-2 rounded text-white font-bold">
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6 text-primary">Visit Us</h3>
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="text-[hsl(44,100%,52%)] h-5 w-5 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-[#757575]">2149 Commercial Dr<br />Vancouver, BC, V5N 4B3</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <Phone className="text-[hsl(44,100%,52%)] h-5 w-5 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-[#757575]">+1-604-216-1060</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <Mail className="text-[hsl(44,100%,52%)] h-5 w-5 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-[#757575]">info@harambe.ca</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-[hsl(44,100%,52%)] h-5 w-5 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Hours</h4>
                  <div className="text-[#757575]">
                    {hoursData.hours.map((h, idx) => (
                      <p key={idx}>
                        {h.days}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.4179662968974!2d-123.07168948454995!3d49.266456479181495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486715c5b9aed91%3A0x13c11eb9b66ca0e7!2s2149%20Commercial%20Dr%2C%20Vancouver%2C%20BC%20V5N%204B3%2C%20Canada!5e0!3m2!1sen!2sca!4v1684164885884!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Harambe Ethiopian Restaurant location"
              ></iframe>
              {/* Map overlay with restaurant location pin */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                <div className="bg-primary text-white px-3 py-2 rounded-lg shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  Harambe Ethiopian Restaurant
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-[hsl(122,63%,25%)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href="#" className="text-primary hover:text-[hsl(122,63%,25%)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" className="text-primary hover:text-[hsl(122,63%,25%)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a href="#" className="text-primary hover:text-[hsl(122,63%,25%)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
