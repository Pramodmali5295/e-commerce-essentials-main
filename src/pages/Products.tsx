import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, Grid3X3, LayoutList, ChevronDown, X } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);

  // Sync selectedCategory with URL parameter changes and scroll to top
  useEffect(() => {
    setSelectedCategory(categoryParam || "all");
    // Scroll to top smoothly when category changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryParam]);

  // Helper function to handle category changes from sidebar
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Close mobile filters after selection
    if (showFilters) setShowFilters(false);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== "all") result = result.filter((p) => p.category === selectedCategory);

    // Filter by price range
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by stock
    if (inStockOnly) result = result.filter((p) => p.inStock);

    // Sort results
    switch (sortBy) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "newest": result.sort((a, b) => b.id.localeCompare(a.id)); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "discount": result.sort((a, b) => (b.discount || 0) - (a.discount || 0)); break;
      default: result.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return result;
  }, [selectedCategory, sortBy, priceRange, inStockOnly, searchQuery]);

  const activeCat = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">
              {searchQuery ? `Search: "${searchQuery}"` : activeCat ? activeCat.name : "All Products"}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold">{activeCat ? activeCat.name : "All Products"}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">{filtered.length} products found</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm font-medium hover:bg-surface transition-colors">
              <SlidersHorizontal size={16} /> Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 border border-border rounded-lg text-sm bg-card focus:outline-none focus:ring-2 focus:ring-accent/30 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? "fixed inset-0 z-50 bg-card p-6 overflow-y-auto" : "hidden"} lg:block lg:static lg:w-56 flex-shrink-0`}>
            <div className="flex items-center justify-between lg:hidden mb-4">
              <span className="font-display font-semibold text-lg">Filters</span>
              <button onClick={() => setShowFilters(false)}><X size={20} /></button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-muted-foreground">Category</h3>
              <div className="space-y-1">
                <button onClick={() => handleCategoryChange("all")} className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === "all" ? "bg-accent/10 text-accent font-medium" : "hover:bg-surface"}`}>
                  All Products
                </button>
                {categories.map((c) => (
                  <button key={c.id} onClick={() => handleCategoryChange(c.id)} className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === c.id ? "bg-accent/10 text-accent font-medium" : "hover:bg-surface"}`}>
                    {c.name}
                    <span className="text-muted-foreground ml-1 text-xs">({products.filter((p) => p.category === c.id).length})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-muted-foreground">Price Range</h3>
              <div className="space-y-2">
                {[[0, 1000], [1000, 3000], [3000, 5000], [5000, 10000], [10000, 20000]].map(([min, max]) => (
                  <button
                    key={`${min}-${max}`}
                    onClick={() => setPriceRange([min, max])}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${priceRange[0] === min && priceRange[1] === max ? "bg-accent/10 text-accent font-medium" : "hover:bg-surface"}`}
                  >
                    ₹{min.toLocaleString()} – ₹{max.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-muted-foreground">Availability</h3>
              <label className="flex items-center gap-2 px-3 py-2 cursor-pointer">
                <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="rounded border-border" />
                <span className="text-sm">In Stock Only</span>
              </label>
            </div>

            <button onClick={() => setShowFilters(false)} className="lg:hidden w-full py-2.5 gradient-gold text-primary font-semibold rounded-lg text-sm mt-4">
              Apply Filters
            </button>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg font-display text-muted-foreground">No products found</p>
                <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
