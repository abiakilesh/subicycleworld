import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { outdoors91Products } from "@/data/products";

const Outdoors91Brand = () => (
  <Layout>
    <BrandHero brandName="Outdoors 91" tagline="Built for Exploration" description="Experience the thrill of outdoor cycling with Outdoors 91's rugged and reliable bicycles." />
    <ProductGrid products={outdoors91Products} title="Outdoors 91 Collection" />
  </Layout>
);

export default Outdoors91Brand;
