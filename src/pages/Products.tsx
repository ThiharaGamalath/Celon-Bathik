import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Filter } from 'lucide-react';
import product1 from '@/assets/batik-product-1.jpg';
import product2 from '@/assets/batik-product-2.jpg';
import product3 from '@/assets/batik-product-3.jpg';
import product4 from '@/assets/batik-product-4.jpg';
import product5 from '@/assets/batik-product-5.jpg';
import artisanImage from '@/assets/artisan-work.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fabric', name: 'Fabrics' },
    { id: 'saree', name: 'Sarees' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'home', name: 'Home Decor' }
  ];

  const products = [
    {
      id: 1,
      image: product1,
      title: "Royal Blue Heritage",
      category: "fabric",
      categoryName: "Fabric",
      price: "$89",
      description: "Traditional floral motifs with intricate golden highlights on premium cotton."
    },
    {
      id: 2,
      image: product2,
      title: "Peacock Paradise Saree",
      category: "saree",
      categoryName: "Saree",
      price: "$245",
      description: "Elegant peacock pattern saree with deep blue and gold traditional design."
    },
    {
      id: 3,
      image: product3,
      title: "Temple Blessing Wall Art",
      category: "home",
      categoryName: "Wall Hanging",
      price: "$125",
      description: "Sacred Buddhist temple motifs in maroon and cream with gold accents."
    },
    {
      id: 4,
      image: product4,
      title: "Lotus Bloom Scarf",
      category: "accessories",
      categoryName: "Scarf",
      price: "$65",
      description: "Delicate lotus and elephant patterns in sapphire blue on silk."
    },
    {
      id: 5,
      image: product5,
      title: "Heritage Table Runner",
      category: "home",
      categoryName: "Table Runner",
      price: "$85",
      description: "Traditional border designs in maroon and gold, perfect for dining elegance."
    },
    {
      id: 6,
      image: artisanImage,
      title: "Artisan Collection",
      category: "fabric",
      categoryName: "Premium Fabric",
      price: "$150",
      description: "Exclusive hand-painted designs by our master artisans."
    },
    {
      id: 7,
      image: product1,
      title: "Ocean Waves Pattern",
      category: "fabric",
      categoryName: "Fabric",
      price: "$95",
      description: "Flowing wave patterns inspired by Sri Lankan coastlines."
    },
    {
      id: 8,
      image: product2,
      title: "Traditional Kandyan Saree",
      category: "saree",
      categoryName: "Saree",
      price: "$285",
      description: "Classic Kandyan style with intricate border work."
    },
    {
      id: 9,
      image: product3,
      title: "Elephant Parade Cushion",
      category: "home",
      categoryName: "Cushion Cover",
      price: "$45",
      description: "Playful elephant motifs on soft cotton cushion covers."
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Collection
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              Authentic Batik
              <span className="text-primary"> Masterpieces</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our curated collection of handcrafted Batik products, each piece 
              telling a unique story of Sri Lankan heritage and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  category={product.categoryName}
                  price={product.price}
                  description={product.description}
                />
              </div>
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Special Request Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We offer custom Batik designs tailored to your specific requirements
          </p>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            Request Custom Design
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;