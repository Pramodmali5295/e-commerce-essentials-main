import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin, Mail } from "lucide-react";
import { categories } from "@/data/products";

const Footer = () => {



  const customerServiceLinks = [
    { label: "Contact Us", path: "/contact" },
    { label: "FAQs", path: "/faq" },
    { label: "Shipping & Returns", path: "/shipping" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-2 w-fit">
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                <span className="text-base font-bold text-primary">S</span>
              </div>
              <span className="text-2xl font-display font-bold">ShopVista</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-6 lg:mb-4 max-w-sm">
              Your premium destination for quality products at unbeatable prices. Shop with confidence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8 lg:mb-4">
              <a href="tel:18001234567" className="flex items-center gap-3 text-base sm:text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all w-fit">
                <Phone size={18} className="flex-shrink-0" />
                <span>1800-123-4567</span>
              </a>
              <a href="mailto:support@shopvista.com" className="flex items-center gap-3 text-base sm:text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all w-fit">
                <Mail size={18} className="flex-shrink-0" />
                <span>support@shopvista.com</span>
              </a>
              <div className="flex items-start gap-3 text-base sm:text-sm opacity-80">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Shopping Street, Mumbai, India 400001</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-4 lg:mb-0">
            <h4 className="font-display font-bold mb-4 lg:mb-3 text-base sm:text-sm uppercase tracking-wider text-accent lg:text-accent">Shop</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 lg:gap-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all inline-block hover:translate-x-1"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="mb-4 lg:mb-0">
            <h4 className="font-display font-bold mb-4 lg:mb-3 text-base sm:text-sm uppercase tracking-wider text-accent">Support</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 lg:gap-y-1">
              {customerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Social Media */}
          <div>
            <h4 className="font-display font-bold mb-4 lg:mb-3 text-base sm:text-sm uppercase tracking-wider text-accent">Links</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 lg:gap-y-1 mb-6 lg:mb-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-base sm:text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>


          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm sm:text-xs opacity-60">
            <div className="text-center md:text-left">
              <p className="font-medium">© {new Date().getFullYear()} ShopVista. All rights reserved.</p>
              <p className="mt-2 font-bold uppercase tracking-widest text-[11px]">Made with ❤️ in India</p>
            </div>

            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center font-medium">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
              <Link to="/shipping" className="hover:text-accent transition-colors">Shipping</Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
