import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import subiLogo from "@/assets/subi-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={subiLogo} alt="Subi Cycle World" className="h-16 w-auto rounded-lg" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your premier destination for quality bicycles. We bring you the best brands and expert
              guidance to find your perfect ride.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100076768810074"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/subi_cycle_world/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/SWorld75569"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Hero Cycles", path: "/brands/hero" },
                { name: "Firefox Life", path: "/brands/firefox-life" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom 1 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-primary">Ramanathapuram</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  First Floor, No.1/1, Trichy Road, Iyer Hospital Bus Stop, Near Suryabala Honda
                  Showroom, Coimbatore - 641 005
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+917806933433"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 78069 33433
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Showroom 2 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-primary">Saibaba Colony</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  VNM TOWERS, 1120, Ground Floor & 1st Floor, Opp. Mercedes Benz Showroom, Near
                  Avinashilingam College, Mettupalayam Road, Coimbatore - 641 043
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919651140404"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 96511 40404
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:subishnaenterprises@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                >
                  subishnaenterprises@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Subi Cycle World. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
