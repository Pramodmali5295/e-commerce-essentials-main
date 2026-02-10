import { motion } from "framer-motion";
import { Users, Target, ShieldCheck, Heart, ShoppingBag, Globe } from "lucide-react";

const About = () => {
    const stats = [
        { label: "Happy Customers", value: "1M+" },
        { label: "Countries Served", value: "20+" },
        { label: "Quality Checks", value: "100%" },
        { label: "Products", value: "50k+" },
    ];

    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower consumers globally by providing access to premium products that elevate their lifestyle and daily experiences."
        },
        {
            icon: Heart,
            title: "Our Values",
            description: "Integrity, innovation, and customer-first thinking are at the core of everything we do, every single day."
        },
        {
            icon: ShieldCheck,
            title: "Our Commitment",
            description: "We guarantee 100% authentic products, secure transactions, and a shopping experience that is as seamless as it is enjoyable."
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold mb-6"
                    >
                        ESTABLISHED 2020
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-8"
                    >
                        Redefining Your <span className="text-accent underline decoration-accent/30 underline-offset-8">Shopping</span> Experience
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed italic"
                    >
                        "ShopVista was born from a simple idea: that premium quality shouldn't come with an unreachable price tag. We've spent years building relationships with world-class manufacturers to bring you curated collections that inspire."
                    </motion.p>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-card p-10 rounded-3xl border border-border shadow-sm"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Story Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-display font-bold mb-6">Our Journey</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Founded in Mumbai in 2020, ShopVista started as a small team with a big vision. We noticed a gap in the market for high-quality, authentic products delivered with a level of customer service that was truly personal.
                            </p>
                            <p>
                                Today, we are proud to serve over 1 million customers worldwide, offering a diverse range of products from cutting-edge electronics to hand-crafted lifestyle goods. Our team has grown, but our core mission remains the same.
                            </p>
                            <p>
                                We believe that every product tells a story, and we are honored to be a part of yours. Thank you for choosing ShopVista.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-primary font-bold">SV</div>
                            <div>
                                <p className="font-bold">Rahul Sharma</p>
                                <p className="text-sm text-muted-foreground">Founder & CEO, ShopVista</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden bg-surface border-8 border-white shadow-2xl rotate-3 relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-accent/20 rounded-3xl -rotate-3 blur-sm" />
                    </motion.div>
                </div>

                {/* Mission/Values Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {values.map((v, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card p-8 rounded-3xl border border-border hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <v.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {v.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
