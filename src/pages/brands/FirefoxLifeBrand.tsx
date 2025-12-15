import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { firefoxProducts } from "@/data/products";

const FirefoxBrand = () => (
  <Layout>
    <BrandHero brandName="Firefox" tagline="Ride The Difference" description="Firefox combines international design standards with Indian engineering for an exceptional cycling experience." />
    <ProductGrid products={firefoxProducts} title="Firefox Collection" />
  </Layout>
);

export default FirefoxBrand;
