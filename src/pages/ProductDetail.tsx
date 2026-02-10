import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, Minus, Plus, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-2">Product Not Found</h1>
          <Link to="/products" className="text-accent hover:underline">Browse Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (product?.variants) {
      const missingVariants = product.variants.filter((v) => !selectedVariants[v.type]);
      if (missingVariants.length > 0) {
        toast.error(`Please select ${missingVariants.map((v) => v.type).join(", ")}`);
        return;
      }
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product!, selectedVariants);
    }
    toast.success("Added to cart");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight size={12} />
            <Link to={`/products?category=${product.category}`} className="hover:text-foreground transition-colors capitalize">{product.category}</Link>
            <ChevronRight size={12} />
            <span className="text-foreground font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="aspect-square bg-surface rounded-2xl overflow-hidden border border-border">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-colors ${selectedImageIndex === i ? "border-accent" : "border-border hover:border-accent/50"
                      }`}
                  >
                    <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 text-xs font-semibold bg-accent/10 text-accent rounded-md capitalize">{product.category}</span>
              {product.isTrending && <span className="px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground rounded-md">Trending</span>}
            </div>

            <h1 className="text-2xl md:text-3xl font-display font-bold mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "text-star fill-star" : "text-muted"} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold">₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                  <span className="px-2 py-0.5 text-sm font-bold text-success bg-success/10 rounded-md">{product.discount}% OFF</span>
                </>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Variants */}
            {product.variants?.map((variant) => (
              <div key={variant.type} className="mb-4">
                <h3 className="text-sm font-semibold mb-2">
                  {variant.type}: <span className="font-normal text-muted-foreground">{selectedVariants[variant.type] || "Select"}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedVariants((prev) => ({ ...prev, [variant.type]: opt }))}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${selectedVariants[variant.type] === opt
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border hover:border-accent/50"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Stock */}
            <div className="mb-6">
              {product.inStock ? (
                <p className="text-sm text-success font-medium">✓ In Stock ({product.stockCount} available)</p>
              ) : (
                <p className="text-sm text-destructive font-medium">✗ Out of Stock</p>
              )}
            </div>

            {/* Quantity + Add */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-surface transition-colors">
                  <Minus size={16} />
                </button>
                <span className="px-4 text-sm font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-surface transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 py-3 gradient-gold text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button className="p-3 border border-border rounded-lg hover:bg-surface transition-colors">
                <Heart size={18} />
              </button>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-surface rounded-xl">
              {[
                { icon: Truck, label: "Free Delivery" },
                { icon: Shield, label: "Genuine Product" },
                { icon: RotateCcw, label: "7-Day Return" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center sm:flex-col gap-2 sm:gap-1 text-left sm:text-center">
                  <Icon size={18} className="text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex gap-6 border-b border-border mb-6">
            {(["description", "reviews"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold capitalize border-b-2 transition-colors ${activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === "description" ? (
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>{product.description}</p>
              <p className="mt-3">This premium product is designed to deliver exceptional quality and value. Every detail has been carefully crafted to ensure your complete satisfaction.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {[
                { name: "Arun K.", rating: 5, text: "Excellent product! Quality exceeded my expectations. Fast delivery too." },
                { name: "Meera R.", rating: 4, text: "Good product for the price. Packaging could be better." },
                { name: "Sanjay T.", rating: 5, text: "Bought this as a gift and it was a hit! Highly recommended." },
              ].map((r, i) => (
                <div key={i} className="p-4 bg-surface rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full gradient-navy flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {r.name[0]}
                    </div>
                    <span className="text-sm font-semibold">{r.name}</span>
                    <div className="flex gap-0.5 ml-auto">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={12} className={j < r.rating ? "text-star fill-star" : "text-muted"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
