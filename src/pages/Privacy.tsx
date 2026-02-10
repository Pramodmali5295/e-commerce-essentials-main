import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, Clock } from "lucide-react";

const Privacy = () => {
    const sections = [
        {
            title: "1. Information We Collect",
            content: "We collect personal information that you provide to us when you register on our website, place an order, or subscribe to our newsletter. This may include your name, email address, phone number, and shipping address."
        },
        {
            title: "2. How We Use Your Information",
            content: "We use the information we collect to process your transactions, manage your account, personalize your experiences, and keep you updated on new products and offers if you've opted in."
        },
        {
            title: "3. Information Protection",
            content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights."
        },
        {
            title: "4. Third-Party Disclosure",
            content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website and conducting our business."
        },
        {
            title: "5. Cookies",
            content: "We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic."
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
                        <Shield size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-4"
                    >
                        Privacy <span className="text-accent">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Last Updated: February 10, 2026
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Summary Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { icon: Eye, label: "Transparent" },
                            { icon: Lock, label: "Secure" },
                            { icon: Database, label: "Private" },
                            { icon: Clock, label: "24/7 Protection" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-accent">
                                    <item.icon size={20} />
                                </div>
                                <span className="font-semibold">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Policy Sections */}
                    <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm space-y-12">
                        {sections.map((section, idx) => (
                            <motion.section
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="prose prose-slate max-w-none"
                            >
                                <h2 className="text-2xl font-bold mb-4 text-foreground">{section.title}</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            </motion.section>
                        ))}

                        <div className="pt-8 border-t border-border">
                            <h2 className="text-2xl font-bold mb-4">6. Contacting Us</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                If there are any questions regarding this privacy policy, you may contact us using the information below:
                            </p>
                            <div className="bg-surface p-6 rounded-2xl border border-border w-fit">
                                <p className="font-bold text-accent">ShopVista Privacy Team</p>
                                <p className="text-muted-foreground">privacy@shopvista.com</p>
                                <p className="text-muted-foreground">123 Shopping Street, Mumbai, 400001</p>
                            </div>
                        </div>
                    </div>

                    {/* Consent Notice */}
                    <div className="mt-12 text-center text-sm text-muted-foreground">
                        <p>By using our site, you consent to our website's privacy policy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
