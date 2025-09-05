import { Palette, Users, Package, Truck, Calendar, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Work with our designers to create unique Batik patterns tailored to your vision",
      features: ["Personal consultation", "Design mockups", "Color customization", "Pattern exclusivity"]
    },
    {
      icon: Users,
      title: "Batik Workshops",
      description: "Learn the traditional art of Batik making from our master artisans",
      features: ["Hands-on training", "All materials provided", "Certificate of completion", "Take home your creation"]
    },
    {
      icon: Package,
      title: "Bulk Orders",
      description: "Special rates for hotels, resorts, and retail businesses",
      features: ["Volume discounts", "Custom branding", "Quality assurance", "Flexible payment terms"]
    },
    {
      icon: Truck,
      title: "International Shipping",
      description: "We deliver authentic Sri Lankan Batik worldwide",
      features: ["Secure packaging", "Express delivery", "Tracking provided", "Insurance available"]
    },
    {
      icon: Calendar,
      title: "Event Services",
      description: "Special Batik collections for weddings and corporate events",
      features: ["Theme coordination", "Bulk gifting options", "Custom packaging", "Event delivery"]
    },
    {
      icon: Award,
      title: "Restoration Services",
      description: "Expert restoration of vintage and damaged Batik pieces",
      features: ["Damage assessment", "Color restoration", "Fabric reinforcement", "Preservation advice"]
    }
  ];

  const process = [
    { step: "1", title: "Consultation", description: "Discuss your requirements and vision" },
    { step: "2", title: "Design", description: "Create mockups and refine patterns" },
    { step: "3", title: "Production", description: "Handcraft your custom Batik piece" },
    { step: "4", title: "Delivery", description: "Quality check and secure delivery" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              Tailored Batik
              <span className="text-primary"> Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From custom designs to workshops, we offer comprehensive services to meet 
              all your Batik needs with traditional craftsmanship and modern convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground">
              Our Custom Order Process
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              Simple steps to create your perfect Batik piece
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-accent-foreground">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-2xl p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Join Our Batik Workshops
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Experience the joy of creating your own Batik masterpiece under the 
                  guidance of our expert artisans. Perfect for tourists, art enthusiasts, 
                  and anyone interested in learning this traditional craft.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Every Saturday & Sunday</p>
                      <p className="text-sm text-muted-foreground">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Small Groups</p>
                      <p className="text-sm text-muted-foreground">Maximum 10 participants</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Book Your Workshop
                </h3>
                <p className="mb-6 opacity-90">
                  Limited spots available. Reserve your place today!
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg placeholder:text-primary-foreground/60 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg placeholder:text-primary-foreground/60 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                  />
                  <select className="w-full px-4 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground">
                    <option>Select Date</option>
                    <option>This Saturday</option>
                    <option>This Sunday</option>
                    <option>Next Saturday</option>
                    <option>Next Sunday</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Reserve Your Spot
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;