import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { cultCycleProducts } from "@/data/products";

const CultCycleBrand = () => (
  <Layout>
    <BrandHero brandName="Cult Cycle" tagline="BMX Specialists" description="Cult Cycle is the go-to brand for BMX enthusiasts seeking authentic street and park riding experiences." />
    <ProductGrid products={cultCycleProducts} title="Cult Cycle Collection" />
  </Layout>
);

export default CultCycleBrand;
