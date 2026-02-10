import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            toast.success("Message sent successfully! We'll get back to you soon.");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitting(false);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Direct Support",
            details: "1800-123-4567",
            subText: "VIP Priority Line",
            bgColor: "gradient-gold",
            textColor: "text-primary",
            iconBg: "bg-white/20"
        },
        {
            icon: Mail,
            title: "Email Inquiry",
            details: "support@shopvista.com",
            subText: "Response in 24h",
            bgColor: "gradient-navy",
            textColor: "text-white",
            iconBg: "bg-white/10"
        },
        {
            icon: MapPin,
            title: "Main Office",
            details: "123 Shopping Street",
            subText: "Mumbai, India",
            bgColor: "bg-slate-800",
            textColor: "text-white",
            iconBg: "bg-white/10"
        }
    ];

    return (
        <div className="pt-20 pb-0 min-h-screen bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -mr-64 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -ml-64 -mb-32 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm border border-accent/20"
                    >
                        <MessageCircle size={12} className="fill-accent" />
                        WE'RE HERE TO HELP
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight"
                    >
                        Let's Start a <span className="text-accent italic text-display">Conversation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-80"
                    >
                        Have a question? We're just a message away. Our team of shopping consultants is ready to assist you.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-24">
                    {/* Left Column: Contact Cards */}
                    <div className="lg:col-span-4 space-y-4">
                        {contactInfo.map((info, idx) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ x: 8 }}
                                className={`p-6 rounded-[2rem] border border-white/10 shadow-xl transition-all duration-300 relative group overflow-hidden ${info.bgColor} ${info.textColor}`}
                            >
                                <div className="flex items-center gap-5 relative z-10">
                                    <div className={`w-11 h-11 rounded-2xl ${info.iconBg} backdrop-blur-md flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-105 shadow-sm`}>
                                        <info.icon size={20} className={info.textColor} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base mb-0.5 tracking-tight">{info.title}</h3>
                                        <p className="font-semibold text-sm opacity-95">{info.details}</p>
                                        <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest mt-1">{info.subText}</p>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            </motion.div>
                        ))}


                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-8 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-elevated relative overflow-hidden group/form"
                    >
                        {/* Decorative Gradient Overlay */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-colors duration-700" />

                        <div className="relative z-10">
                            <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                                Send us a <span className="text-accent underline decoration-accent/20 underline-offset-4">Message</span>
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border/50 focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/5 transition-all outline-none font-medium text-sm shadow-inner-soft"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border/50 focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/5 transition-all outline-none font-medium text-sm shadow-inner-soft"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Message Subject</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        placeholder="How can we help?"
                                        className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border/50 focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/5 transition-all outline-none font-medium text-sm shadow-inner-soft"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your inquiry..."
                                        className="w-full px-5 py-3.5 rounded-xl bg-surface border border-border/50 focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/5 transition-all outline-none resize-none font-medium text-sm shadow-inner-soft"
                                    ></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto px-10 py-4 gradient-gold text-primary font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 group active:scale-95 text-xs uppercase tracking-widest mt-4"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Prompt Section */}
                <div className="bg-surface py-16 rounded-[3rem] mb-24 border border-border/30 relative overflow-hidden text-center max-w-4xl mx-auto shadow-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 px-6">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6">
                            <Zap size={24} className="fill-accent" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Quick Answers?</h2>
                        <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-8">
                            Our Help Center is available 24/7 with answers to common questions about orders, shipping, and returns.
                        </p>
                        <motion.div whileHover={{ y: -4 }}>
                            <a
                                href="/faq"
                                className="inline-flex items-center gap-2 text-accent font-bold text-[11px] hover:underline tracking-widest uppercase border-b-2 border-accent/20 pb-1"
                            >
                                Browse FAQ Library
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
