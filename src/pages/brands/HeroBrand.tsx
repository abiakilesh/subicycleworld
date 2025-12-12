import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { heroProducts } from "@/data/products";

const HeroBrand = () => (
  <Layout>
    <BrandHero brandName="Hero Cycles" tagline="India's Most Trusted Bicycle Brand" description="From kids' first rides to professional MTBs, Hero Cycles delivers quality, durability, and innovation for every cyclist." />
    <ProductGrid products={heroProducts} title="Hero Cycles Collection" />
  </Layout>
);

export default HeroBrand;
