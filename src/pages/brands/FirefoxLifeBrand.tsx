import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { firefoxLifeProducts } from "@/data/products";

const FirefoxLifeBrand = () => (
  <Layout>
    <BrandHero brandName="Firefox Life" tagline="Ride The Difference" description="Firefox Life combines international design standards with Indian engineering for an exceptional cycling experience." />
    <ProductGrid products={firefoxLifeProducts} title="Firefox Life Collection" />
  </Layout>
);

export default FirefoxLifeBrand;
