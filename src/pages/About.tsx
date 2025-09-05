import { Award, History, Users, Globe } from 'lucide-react';
import artisanImage from '@/assets/artisan-work.jpg';

const About = () => {
  const milestones = [
    { year: "1952", event: "Founded by master craftsman D.S. Jayawardena" },
    { year: "1975", event: "Received National Heritage Award" },
    { year: "1998", event: "Expanded to international markets" },
    { year: "2010", event: "Established artisan training academy" },
    { year: "2024", event: "Celebrating 72 years of excellence" }
  ];

  const values = [
    {
      icon: History,
      title: "Heritage Preservation",
      description: "Keeping ancient techniques alive for future generations"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Empowering local artisans and their families"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Maintaining the highest standards in every creation"
    },
    {
      icon: Globe,
      title: "Cultural Ambassador",
      description: "Sharing Sri Lankan art with the world"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              Seven Decades of 
              <span className="text-primary"> Batik Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From humble beginnings to becoming Sri Lanka's premier Batik heritage brand, 
              our journey is woven with passion, dedication, and artistic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Our Heritage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ceylon Batik Heritage was founded in 1952 by master craftsman D.S. Jayawardena, 
                who learned the art of Batik from Indonesian masters and adapted it with unique 
                Sri Lankan motifs and patterns.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the decades, we have evolved from a small family workshop to a renowned 
                institution that preserves and promotes Sri Lankan Batik art. Our commitment 
                to quality and authenticity has earned us recognition both locally and internationally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to honor traditional techniques while embracing innovation, 
                creating pieces that resonate with modern aesthetics while maintaining their 
                cultural authenticity.
              </p>
            </div>
            <div className="relative">
              <img
                src={artisanImage}
                alt="Our workshop"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 items-center mb-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 text-right">
                  <span className="font-display text-2xl font-bold text-primary">
                    {milestone.year}
                  </span>
                </div>
                <div className="w-4 h-4 bg-accent rounded-full relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-border" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              The principles that guide our craft and business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Master Artisans
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team consists of over 50 skilled artisans, each specializing in different 
              aspects of Batik creation. From wax application to dyeing, every step is 
              handled by experts who have dedicated their lives to this craft.
            </p>
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <blockquote className="text-lg italic text-muted-foreground">
                "Every piece of Batik we create is not just fabric; it's a canvas where 
                tradition meets creativity, where every pattern tells a story of our heritage."
              </blockquote>
              <cite className="block mt-4 text-foreground font-semibold">
                - Kumari Jayawardena, Head Artisan
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;