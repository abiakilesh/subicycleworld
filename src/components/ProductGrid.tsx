import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  features: string[];
  category?: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        {title && (
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              features={product.features}
              category={product.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
