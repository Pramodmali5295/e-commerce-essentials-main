import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Map, ChevronRight, ShoppingBag, Info, Shield, HelpCircle, Briefcase, Mail, Layout } from "lucide-react";

const Sitemap = () => {
    const sections = [
        {
            title: "Main Pages",
            icon: Layout,
            links: [
                { label: "Home", path: "/" },
                { label: "Shop All Products", path: "/products" },
                { label: "Shopping Cart", path: "/cart" }
            ]
        },
        {
            title: "Customer Service",
            icon: HelpCircle,
            links: [
                { label: "Contact Us", path: "/contact" },
                { label: "FAQs", path: "/faq" },
                { label: "Shipping & Delivery", path: "/shipping" },
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms of Service", path: "/terms" }
            ]
        },
        {
            title: "About ShopVista",
            icon: Info,
            links: [
                { label: "Our Story", path: "/about" },
                { label: "Careers", path: "/careers" },
                { label: "Our Blog", path: "/blog" }
            ]
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-surface">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-accent/10 text-accent rounded-3xl flex items-center justify-center mx-auto mb-6"
                    >
                        <Map size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-4"
                    >
                        Site <span className="text-accent">Map</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        All the pages of our website organized for easy navigation.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card p-8 rounded-3xl border border-border shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-surface rounded-xl text-accent">
                                    <section.icon size={24} />
                                </div>
                                <h2 className="text-xl font-bold">{section.title}</h2>
                            </div>
                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link
                                            to={link.path}
                                            className="group flex items-center justify-between text-muted-foreground hover:text-accent transition-colors py-1"
                                        >
                                            <span className="font-medium">{link.label}</span>
                                            <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
