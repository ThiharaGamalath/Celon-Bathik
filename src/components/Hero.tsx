import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-batik.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Traditional Sri Lankan Batik Art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full border border-border">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Handcrafted Since 1952
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground">
            The Art of
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              Sri Lankan Batik
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Preserving centuries of tradition through intricate patterns and vibrant colors. 
            Each piece tells a story of heritage, craftsmanship, and cultural pride.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 shadow-lg"
            >
              Custom Orders
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-muted rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;