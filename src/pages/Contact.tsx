import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
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
            title: "Call Us",
            details: "1800-123-4567",
            subText: "Mon-Sat: 9:00 AM - 7:00 PM",
            color: "text-blue-600",
            bgColor: "bg-blue-600/10",
            hoverGlow: "group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: "support@shopvista.com",
            subText: "Online support 24/7",
            color: "text-accent",
            bgColor: "bg-accent/10",
            hoverGlow: "group-hover:shadow-[0_0_20px_rgba(212,163,115,0.2)]"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "123 Shopping Street",
            subText: "Mumbai, India 400001",
            color: "text-navy",
            bgColor: "bg-navy/10",
            hoverGlow: "group-hover:shadow-[0_0_20px_rgba(15,23,42,0.1)]"
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-surface relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -mr-64 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px] -ml-64 -mb-32 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        Customer Support
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-6 text-navy"
                    >
                        Get in <span className="text-accent relative inline-block">Touch<span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-10 rotate-1 rounded-full"></span></span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        We're here to help you with everything you need. Whether it's a tracking update or a simple question, we're just a message away.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 items-start">
                    {/* Contact Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {contactInfo.map((info, idx) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-border shadow-sm hover:border-accent/40 transition-all group ${info.hoverGlow}`}
                            >
                                <div className="flex items-center gap-5">
                                    <div className={`w-14 h-14 rounded-2xl ${info.bgColor} ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                                        <info.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-xl text-navy">{info.title}</h3>
                                        <p className="font-semibold text-foreground mt-1">{info.details}</p>
                                        <p className="text-sm text-muted-foreground mt-0.5">{info.subText}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Links Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="gradient-navy p-8 rounded-3xl text-white relative overflow-hidden group shadow-xl"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 font-display">Join the Community</h3>
                                <p className="text-sm opacity-80 mb-6 leading-relaxed">Follow us for real-time updates, special offers, and daily inspiration.</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Facebook, label: "Facebook" },
                                        { icon: Instagram, label: "Instagram" },
                                        { icon: Twitter, label: "Twitter" },
                                        { icon: Linkedin, label: "LinkedIn" }
                                    ].map((social) => (
                                        <div key={social.label} className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/10 hover:border-accent group/social">
                                            <social.icon size={20} className="group-hover/social:scale-110 transition-transform" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[40px] border border-border shadow-elevated relative bg-white/80 backdrop-blur-sm"
                    >
                        <h2 className="text-3xl font-display font-bold mb-8 text-navy flex items-center gap-3">
                            Let's Start a <span className="text-accent">Conversation</span>
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-navy/70 uppercase tracking-wider pl-1">Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Full Name"
                                        className="w-full px-5 py-4 rounded-2xl bg-surface border border-transparent focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none font-medium shadow-inner"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-navy/70 uppercase tracking-wider pl-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="email@example.com"
                                        className="w-full px-5 py-4 rounded-2xl bg-surface border border-transparent focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none font-medium shadow-inner"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-navy/70 uppercase tracking-wider pl-1">Subject</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="How can we help?"
                                    className="w-full px-5 py-4 rounded-2xl bg-surface border border-transparent focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none font-medium shadow-inner"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-navy/70 uppercase tracking-wider pl-1">Message</label>
                                <textarea
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Type your message here..."
                                    className="w-full px-5 py-4 rounded-2xl bg-surface border border-transparent focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none resize-none font-medium shadow-inner"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-12 py-5 gradient-gold text-primary font-bold rounded-[20px] hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 group active:scale-95"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
