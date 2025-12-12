import Layout from "@/components/layout/Layout";
import BrandHero from "@/components/BrandHero";
import ProductGrid from "@/components/ProductGrid";
import { cayaBikesProducts } from "@/data/products";

const CayaBikesBrand = () => (
  <Layout>
    <BrandHero brandName="Caya Bikes" tagline="Quality Meets Style" description="Caya Bikes combines cutting-edge design with reliable performance for the modern cyclist." />
    <ProductGrid products={cayaBikesProducts} title="Caya Bikes Collection" />
  </Layout>
);

export default CayaBikesBrand;
