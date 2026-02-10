
import { motion } from "framer-motion";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ProductCard";
import { Heart, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Wishlist = () => {
    const { items, clearWishlist, wishlistCount } = useWishlist();

    const handleClearWishlist = () => {
        if (window.confirm("Are you sure you want to clear your wishlist?")) {
            clearWishlist();
            toast.info("Wishlist cleared");
        }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-surface">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold flex items-center gap-4">
                            My <span className="text-accent">Wishlist</span>
                            <span className="text-lg font-medium text-muted-foreground bg-card px-3 py-1 rounded-full border border-border">
                                {wishlistCount} {wishlistCount === 1 ? 'item' : 'items'}
                            </span>
                        </h1>
                        <p className="text-muted-foreground mt-2">Saved items you're interested in.</p>
                    </motion.div>

                    {wishlistCount > 0 && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={handleClearWishlist}
                            className="flex items-center gap-2 px-6 py-3 text-destructive hover:bg-destructive/10 rounded-xl transition-colors font-semibold border border-destructive/20"
                        >
                            <Trash2 size={18} /> Clear Wishlist
                        </motion.button>
                    )}
                </div>

                {wishlistCount > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {items.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md mx-auto text-center py-20"
                    >
                        <div className="w-24 h-24 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Heart size={48} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
                        <p className="text-muted-foreground mb-10">
                            Save items you love to your wishlist and they'll show up here.
                        </p>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary font-bold rounded-xl hover:opacity-90 shadow-lg transition-all"
                        >
                            Start Shopping <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                )}

                {/* Recommendations Shortcut */}
                {wishlistCount > 0 && (
                    <div className="mt-20 p-8 border border-border bg-card rounded-[32px] overflow-hidden relative">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Ready to checkout?</h3>
                                <p className="text-muted-foreground">Add your favorite items to the cart and get them delivered.</p>
                            </div>
                            <Link
                                to="/products"
                                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
                            >
                                <ShoppingBag size={20} /> Continue Shopping
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
