import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, Heart, ChevronDown, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import { categories, products, Product } from "@/data/products";
import { toast } from "sonner";

const Header = () => {
  const { totalItems, toggleCart } = useCart();
  const { wishlistCount } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/products" },
    { label: "Categories", path: "/products", hasDropdown: true },
    { label: "Deals", path: "/products?sort=discount" },
    { label: "Contact", path: "/contact" },
  ];

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setMobileOpen(false);
      setSearchResults([]);
      toast.success(`Searching for "${searchQuery}"`);
    } else {
      toast.error("Please enter a search term");
    }
  };

  const handleSearchInput = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 1) {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="gradient-navy text-primary-foreground text-xs py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block">Free shipping on orders above ₹999</span>
          <span className="sm:hidden">Free shipping ₹999+</span>
          <div className="flex gap-3 sm:gap-4 items-center">
            <a href="tel:18001234567" className="hover:text-accent transition-colors flex items-center gap-1">
              📞 <span className="hidden sm:inline">1800-123-4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 glass border-b border-border shadow-sm">
        <div className="container mx-auto px-1.5 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -ml-2 hover:bg-surface rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
                <span className="text-sm font-bold text-primary">S</span>
              </div>
              <span className="text-xl font-display font-bold text-foreground">ShopVista</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setCategoriesOpen(!categoriesOpen)}
                      onMouseEnter={() => setCategoriesOpen(true)}
                      onMouseLeave={() => setCategoriesOpen(false)}
                      className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${location.pathname === link.path ? "text-accent" : "text-muted-foreground"
                        }`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${location.pathname === link.path ? "text-accent" : "text-muted-foreground"
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Categories Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {categoriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setCategoriesOpen(true)}
                          onMouseLeave={() => setCategoriesOpen(false)}
                          className="absolute top-full left-0 mt-2 w-56 glass rounded-xl shadow-premium py-2 z-50 overflow-hidden"
                        >
                          {categories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/products?category=${cat.id}`}
                              onClick={() => setCategoriesOpen(false)}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-surface transition-colors"
                            >
                              <span className="mr-2">{cat.icon === "Smartphone" && "📱"}
                                {cat.icon === "Shirt" && "👔"}
                                {cat.icon === "Home" && "🏠"}
                                {cat.icon === "Sparkles" && "✨"}
                                {cat.icon === "Dumbbell" && "💪"}
                                {cat.icon === "BookOpen" && "📚"}</span>
                              {cat.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Search bar (desktop) */}
            <div className="hidden md:block flex-1 max-w-md mx-8 relative">
              <form onSubmit={handleSearch}>
                <div className="relative w-full">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search products, brands..."
                    value={searchQuery}
                    onChange={(e) => handleSearchInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm bg-surface/50 rounded-full border border-border focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => { setSearchQuery(""); setSearchResults([]); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </form>

              {/* Desktop Live Search Results */}
              <AnimatePresence>
                {searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-elevated z-[60] overflow-hidden"
                  >
                    <div className="p-2">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => { setSearchResults([]); setSearchQuery(""); }}
                          className="flex items-center gap-3 p-2 hover:bg-surface rounded-lg transition-colors group"
                        >
                          <div className="w-10 h-10 rounded bg-muted overflow-hidden border border-border">
                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold line-clamp-1 group-hover:text-accent transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-[10px] text-muted-foreground">₹{product.price.toLocaleString("en-IN")}</p>
                          </div>
                          <ChevronRight size={14} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors"
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>
              <Link
                to="/wishlist"
                className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors hidden sm:block"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-rose-500 text-[10px] font-bold rounded-full flex items-center justify-center text-white"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </Link>
              <button
                onClick={toggleCart}
                className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 gradient-gold text-[10px] font-bold rounded-full flex items-center justify-center text-primary"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden border-t border-border glass"
            >
              <div className="p-4">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => handleSearchInput(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 text-sm bg-surface rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => { setSearchQuery(""); setSearchResults([]); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                </form>

                {/* Mobile Live Search Results */}
                {searchResults.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={() => {
                          setSearchResults([]);
                          setSearchQuery("");
                          setSearchOpen(false);
                        }}
                        className="flex items-center gap-3 p-2 bg-surface rounded-lg border border-border"
                      >
                        <div className="w-10 h-10 rounded overflow-hidden border border-border">
                          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold line-clamp-1">{product.name}</h4>
                          <p className="text-[10px] text-muted-foreground">₹{product.price.toLocaleString("en-IN")}</p>
                        </div>
                        <ChevronRight size={14} className="text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden lg:hidden border-t border-border"
            >
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-border mt-3">
                  <button
                    onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hover:bg-surface rounded-lg transition-colors"
                  >
                    Categories
                    <ChevronDown size={14} className={`transition-transform duration-300 ${mobileCategoriesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {mobileCategoriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-1"
                      >
                        <div className="py-2 grid grid-cols-1 gap-1">
                          {categories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/products?category=${cat.id}`}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileCategoriesOpen(false);
                              }}
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-accent hover:bg-surface rounded-lg transition-colors"
                            >
                              <span className="text-lg">
                                {cat.icon === "Smartphone" && "📱"}
                                {cat.icon === "Shirt" && "👔"}
                                {cat.icon === "Home" && "🏠"}
                                {cat.icon === "Sparkles" && "✨"}
                                {cat.icon === "Dumbbell" && "💪"}
                                {cat.icon === "BookOpen" && "📚"}
                              </span>
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
