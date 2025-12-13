import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => (
  <Layout>
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-brand-black">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground mb-4 animate-fade-in-up">Contact <span className="text-primary">Us</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>Visit our showrooms or reach out to us</p>
      </div>
    </section>
    
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Showroom 1 */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">SUBI CYCLE WORLD - Ramanathapuram</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">First Floor, No.1/1, Trichy Road, Iyer Hospital Bus Stop, Near Suryabala Honda Showroom, RAMANATHAPURAM, Coimbatore, Tamil Nadu - 641 005</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+917806933433" className="text-foreground hover:text-primary">+91 78069 33433</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4524!2d76.9814!3d11.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2ce1b5c5e4d0f5a0!2sTrichy%20Road%2C%20Ramanathapuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641005!5e0!3m2!1sen!2sin!4v1702468800000" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl" title="Ramanathapuram Location"></iframe>
          </div>
          
          {/* Showroom 2 */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">SUBI CYCLE WORLD - Saibaba Colony</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">VNM TOWERS, 1120, Ground Floor & 1st Floor, Opp. Mercedes Benz Showroom, Near Avinashilingam College, Saibaba Colony, Mettupalayam Road, Coimbatore - 641 043</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+919651140404" className="text-foreground hover:text-primary">+91 96511 40404</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2154!2d76.9652!3d11.0245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c9f0a1b2c3%3A0x4d5e6f7a8b9c0d1e!2sMettupalayam%20Road%2C%20Saibaba%20Colony%2C%20Coimbatore%2C%20Tamil%20Nadu%20641043!5e0!3m2!1sen!2sin!4v1702468800001" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl" title="Saibaba Colony Location"></iframe>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-heading font-bold mb-2">Send us a Message</h3>
            <p className="text-muted-foreground mb-6">Have questions? We'd love to hear from you.</p>
            <div className="flex items-center gap-3 mb-6 p-4 rounded-lg bg-muted">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:subishnaenterprises@gmail.com" className="text-foreground hover:text-primary">subishnaenterprises@gmail.com</a>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background" />
                <Input type="email" placeholder="Your Email" className="bg-background" />
              </div>
              <Input placeholder="Subject" className="bg-background" />
              <Textarea placeholder="Your Message" rows={4} className="bg-background" />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
