import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import subiLogo from "@/assets/subi-logo.jpg";

const brands = [
  { name: "Hero Cycles", path: "/brands/hero" },
  { name: "Track and Trail", path: "/brands/track-and-trail" },
  { name: "Caya Bikes", path: "/brands/caya-bikes" },
  { name: "Outdoors 91", path: "/brands/outdoors-91" },
  { name: "Stryder Bikes", path: "/brands/stryder-bikes" },
  { name: "Toronto Bicycles", path: "/brands/toronto-bicycles" },
  { name: "Cult Cycle", path: "/brands/cult-cycle" },
  { name: "Firefox", path: "/brands/firefox" },
  { name: "More Brands", path: "/brands/multi-brand" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={subiLogo}
              alt="Subi Cycle World"
              className="h-14 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-primary-foreground leading-tight">
                SUBI CYCLE WORLD
              </h1>
              <p className="text-xs text-muted-foreground">Premium Cycles</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/">
              <Button
                variant="ghost"
                className={`text-secondary-foreground hover:text-primary hover:bg-primary/10 ${
                  isActive("/") ? "text-primary bg-primary/10" : ""
                }`}
              >
                Home
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-secondary-foreground hover:text-primary hover:bg-primary/10 gap-1"
                >
                  Brands <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card border-border">
                {brands.map((brand) => (
                  <DropdownMenuItem key={brand.path} asChild>
                    <Link
                      to={brand.path}
                      className="w-full cursor-pointer hover:bg-primary/10 hover:text-primary"
                    >
                      {brand.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about">
              <Button
                variant="ghost"
                className={`text-secondary-foreground hover:text-primary hover:bg-primary/10 ${
                  isActive("/about") ? "text-primary bg-primary/10" : ""
                }`}
              >
                About
              </Button>
            </Link>

            <Link to="/service">
              <Button
                variant="ghost"
                className={`text-secondary-foreground hover:text-primary hover:bg-primary/10 ${
                  isActive("/service") ? "text-primary bg-primary/10" : ""
                }`}
              >
                Service
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="ghost"
                className={`text-secondary-foreground hover:text-primary hover:bg-primary/10 ${
                  isActive("/contact") ? "text-primary bg-primary/10" : ""
                }`}
              >
                Contact
              </Button>
            </Link>

            <Link to="/contact">
              <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90">
                Visit Store
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-secondary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors ${
                  isActive("/") ? "bg-primary/10 text-primary" : ""
                }`}
              >
                Home
              </Link>

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Brands</p>
                <div className="grid grid-cols-2 gap-2">
                  {brands.map((brand) => (
                    <Link
                      key={brand.path}
                      to={brand.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-sm rounded-lg text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors ${
                  isActive("/about") ? "bg-primary/10 text-primary" : ""
                }`}
              >
                About
              </Link>

              <Link
                to="/service"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors ${
                  isActive("/service") ? "bg-primary/10 text-primary" : ""
                }`}
              >
                Service
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors ${
                  isActive("/contact") ? "bg-primary/10 text-primary" : ""
                }`}
              >
                Contact
              </Link>

              <div className="px-4 pt-2">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Visit Store
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
