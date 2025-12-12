interface BrandHeroProps {
  brandName: string;
  tagline: string;
  description: string;
  bgImage?: string;
}

const BrandHero = ({ brandName, tagline, description, bgImage }: BrandHeroProps) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-brand-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground mb-4 animate-fade-in-up">
            {brandName}
          </h1>
          
          {/* Tagline */}
          <p
            className="text-xl md:text-2xl font-heading font-medium text-primary mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            {tagline}
          </p>
          
          {/* Description */}
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            {description}
          </p>

          {/* Decorative Line */}
          <div
            className="mt-8 flex items-center justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <div className="h-3 w-3 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
