import { motion } from "framer-motion";
import { Users, Target, ShieldCheck, Heart, ShoppingBag, Globe, ArrowRight, Award, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
    const stats = [
        { label: "Happy Customers", value: "1M+", icon: Users, color: "text-blue-600", bgColor: "bg-blue-600" },
        { label: "Countries Served", value: "20+", icon: Globe, color: "text-purple-600", bgColor: "bg-purple-600" },
        { label: "Quality Checks", value: "100%", icon: ShieldCheck, color: "text-emerald-600", bgColor: "bg-emerald-600" },
        { label: "Premium Products", value: "50k+", icon: ShoppingBag, color: "text-orange-600", bgColor: "bg-orange-600" },
    ];

    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower consumers globally by providing access to premium products that elevate their lifestyle and daily experiences.",
            color: "blue"
        },
        {
            icon: Heart,
            title: "Our Values",
            description: "Integrity, innovation, and customer-first thinking are at the core of everything we do, every single day.",
            color: "rose"
        },
        {
            icon: Sparkles,
            title: "Our Commitment",
            description: "We guarantee 100% authentic products, secure transactions, and a shopping experience that is as seamless as it is enjoyable.",
            color: "emerald"
        }
    ];

    return (
        <div className="pt-20 pb-0 min-h-screen bg-background overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative max-w-6xl">
                {/* Hero Section */}
                <div className="max-w-3xl mx-auto text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold mb-6 shadow-sm border border-accent/20 tracking-wider"
                    >
                        <Zap size={12} className="fill-accent" />
                        ESTABLISHED 2020 — LUXURY REDEFINED
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight tracking-tight"
                    >
                        Driven by Quality, <br />
                        <span className="text-accent italic">Inspired</span> by You.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-80"
                    >
                        "ShopVista was born from a simple idea: that premium quality shouldn't come with an unreachable price tag. We've spent years building relationships with world-class manufacturers to bring you curated collections that inspire."
                    </motion.p>
                </div>

                {/* Performance Grid / Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -6 }}
                            className={`p-6 rounded-[1.5rem] border border-white/10 text-center relative group hover:shadow-premium transition-all duration-300 ${stat.bgColor} text-white shadow-lg`}
                        >
                            <div className={`w-10 h-10 mx-auto rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transition-transform group-hover:rotate-6 group-hover:scale-105 shadow-sm`}>
                                <stat.icon size={20} className="text-white" />
                            </div>
                            <div className="text-3xl font-bold mb-1 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Our Story / Founder Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[9px] font-bold uppercase tracking-widest rounded-full mb-4">
                            The Beginning
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight text-slate-800">Our Journey to Excellence</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                            <p>
                                Founded in Mumbai in 2020, ShopVista started as a small team with a big vision. We noticed a gap in the market for high-quality, authentic products delivered with a level of customer service that was truly personal.
                            </p>
                            <p>
                                Today, we are proud to serve over 1 million customers worldwide, offering a diverse range of products from cutting-edge electronics to hand-crafted lifestyle goods.
                            </p>
                        </div>

                        <div className="mt-10 p-6 rounded-[1.5rem] bg-surface border border-border/40 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden group">
                            <div className="w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden flex-shrink-0 z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center sm:text-left z-10">
                                <p className="font-display font-bold text-lg mb-1 italic text-accent leading-snug">"We don't just sell products; we deliver experiences that matter."</p>
                                <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px]">
                                    <span className="font-bold text-foreground">Rahul Sharma</span>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <span className="text-muted-foreground font-medium">Founder & CEO</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl relative z-10 border-2 border-white transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg z-20">
                            <Award size={28} />
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Core Principles</h2>
                        <p className="text-muted-foreground text-xs max-w-sm mx-auto">The foundation of every decision we make at ShopVista.</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-32">
                    {values.map((v, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-8 rounded-[2rem] border border-border/20 group hover:shadow-xl transition-all duration-300 relative overflow-hidden ${v.color === 'blue' ? 'bg-blue-50' : v.color === 'rose' ? 'bg-rose-50' : 'bg-emerald-50'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm bg-white ${v.color === 'blue' ? 'text-blue-600' : v.color === 'rose' ? 'text-rose-600' : 'text-emerald-600'
                                }`}>
                                <v.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 relative z-10">{v.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm relative z-10">
                                {v.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA / Banner Section */}
            <section className="bg-surface py-20 relative overflow-hidden border-t border-border/30">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Experience <span className="text-accent italic">Boutique</span> Shopping
                        </h2>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm uppercase tracking-wider"
                            >
                                START SHOPPING <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                        <p className="mt-8 text-[10px] text-muted-foreground font-bold flex items-center justify-center gap-3 tracking-widest uppercase">
                            <span className="w-10 h-px bg-border" />
                            JOIN 1M+ CUSTOMERS
                            <span className="w-10 h-px bg-border" />
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
