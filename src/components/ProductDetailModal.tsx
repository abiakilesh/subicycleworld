import { useState } from "react";
import { IndianRupee, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const [inquiryForm, setInquiryForm] = useState({ name: "", phone: "", message: "" });

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${product.name} priced at ₹${product.price.toLocaleString("en-IN")}. Please provide more details.`
    );
    window.open(`https://wa.me/917806933433?text=${message}`, "_blank");
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Name: ${inquiryForm.name}\nPhone: ${inquiryForm.phone}\nProduct: ${product.name}\nPrice: ₹${product.price.toLocaleString("en-IN")}\nMessage: ${inquiryForm.message}`
    );
    window.open(`https://wa.me/917806933433?text=${message}`, "_blank");
    setInquiryForm({ name: "", phone: "", message: "" });
  };

  // Extended specifications based on features
  const specifications = [
    { label: "Gears", value: product.features[0] || "N/A" },
    { label: "Frame", value: product.features[1] || "N/A" },
    { label: "Wheel Size", value: product.features[2] || "N/A" },
    { label: "Brakes", value: "Disc Brakes" },
    { label: "Suspension", value: product.category === "MTB" ? "Front Suspension" : "Rigid" },
    { label: "Weight", value: "12-15 kg (approx)" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-heading font-bold text-card-foreground">
              {product.name}
            </DialogTitle>
            {product.category && (
              <Badge className="bg-primary text-primary-foreground">{product.category}</Badge>
            )}
          </div>
        </DialogHeader>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Single Product Image */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Price */}
              <div className="flex items-center gap-2">
                <IndianRupee className="h-8 w-8 text-primary" />
                <span className="text-4xl font-heading font-bold text-card-foreground">
                  {product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-muted-foreground">MRP</span>
              </div>

              {/* Quick Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <Badge key={idx} variant="outline" className="text-sm">
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* Specifications */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-lg">Specifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  {specifications.map((spec, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-muted">
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="font-medium text-card-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={handleWhatsAppInquiry}
                  className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Inquiry
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+917806933433">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Inquiry Form */}
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-heading font-bold mb-3">Send Inquiry</h4>
                <form onSubmit={handleSubmitInquiry} className="space-y-3">
                  <Input
                    placeholder="Your Name"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="bg-background"
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    className="bg-background"
                    required
                  />
                  <Textarea
                    placeholder="Your Message (optional)"
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="bg-background"
                    rows={2}
                  />
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
