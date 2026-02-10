import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Globe, Heart, Rocket } from "lucide-react";
import { toast } from "sonner";

const Careers = () => {
    const perks = [
        { icon: Globe, title: "Work Remotely", desc: "Work from anywhere in the world." },
        { icon: Zap, title: "Fast Growth", desc: "Accelerate your career with us." },
        { icon: Heart, title: "Health Benefits", desc: "Comprehensive medical insurance." },
        { icon: Rocket, title: "Modern Tech", desc: "Work with the latest technologies." },
    ];

    const jobs = [
        {
            title: "E-commerce Operations Manager",
            dept: "Operations",
            location: "Mumbai / Hybrid",
            type: "Full-time",
            salary: "₹15L - ₹22L"
        },
        {
            title: "Digital Marketing Specialist",
            dept: "Marketing",
            location: "Bengaluru",
            type: "Full-time",
            salary: "₹10L - ₹16L"
        },
        {
            title: "Inventory & Logistics Coordinator",
            dept: "Supply Chain",
            location: "Pune / On-site",
            type: "Full-time",
            salary: "₹8L - ₹12L"
        },
        {
            title: "Customer Experience Lead",
            dept: "Customer Support",
            location: "Mumbai / Hybrid",
            type: "Full-time",
            salary: "₹12L - ₹18L"
        },
        {
            title: "Warehouse Helper",
            dept: "Logistics",
            location: "Mumbai / On-site",
            type: "Full-time",
            salary: "₹3L - ₹5L"
        },
        {
            title: "Packaging Specialist",
            dept: "Warehouse",
            location: "Mumbai / On-site",
            type: "Full-time",
            salary: "₹3L - ₹6L"
        },
        {
            title: "Delivery Associate",
            dept: "Logistics",
            location: "Pune / On-site",
            type: "Full-time",
            salary: "₹4L - ₹7L"
        }
    ];

    const handleApply = (title: string) => {
        toast.success(`Application started for ${title}!`);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="relative rounded-[40px] overflow-hidden gradient-navy text-primary-foreground p-12 md:p-24 text-center mb-20">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
                        >
                            <Briefcase size={40} className="text-accent" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-display font-bold mb-6"
                        >
                            Build the Future of <span className="text-accent underline decoration-accent/30 underline-offset-8">Retail</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl opacity-80 leading-relaxed mb-10"
                        >
                            Join a team of innovators, explorers, and dreamers. We're on a mission to redefine how people discover and buy products they love.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <a href="#openings" className="px-10 py-4 gradient-gold text-primary font-bold rounded-xl hover:opacity-90 transition-all shadow-xl inline-flex items-center gap-2">
                                View Openings <ArrowRight size={20} />
                            </a>
                        </motion.div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full -ml-32 -mb-32 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                {/* Perks Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-display font-bold text-center mb-16">Why Join Us?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card p-8 rounded-3xl border border-border text-center hover:border-accent/30 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-transform">
                                    <perk.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                                <p className="text-muted-foreground">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Openings Section */}
                <div id="openings" className="max-w-5xl mx-auto mb-20 px-4 py-16 bg-surface rounded-[40px] border border-border">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 px-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Open Positions</h2>
                            <p className="text-muted-foreground">Showing current opportunities across all departments.</p>
                        </div>
                        <div className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-semibold flex items-center gap-2">
                            <span className="w-2 h-2 bg-success rounded-full animate-ping" />
                            {jobs.length} Positions Available
                        </div>
                    </div>

                    <div className="space-y-4 px-6">
                        {jobs.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                            >
                                <div className="space-y-4 md:space-y-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider">{job.dept}</span>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                                            <Clock size={12} /> {job.type}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium">
                                        <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                                        <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.salary}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleApply(job.title)}
                                    className="px-6 py-3 bg-surface hover:bg-accent hover:text-primary border border-border hover:border-accent font-bold rounded-xl transition-all"
                                >
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Culture Promo */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4">Don't see a role for you?</h2>
                    <p className="text-muted-foreground mb-8">We're always looking for talented individuals. Send your CV to the address below.</p>
                    <a href="mailto:careers@shopvista.com" className="text-accent font-bold hover:underline underline-offset-4">careers@shopvista.com</a>
                </div>
            </div>
        </div>
    );
};

export default Careers;
