import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    if (!isWishlisted) {
      toast.success(`${product.name} added to wishlist`);
    } else {
      toast.info(`${product.name} removed from wishlist`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square bg-surface overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 z-10">
          {product.discount && product.discount > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-destructive text-destructive-foreground rounded-md">
              {product.discount}% OFF
            </span>
          )}
          {product.isTrending && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded-md">
              TRENDING
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 p-2 rounded-full backdrop-blur-sm transition-all z-10 
            ${isWishlisted ? "bg-rose-500 text-white opacity-100" : "bg-card/80 text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-card hover:text-rose-500 shadow-sm"}`}
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} className={isWishlisted ? "scale-110" : ""} />
        </button>

        {/* Quick add */}
        <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (product.inStock) addItem(product);
            }}
            disabled={!product.inStock}
            className="w-full py-2.5 text-sm font-semibold gradient-gold text-primary disabled:opacity-50"
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center z-[5]">
            <span className="px-3 py-1 text-xs font-bold bg-muted text-muted-foreground rounded-full">Out of Stock</span>
          </div>
        )}
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="block p-3">
        <p className="text-xs text-accent font-medium uppercase tracking-wide mb-1">{product.category}</p>
        <h3 className="text-sm font-semibold leading-tight line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-success/10 rounded text-success text-xs font-semibold">
            <span>{product.rating}</span>
            <Star size={10} fill="currentColor" />
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-bold">₹{product.price.toLocaleString("en-IN")}</span>
          {product.originalPrice && (
            <>
              <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
              <span className="text-xs font-semibold text-success">{product.discount}% off</span>
            </>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
