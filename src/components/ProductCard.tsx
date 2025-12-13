import { useState } from "react";
import { Eye, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
  onViewDetails?: (product: Product) => void;
}

const ProductCard = ({ product, index = 0, onViewDetails }: ProductCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { name, image, price, features, category } = product;

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 opacity-0 animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
      onClick={() => onViewDetails?.(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick View Button */}
        <Button
          size="sm"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails?.(product);
          }}
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>

        {/* Category Badge */}
        {category && (
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
            {category}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-card-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {features.slice(0, 3).map((feature, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IndianRupee className="h-5 w-5 text-primary" />
            <span className="font-heading font-bold text-xl text-card-foreground">
              {price.toLocaleString("en-IN")}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">MRP</span>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default ProductCard;
