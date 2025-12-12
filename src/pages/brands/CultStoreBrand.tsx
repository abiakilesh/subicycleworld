import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { cultStoreProducts } from "@/data/products";

const CultStoreBrand = () => (
  <Layout>
    <BrandHero brandName="Cult Store" tagline="BMX Specialists" description="Cult Store is the go-to brand for BMX enthusiasts seeking authentic street and park riding experiences." />
    <ProductGrid products={cultStoreProducts} title="Cult Store Collection" />
  </Layout>
);

export default CultStoreBrand;
