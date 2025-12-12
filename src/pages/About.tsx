import { Bike, Award, Users, Heart, Target, Eye } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => (
  <Layout>
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-brand-black">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground mb-4 animate-fade-in-up">About <span className="text-primary">Subi Cycle World</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>Your trusted partner in cycling since 2008</p>
      </div>
    </section>
    
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Subi Cycle World began with a simple passion: bringing quality bicycles to cycling enthusiasts in Coimbatore. Over 15 years, we've grown from a small shop to the region's premier multi-brand bicycle destination, serving over 50,000 happy customers with genuine products and expert guidance.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">To make cycling accessible to everyone by offering the widest range of quality bicycles at competitive prices, backed by exceptional customer service.</p>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border">
            <Eye className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground">To be South India's most trusted bicycle retailer, promoting healthy lifestyles and sustainable transportation through quality cycling products.</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Bike, title: "8+ Brands", desc: "Premium selection" },
            { icon: Award, title: "15+ Years", desc: "Industry experience" },
            { icon: Users, title: "50K+ Customers", desc: "Satisfied riders" },
            { icon: Heart, title: "100% Genuine", desc: "Authentic products" },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-muted">
              <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-xl">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
