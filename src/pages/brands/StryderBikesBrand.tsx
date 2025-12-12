import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { stryderBikesProducts } from "@/data/products";

const StryderBikesBrand = () => (
  <Layout>
    <BrandHero brandName="Stryder Bikes" tagline="Speed & Performance" description="Stryder Bikes delivers exceptional value with performance-focused designs for every riding style." />
    <ProductGrid products={stryderBikesProducts} title="Stryder Bikes Collection" />
  </Layout>
);

export default StryderBikesBrand;
