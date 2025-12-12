import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { torontoBicyclesProducts } from "@/data/products";

const TorontoBicyclesBrand = () => (
  <Layout>
    <BrandHero brandName="Toronto Bicycles" tagline="Premium Cycling Experience" description="Toronto Bicycles offers premium-grade cycles with superior craftsmanship and advanced features." />
    <ProductGrid products={torontoBicyclesProducts} title="Toronto Bicycles Collection" />
  </Layout>
);

export default TorontoBicyclesBrand;
