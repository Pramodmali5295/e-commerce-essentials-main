import { motion } from "framer-motion";
import { Scale, CheckCircle2, AlertCircle, Info } from "lucide-react";

const Terms = () => {
    const points = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
        },
        {
            title: "2. User Registration",
            content: "You may be required to register with the site. You agree to keep your password confidential and will be responsible for all use of your account and password."
        },
        {
            title: "3. Product Information",
            content: "We attempt to be as accurate as possible with product descriptions. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free."
        },
        {
            title: "4. Pricing and Payment",
            content: "Prices for products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service without notice at any time."
        },
        {
            title: "5. Intellectual Property",
            content: "The content on our website, including text, graphics, logos, and images, is the property of ShopVista and is protected by copyright and other intellectual property laws."
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-surface">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-accent/10 text-accent rounded-3xl flex items-center justify-center mx-auto mb-6"
                    >
                        <Scale size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-4"
                    >
                        Terms of <span className="text-accent">Service</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Please read these terms carefully before using our services.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Top Info Box */}
                    <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl mb-12 flex gap-4 items-start">
                        <Info className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                        <p className="text-sm text-blue-700 leading-relaxed">
                            These terms and conditions outline the rules and regulations for the use of ShopVista's Website, located at shopvista.com. By accessing this website we assume you accept these terms and conditions.
                        </p>
                    </div>

                    {/* Guidelines Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-success" /> User Responsibilities
                            </h3>
                            <ul className="space-y-4 text-muted-foreground italic">
                                <li>• Provide accurate and current info</li>
                                <li>• Maintain account security</li>
                                <li>• Comply with all applicable laws</li>
                                <li>• Respect intellectual property</li>
                            </ul>
                        </div>
                        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <AlertCircle className="text-destructive" /> Prohibited Activities
                            </h3>
                            <ul className="space-y-4 text-muted-foreground italic">
                                <li>• Unauthorized access to systems</li>
                                <li>• Use of site for illegal purposes</li>
                                <li>• Harassment of other users</li>
                                <li>• Modification of site content</li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                        <div className="space-y-12">
                            {points.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-accent text-sm font-bold">
                                            {idx + 1}
                                        </span>
                                        {point.title.split('. ')[1]}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed text-lg pl-11">
                                        {point.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
