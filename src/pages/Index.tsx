import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Truck, Shield, RotateCcw, Headphones, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { products, categories, testimonials, banners } from "@/data/products";

const Index = () => {
  const featuredProducts = products.filter((p) => p.isFeatured);
  const trendingProducts = products.filter((p) => p.isTrending);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="text-primary-foreground relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80)',
          }}
        />

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/75" />

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/40 blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Sale Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-semibold gradient-gold text-primary rounded-full mb-6 shadow-lg">
                🔥 Summer Sale — Up to 60% Off
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
            >
              Discover Products<br />
              <span className="text-accent bg-clip-text">You'll Love</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Premium quality products at unbeatable prices. Free shipping on orders above ₹999.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-primary font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  Shop Now <ArrowRight size={20} className="animate-pulse" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products?category=fashion"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 hover:border-primary-foreground/60 transition-all backdrop-blur-sm"
                >
                  Explore Collections <ChevronRight size={20} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex justify-center gap-8 flex-wrap"
            >
              {[
                { icon: Truck, text: "Free Shipping" },
                { icon: Shield, text: "Secure Payment" },
                { icon: RotateCcw, text: "Easy Returns" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm opacity-80"
                >
                  <item.icon size={18} className="text-accent" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust bar */}
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, label: "Free Shipping", sub: "On orders ₹999+", color: "from-blue-500/10 to-blue-600/10", iconColor: "text-blue-600" },
              { icon: Shield, label: "Secure Payment", sub: "100% protected", color: "from-green-500/10 to-green-600/10", iconColor: "text-green-600" },
              { icon: RotateCcw, label: "Easy Returns", sub: "7-day return", color: "from-orange-500/10 to-orange-600/10", iconColor: "text-orange-600" },
              { icon: Headphones, label: "24/7 Support", sub: "Always available", color: "from-purple-500/10 to-purple-600/10", iconColor: "text-purple-600" },
            ].map(({ icon: Icon, label, sub, color, iconColor }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative h-full bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}
                    >
                      <Icon size={24} className={`${iconColor} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-base font-bold mb-1 group-hover:text-accent transition-colors duration-300">
                      {label}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-muted-foreground">
                      {sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mx-auto mb-2">Shop by <span className="text-accent">Category</span></h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">Find exactly what you're looking for</p>
            <Link
              to="/products"
              className="inline-flex text-sm font-medium text-accent hover:underline items-center gap-1 hover:gap-2 transition-all"
            >
              View All <ChevronRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={`/products?category=${cat.id}`}
                  className={`group block p-4 sm:p-5 ${cat.bgColor} rounded-xl border border-border transition-all duration-300 ${cat.hoverBorder} ${cat.shadowColor} hover:shadow-xl text-center`}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl flex items-center justify-center mb-3 transition-all duration-300 bg-white/80 group-hover:bg-white shadow-sm group-hover:scale-110`}>
                    <span className={`text-xl sm:text-2xl transition-transform ${cat.iconColor}`}>
                      {cat.icon === "Smartphone" && "📱"}
                      {cat.icon === "Shirt" && "👔"}
                      {cat.icon === "Home" && "🏠"}
                      {cat.icon === "Sparkles" && "✨"}
                      {cat.icon === "Dumbbell" && "💪"}
                      {cat.icon === "BookOpen" && "📚"}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold group-hover:text-accent transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">{cat.productCount} items</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer banner */}
      <section className="py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-gold rounded-xl sm:rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center gap-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary/60">Limited Time Offer</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary mt-2">
                Mega Electronics Sale
              </h3>
              <p className="text-sm sm:text-lg text-primary/70 mt-2 max-w-xl">
                Up to 50% off on headphones, watches & more
              </p>
            </div>
            <Link
              to="/products?category=electronics"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap text-center shadow-lg"
            >
              Shop Electronics
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trending */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 mb-6">
              <TrendingUp size={24} className="text-accent sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2"><span className="text-accent">Trending</span> Now</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-6">What everyone's buying</p>
            <Link
              to="/products"
              className="inline-flex text-sm font-medium text-accent hover:underline items-center gap-1 hover:gap-2 transition-all"
            >
              See All <ChevronRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {trendingProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-8 sm:py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2"><span className="text-accent">Featured</span> Products</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-6">Hand-picked just for you</p>
            <Link
              to="/products"
              className="inline-flex text-sm font-medium text-accent hover:underline items-center gap-1 hover:gap-2 transition-all"
            >
              View All <ChevronRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">What Our <span className="text-accent">Customers</span> Say</h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">Real reviews from real people</p>
          </motion.div>

          {/* Carousel Container */}
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2">
              Get <span className="text-accent">10% Off</span> Your First Order
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 sm:py-3.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
              />
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 gradient-gold text-primary font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg hover:shadow-xl">
                Subscribe Now
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
