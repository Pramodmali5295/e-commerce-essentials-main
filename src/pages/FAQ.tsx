import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle, Package, Truck, CreditCard, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("shipping");
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { id: "shipping", label: "Shipping", icon: Truck },
        { id: "orders", label: "Orders", icon: Package },
        { id: "payment", label: "Payment", icon: CreditCard },
        { id: "returns", label: "Returns", icon: RotateCcw },
    ];

    const faqs = [
        {
            category: "shipping",
            question: "What are your shipping rates?",
            answer: "We offer free shipping on all orders above ₹999. For orders below this amount, a flat shipping fee of ₹99 is applicable across India."
        },
        {
            category: "shipping",
            question: "How long does delivery take?",
            answer: "Typically, orders are delivered within 3-5 business days for major cities and 5-7 business days for other locations."
        },
        {
            category: "orders",
            question: "Can I cancel my order?",
            answer: "Yes, you can cancel your order within 24 hours of placing it, provided it hasn't been shipped yet. Go to your order history to initiate a cancellation."
        },
        {
            category: "orders",
            question: "How do I track my order?",
            answer: "Once your order is shipped, you'll receive an email and SMS with the tracking ID and a link to our logistics partner's website."
        },
        {
            category: "payment",
            question: "What payment methods do you accept?",
            answer: "We accept all major credit/debit cards, Net Banking, UPI (Google Pay, PhonePe, Paytm), and popular digital wallets."
        },
        {
            category: "returns",
            question: "What is your return policy?",
            answer: "We have a 7-day easy return policy. If you receive a damaged product or it doesn't meet your expectations, you can initiate a return from the 'My Orders' section."
        }
    ];

    const filteredFaqs = faqs.filter(faq =>
        (searchQuery === "" ? faq.category === activeCategory : true) &&
        (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="pt-24 pb-16 min-h-screen bg-surface">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6"
                    >
                        How can we <span className="text-accent">Help?</span>
                    </motion.h1>

                    {/* Search bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative max-w-xl mx-auto"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                        <input
                            type="text"
                            placeholder="Search for questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border shadow-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                        />
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Category Tabs */}
                    {!searchQuery && (
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        setOpenIndex(null);
                                    }}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeCategory === cat.id
                                        ? "gradient-gold text-primary shadow-lg"
                                        : "bg-card text-muted-foreground border border-border hover:border-accent/30"
                                        }`}
                                >
                                    <cat.icon size={18} />
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-card rounded-2xl border border-border overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors"
                                    >
                                        <span className="font-semibold text-lg">{faq.question}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`text-muted-foreground transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-card rounded-3xl border border-dashed border-border">
                                <HelpCircle size={48} className="mx-auto text-muted-foreground mb-4 opacity-20" />
                                <p className="text-muted-foreground">No matching questions found.</p>
                            </div>
                        )}
                    </div>

                    {/* Still have questions? */}
                    <div className="mt-16 p-8 bg-gradient-to-br from-navy to-navy-light rounded-3xl text-primary-foreground text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                            <p className="opacity-80 mb-6">Can't find the answer you're looking for? Please chat with our friendly team.</p>
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Contact Support
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
