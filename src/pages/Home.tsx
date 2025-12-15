import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Phone, Bike, Award, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import subiLogo from "@/assets/subi-logo.jpg";

const brands = [
  { name: "Hero Cycles", path: "/brands/hero", description: "India's leading cycle brand" },
  { name: "Track and Trail", path: "/brands/track-and-trail", description: "Adventure awaits" },
  { name: "Caya Bikes", path: "/brands/caya-bikes", description: "Quality meets style" },
  { name: "Outdoors 91", path: "/brands/outdoors-91", description: "Built for exploration" },
  { name: "Stryder Bikes", path: "/brands/stryder-bikes", description: "Speed & performance" },
  { name: "Toronto Bicycles", path: "/brands/toronto-bicycles", description: "Premium cycling" },
  { name: "Cult Cycle", path: "/brands/cult-cycle", description: "BMX specialists" },
  { name: "Firefox", path: "/brands/firefox", description: "Ride the difference" },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-brand-black" />
        
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <img src={subiLogo} alt="Subi Cycle World" className="h-32 w-auto mx-auto mb-8 rounded-2xl shadow-2xl animate-fade-in-up" />
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              SUBI <span className="text-primary">CYCLE</span> WORLD
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Your premier destination for quality bicycles. Explore 8+ premium brands under one roof in Coimbatore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Link to="/brands/hero">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  Explore Brands <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  Visit Store <MapPin className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Bike, value: "8+", label: "Premium Brands" },
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Users, value: "50K+", label: "Happy Customers" },
              { icon: Shield, value: "100%", label: "Genuine Products" },
            ].map((stat, i) => (
              <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary-foreground" />
                <p className="text-4xl font-heading font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">Our <span className="text-primary">Brands</span></h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Discover the perfect ride from our curated collection of premium bicycle brands</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <Link key={brand.path} to={brand.path} className="group animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="font-heading font-bold text-xl text-card-foreground group-hover:text-primary transition-colors">{brand.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{brand.description}</p>
                  <ChevronRight className="absolute top-1/2 right-4 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/brands/multi-brand">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View More Brands <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Showrooms CTA */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Ramanathapuram", address: "First Floor, No.1/1, Trichy Road, Near Suryabala Honda Showroom", phone: "+91 78069 33433" },
              { name: "Saibaba Colony", address: "VNM TOWERS, 1120, Opp. Mercedes Benz Showroom, Mettupalayam Road", phone: "+91 96511 40404" },
            ].map((store, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card/5 border border-border/20 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-2xl text-secondary-foreground mb-2">{store.name}</h3>
                <p className="text-muted-foreground mb-4">{store.address}</p>
                <div className="flex items-center gap-2 text-primary">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="hover:underline">{store.phone}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Directions <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
