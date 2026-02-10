import { motion } from "framer-motion";
import { Truck, Clock, Globe, ShieldCheck, MapPin } from "lucide-react";

const Shipping = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-4"
                    >
                        Shipping & <span className="text-accent">Delivery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Everything you need to know about how we get your orders to your doorstep.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Main Info Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-card p-8 rounded-3xl border border-border shadow-sm text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-6">
                                <Truck size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Free Shipping</h3>
                            <p className="text-muted-foreground">Enjoy free standard shipping on all orders over ₹999 across India.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-card p-8 rounded-3xl border border-border shadow-sm text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                            <p className="text-muted-foreground">Major cities: 2-3 days. Rest of India: 5-7 days. Same-day shipping.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-card p-8 rounded-3xl border border-border shadow-sm text-center md:col-span-2 lg:col-span-1"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Secure Packing</h3>
                            <p className="text-muted-foreground">All products are sanitized and packed with premium shock-absorbent materials.</p>
                        </motion.div>
                    </div>

                    {/* Details Section */}
                    <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm mb-16">
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <Globe className="text-accent" /> Shipping Policy Details
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Domestic Shipping (India)</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-6 bg-surface rounded-2xl border border-border">
                                            <p className="font-bold text-accent mb-2">Standard Shipping</p>
                                            <p className="text-sm text-muted-foreground mb-1">Time: 4-6 Business Days</p>
                                            <p className="text-sm text-muted-foreground">Cost: FREE (Over ₹999) / ₹99 (Below ₹999)</p>
                                        </div>
                                        <div className="p-6 bg-surface rounded-2xl border border-border">
                                            <p className="font-bold text-accent mb-2">Express Shipping</p>
                                            <p className="text-sm text-muted-foreground mb-1">Time: 1-3 Business Days</p>
                                            <p className="text-sm text-muted-foreground">Cost: ₹199 (Flat Rate)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-sm max-w-none text-muted-foreground">
                                    <h3 className="text-xl font-bold text-foreground">Important Information</h3>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Most orders are processed and shipped within 24 hours (excluding Sundays and Public Holidays).</li>
                                        <li>Tracking information will be sent to your email and phone as soon as your order leaves our warehouse.</li>
                                        <li>If you order multiple items, they may be shipped separately depending on the warehouse location to ensure you receive them as fast as possible.</li>
                                        <li>In case of delivery delays due to weather, regulatory issues, or other unforeseen circumstances, our team will keep you updated.</li>
                                    </ul>
                                </div>

                                <div className="pt-8 border-t border-border">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <MapPin className="text-accent" size={24} /> Delivery Areas
                                    </h3>
                                    <p className="text-muted-foreground">
                                        We deliver to over 19,000+ pin codes across India. If our logistics partners do not serve your location, we will inform you within 24 hours of placing the order and process a full refund.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shipping;
