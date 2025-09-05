import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 11 234 5678", "+94 77 890 1234"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ceylonbatik.lk", "orders@ceylonbatik.lk"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Galle Road", "Colombo 03, Sri Lanka"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              Contact
              <span className="text-primary"> Ceylon Batik</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Whether you have questions about our products, 
              need custom designs, or want to visit our workshop, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                    <option>General Inquiry</option>
                    <option>Custom Order</option>
                    <option>Workshop Booking</option>
                    <option>Bulk Purchase</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Visit our workshop and showroom to experience the beauty of authentic 
                  Sri Lankan Batik firsthand.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-muted/50 p-6 rounded-xl hover:bg-muted transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map */}
              <div className="bg-muted rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map would go here</p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="bg-gradient-accent rounded-xl p-6 text-accent-foreground">
                <h3 className="font-display text-2xl font-bold mb-3">
                  Visit Our Workshop
                </h3>
                <p className="mb-4 opacity-90">
                  See our artisans at work and explore our complete collection in person. 
                  Guided tours available on request.
                </p>
                <button className="px-6 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;