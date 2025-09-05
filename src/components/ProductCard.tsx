import { ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: string;
  description: string;
}

const ProductCard = ({ image, title, category, price, description }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-lg">
            <Eye className="w-5 h-5" />
          </button>
          <button className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-lg">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-accent font-medium">{category}</p>
            <h3 className="font-display font-semibold text-lg text-foreground mt-1">{title}</h3>
          </div>
          <span className="text-xl font-bold text-primary">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </div>

      {/* Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
          Handmade
        </span>
      </div>
    </div>
  );
};

export default ProductCard;