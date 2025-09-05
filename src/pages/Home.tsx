import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Palette, Heart } from 'lucide-react';
import artisanImage from '@/assets/artisan-work.jpg';
import product1 from '@/assets/batik-product-1.jpg';
import product2 from '@/assets/batik-product-2.jpg';
import product3 from '@/assets/batik-product-3.jpg';

const Home = () => {
  const featuredProducts = [
    {
      image: product1,
      title: "Royal Blue Heritage",
      category: "Fabric",
      price: "$89",
      description: "Traditional floral motifs with intricate golden highlights on premium cotton."
    },
    {
      image: product2,
      title: "Peacock Paradise Saree",
      category: "Saree",
      price: "$245",
      description: "Elegant peacock pattern saree with deep blue and gold traditional design."
    },
    {
      image: product3,
      title: "Temple Blessing Wall Art",
      category: "Wall Hanging",
      price: "$125",
      description: "Sacred Buddhist temple motifs in maroon and cream with gold accents."
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Finest materials and traditional techniques passed down through generations"
    },
    {
      icon: Users,
      title: "Master Artisans",
      description: "Skilled craftspeople with decades of experience in Batik art"
    },
    {
      icon: Palette,
      title: "Unique Designs",
      description: "Original patterns inspired by Sri Lankan culture and heritage"
    },
    {
      icon: Heart,
      title: "Sustainable Craft",
      description: "Eco-friendly dyes and sustainable production methods"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  Our Heritage
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                  Crafting Stories Through
                  <span className="text-primary"> Batik Art</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over seven decades, Ceylon Batik Heritage has been at the forefront of preserving 
                and promoting Sri Lankan Batik artistry. Our master craftsmen combine ancient techniques 
                with contemporary designs to create timeless pieces that celebrate our rich cultural heritage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each piece is meticulously handcrafted using traditional wax-resist dyeing techniques, 
                ensuring that every pattern tells a unique story of Sri Lankan tradition and artistry.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={artisanImage}
                alt="Artisan creating Batik"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <p className="font-display text-3xl font-bold">70+</p>
                <p className="text-sm font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Featured Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              Handpicked Masterpieces
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              Excellence in Every Thread
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-xl hover:bg-background hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Create Your Custom Batik Design
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Work with our master artisans to bring your vision to life with personalized Batik creations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105"
              >
                Start Your Custom Order
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;