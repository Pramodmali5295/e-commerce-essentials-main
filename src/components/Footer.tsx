import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin, Mail, ChevronRight, CreditCard, ShieldCheck, Zap } from "lucide-react";
import { categories } from "@/data/products";
import { motion } from "framer-motion";

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
    { label: "Official Blog", path: "/blog" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: Instagram, label: "Instagram", color: "hover:bg-[#E4405F]" },
    { icon: Twitter, label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
  ];

  return (
    <footer className="gradient-navy text-primary-foreground relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -ml-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -mr-32 -mb-32 pointer-events-none" />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Info - Spans 4 columns */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-base font-bold text-primary">S</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">ShopVista</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-8 max-w-sm">
              The world's premier destination for curated boutique essentials. We bridge the gap between world-class quality and accessible luxury.
            </p>

            {/* Newsletter Mini */}
            <div className="space-y-4 mb-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Stay Updated</h4>
              <div className="flex gap-2 max-w-xs">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs flex-1 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                />
                <button className="bg-accent text-primary px-4 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
                  <Zap size={14} className="fill-primary" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ y: -4 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all ${social.color} hover:border-transparent group`}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Shop - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-8">Shop</h4>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="text-sm opacity-60 hover:opacity-100 hover:text-accent flex items-center gap-2 transition-all group"
                  >
                    <ChevronRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-8">Service</h4>
            <ul className="space-y-4">
              {customerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-60 hover:opacity-100 hover:text-accent flex items-center gap-2 transition-all group"
                  >
                    <ChevronRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-8">Contact</h4>
            <div className="space-y-6">
              <a href="tel:18001234567" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-0.5">Call Us</p>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors">1800-123-4567</p>
                </div>
              </a>
              <a href="mailto:support@shopvista.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-0.5">Email Support</p>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors">support@shopvista.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-0.5">Location</p>
                  <p className="text-sm font-semibold leading-snug max-w-[140px]">Shopping St., Mumbai, IN 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-[11px] opacity-40 font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} ShopVista Boutique. All Rights Reserved.
              </p>
              <div className="flex items-center gap-2 text-[10px] opacity-60 font-medium">
                <ShieldCheck size={12} className="text-emerald-500" />
                SECURE 256-BIT SSL ENCRYPTED SHOPPING WEBSITE
              </div>
            </div>

            {/* Payment & Trust Icons */}
            <div className="flex flex-wrap justify-center gap-3">
              {[CreditCard, ShieldCheck].map((Icon, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <Icon size={14} className="text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Verified Provider</span>
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest opacity-40">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
