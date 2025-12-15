import { Wrench, Shield, Clock, CheckCircle, Phone, Bike, Settings, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Wrench,
    title: "General Servicing",
    description: "Complete cycle tune-up including brake adjustment, gear tuning, and lubrication",
    features: ["Brake adjustment & alignment", "Gear shifting optimization", "Chain lubrication", "Tire pressure check"],
  },
  {
    icon: Settings,
    title: "Wheel Truing & Alignment",
    description: "Precise wheel truing and spoke tensioning for smooth rides",
    features: ["Spoke tensioning", "Rim straightening", "Hub bearing check", "Tire balancing"],
  },
  {
    icon: Shield,
    title: "Safety Inspection",
    description: "Comprehensive safety check to ensure your cycle is road-ready",
    features: ["Frame inspection", "Brake system check", "Reflector installation", "Bell & horn testing"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Professional cleaning and polishing to restore your cycle's shine",
    features: ["Frame wash & polish", "Chain degreasing", "Component cleaning", "Rust prevention"],
  },
];

const brands = [
  "Hero Cycles",
  "Track and Trail", 
  "Caya Bikes",
  "Outdoors 91",
  "Stryder Bikes",
  "Toronto Bicycles",
  "Cult Cycle",
  "Firefox",
  "Schnell",
  "KeysTo",
  "Dodge Archives",
];

const Service = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-secondary/95 to-brand-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
              <Wrench className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Professional Cycle Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Expert <span className="text-primary">Service</span> for All Brands
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Keep your cycle in peak condition with our professional servicing. We service all major brands with genuine parts and expert care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <a href="tel:+917806933433">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" /> Book Service
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  Visit Showroom
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive cycle care services to keep you riding smoothly
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-secondary-foreground">
            Brands We <span className="text-primary">Service</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We provide expert service for all major cycle brands with genuine spare parts
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map((brand, i) => (
              <div
                key={brand}
                className="p-4 rounded-xl bg-card/10 border border-border/20 text-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <Bike className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-secondary-foreground">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Why Choose <span className="text-primary">Our Service</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Genuine Parts", description: "We use only genuine and high-quality spare parts for all repairs and replacements" },
              { icon: Clock, title: "Quick Turnaround", description: "Most services completed within 24-48 hours. Express service available on request" },
              { icon: Wrench, title: "Expert Technicians", description: "Our trained technicians have years of experience servicing all cycle brands" },
            ].map((item, i) => (
              <div
                key={item.title}
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Service Your Cycle?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Call us or visit our showroom for expert cycle servicing and repairs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917806933433">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" /> +91 78069 33433
              </Button>
            </a>
            <a href="tel:+919651140404">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
                <Phone className="mr-2 h-5 w-5" /> +91 96511 40404
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Service;