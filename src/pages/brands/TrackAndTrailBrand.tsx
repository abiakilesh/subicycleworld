import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { trackAndTrailProducts } from "@/data/products";

const TrackAndTrailBrand = () => (
  <Layout>
    <BrandHero brandName="Track and Trail" tagline="Adventure Awaits" description="Built for those who seek adventure. Track and Trail bicycles are engineered for performance on any terrain." />
    <ProductGrid products={trackAndTrailProducts} title="Track and Trail Collection" />
  </Layout>
);

export default TrackAndTrailBrand;
