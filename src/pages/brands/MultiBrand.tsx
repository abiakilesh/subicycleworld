import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/ProductGrid";
import { schnellProducts, keysToProducts, dodgeArchivesProducts } from "@/data/products";

const MultiBrand = () => (
  <Layout>
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-brand-black">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground mb-4 animate-fade-in-up">More Premium Brands</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>Discover specialized collections from Schnell, KeysTo, and Dodge Archives</p>
      </div>
    </section>
    
    <div className="bg-background">
      <div className="container-custom py-12">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">Schnell</h2>
        <p className="text-muted-foreground mb-8">German-engineered precision for road cycling enthusiasts</p>
      </div>
      <ProductGrid products={schnellProducts} />
    </div>
    
    <div className="bg-muted">
      <div className="container-custom py-12">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">KeysTo</h2>
        <p className="text-muted-foreground mb-8">Urban mobility solutions for the modern commuter</p>
      </div>
      <ProductGrid products={keysToProducts} />
    </div>
    
    <div className="bg-background">
      <div className="container-custom py-12">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">Dodge Archives</h2>
        <p className="text-muted-foreground mb-8">Classic heritage bicycles with timeless design</p>
      </div>
      <ProductGrid products={dodgeArchivesProducts} />
    </div>
  </Layout>
);

export default MultiBrand;
