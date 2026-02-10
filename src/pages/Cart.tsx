import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, totalSavings, clearCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    landmark: "",
    city: "",
    pincode: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (customerInfo.name.length < 3) newErrors.name = "Name must be at least 3 characters";
    if (!/^\d{10}$/.test(customerInfo.phone)) newErrors.phone = "Enter a valid 10-digit phone number";
    if (customerInfo.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (customerInfo.address.length < 5) newErrors.address = "Entry is too short";
    if (!customerInfo.landmark) newErrors.landmark = "Landmark is required";
    if (!customerInfo.city) newErrors.city = "City is required";
    if (!/^\d{6}$/.test(customerInfo.pincode)) newErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const deliveryCharge = totalPrice >= 999 ? 0 : 49;
  const gst = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + deliveryCharge;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Numeric only for phone and pincode
    if (name === "phone" || name === "pincode") {
      const numericValue = value.replace(/\D/g, "");
      const maxLength = name === "phone" ? 10 : 6;
      if (numericValue.length <= maxLength) {
        setCustomerInfo(prev => ({ ...prev, [name]: numericValue }));
      }
      return;
    }

    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form before proceeding");
      return;
    }

    const orderData = {
      orderId: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toISOString(),
      customer: customerInfo,
      items: items.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.images[0]
      })),
      totalAmount: grandTotal,
      status: "Pending"
    };

    // Save to localStorage for Admin Panel
    const existingOrders = JSON.parse(localStorage.getItem("shopvista_orders") || "[]");
    localStorage.setItem("shopvista_orders", JSON.stringify([orderData, ...existingOrders]));

    // Clear cart and show success
    alert("successfully order placed");
    clearCart();
    setIsCheckout(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <ShoppingBag size={64} className="text-muted-foreground/20 mb-4" />
        <h1 className="text-2xl font-display font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground text-sm mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/products" className="px-6 py-3 gradient-gold text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/products" className="p-2 hover:bg-surface rounded-lg transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl md:text-3xl font-display font-bold">Shopping Cart ({items.length})</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {!isCheckout ? (
            <>
              {/* Items List */}
              <div className="lg:col-span-2 space-y-3">
                {items.map((item) => (
                  <motion.div key={item.cartId} layout className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border shadow-sm">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-surface rounded-lg flex-shrink-0 overflow-hidden border border-border">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.product.id}`} className="text-sm font-semibold hover:text-accent transition-colors line-clamp-2 sm:line-clamp-1">
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground capitalize mt-0.5">{item.product.category}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-bold text-sm sm:text-base">₹{item.product.price.toLocaleString("en-IN")}</span>
                        {item.product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">₹{item.product.originalPrice.toLocaleString("en-IN")}</span>
                        )}
                        {item.product.discount && <span className="text-xs text-success font-semibold">{item.product.discount}% off</span>}
                      </div>
                      <div className="flex items-center justify-between mt-3 gap-2">
                        <div className="flex items-center border border-border rounded-lg bg-surface">
                          <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="p-1.5 hover:bg-muted transition-colors">
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="p-1.5 hover:bg-muted transition-colors">
                            <Plus size={14} />
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.cartId)} className="flex items-center gap-1.5 text-xs text-destructive hover:bg-destructive/10 px-2 py-1 rounded-md transition-colors font-medium">
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl border border-border p-6 sticky top-24 shadow-sm">
                  <h2 className="font-display font-semibold text-xl mb-6">Order Summary</h2>
                  <div className="space-y-4 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-medium">Subtotal</span>
                      <span className="font-bold">₹{totalPrice.toLocaleString("en-IN")}</span>
                    </div>
                    {totalSavings > 0 && (
                      <div className="flex justify-between text-success">
                        <span className="font-medium">Total Discount</span>
                        <span className="font-bold">-₹{totalSavings.toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-medium">GST (18%)</span>
                      <span className="font-bold">₹{gst.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-medium">Delivery</span>
                      <span className={`font-bold ${deliveryCharge === 0 ? "text-success" : ""}`}>
                        {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                      </span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between">
                      <span className="font-display font-bold text-base">Total Payable</span>
                      <span className="font-display font-bold text-2xl text-accent">₹{grandTotal.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsCheckout(true);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-full py-4 gradient-gold text-primary font-bold rounded-xl hover:opacity-95 shadow-lg transition-all active:scale-[0.98]"
                  >
                    Proceed to Checkout
                  </button>
                  <p className="text-center text-[10px] text-muted-foreground mt-4 uppercase tracking-widest font-bold">
                    Secure Checkout • 100% Safe Payment
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Delivery Form Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <ArrowLeft size={20} className="cursor-pointer" onClick={() => setIsCheckout(false)} />
                    </div>
                    Delivery Address
                  </h2>

                  <form onSubmit={handlePlaceOrder} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Full Name *</label>
                        <input
                          required
                          name="name"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Rohit Kumar"
                          className={`w-full px-4 py-3.5 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium ${errors.name ? 'border-destructive' : 'border-border'}`}
                        />
                        {errors.name && <p className="text-[10px] text-destructive font-bold ml-1 uppercase tracking-wider">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          placeholder="Ex: 9876543210"
                          className={`w-full px-4 py-3.5 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium ${errors.phone ? 'border-destructive' : 'border-border'}`}
                        />
                        {errors.phone && <p className="text-[10px] text-destructive font-bold ml-1 uppercase tracking-wider">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        placeholder="Ex: rohit@example.com"
                        className={`w-full px-4 py-3.5 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium ${errors.email ? 'border-destructive' : 'border-border'}`}
                      />
                      {errors.email && <p className="text-[10px] text-destructive font-bold ml-1 uppercase tracking-wider">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Street Address *</label>
                        <input
                          required
                          name="address"
                          value={customerInfo.address}
                          onChange={handleInputChange}
                          placeholder="House No, Street..."
                          className={`w-full px-4 py-3.5 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium ${errors.address ? 'border-destructive' : 'border-border'}`}
                        />
                        {errors.address && <p className="text-[10px] text-destructive font-bold ml-1 uppercase tracking-wider">{errors.address}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Landmark *</label>
                        <input
                          required
                          name="landmark"
                          value={customerInfo.landmark}
                          onChange={handleInputChange}
                          placeholder="Near Apollo Hospital..."
                          className={`w-full px-4 py-3.5 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium ${errors.landmark ? 'border-destructive' : 'border-border'}`}
                        />
                        {errors.landmark && <p className="text-[10px] text-destructive font-bold ml-1 uppercase tracking-wider">{errors.landmark}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-muted-foreground ml-1">City / Town *</label>
                        <input
                          required
                          name="city"
                          value={customerInfo.city}
                          onChange={handleInputChange}
                          placeholder="Ex: Mumbai"
                          className={`w-full px-4 py-3.5 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium ${errors.city ? 'border-destructive' : 'border-border'}`}
                        />
                        {errors.city && <p className="text-[10px] text-destructive font-bold ml-1 uppercase tracking-wider">{errors.city}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Pincode *</label>
                        <input
                          required
                          type="tel"
                          name="pincode"
                          value={customerInfo.pincode}
                          onChange={handleInputChange}
                          placeholder="Ex: 400001"
                          className={`w-full px-4 py-3.5 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium ${errors.pincode ? 'border-destructive' : 'border-border'}`}
                        />
                        {errors.pincode && <p className="text-[10px] text-destructive font-bold ml-1 uppercase tracking-wider">{errors.pincode}</p>}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        className="flex-1 py-4 gradient-gold text-primary font-bold rounded-xl hover:opacity-95 shadow-lg shadow-accent/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        <ShoppingBag size={20} /> Confirm & Place Order
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsCheckout(false)}
                        className="px-8 py-4 bg-muted text-muted-foreground font-bold rounded-xl hover:bg-border transition-colors text-sm"
                      >
                        Back to Cart
                      </button>
                    </div>
                  </form>
                </motion.div>

                <div className="mt-6 p-4 bg-accent/5 rounded-xl border border-accent/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold text-foreground">Cash on Delivery</span> is available for this shipping address. Payment will be collected during delivery.
                  </p>
                </div>
              </div>

              {/* Sticky Summary in Checkout Mode */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl border border-border p-6 sticky top-24 shadow-sm">
                  <h3 className="font-display font-bold text-lg mb-6 tracking-tight">Your Order</h3>
                  <div className="space-y-4 mb-6">
                    {items.map(item => (
                      <div key={item.cartId} className="flex gap-3 text-sm">
                        <div className="relative w-12 h-12 rounded-lg bg-surface border border-border overflow-hidden flex-shrink-0">
                          <img src={item.product.images[0]} className="w-full h-full object-cover" />
                          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-card">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium line-clamp-1">{item.product.name}</p>
                          <p className="text-muted-foreground font-bold">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-border text-sm">
                    <div className="flex justify-between font-medium">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="text-success">{deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-dashed border-border mt-3">
                      <span className="font-display font-bold text-base">Grand Total</span>
                      <span className="font-display font-bold text-2xl text-accent">₹{grandTotal.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-muted/50 rounded-lg text-[11px] text-muted-foreground">
                    By placing the order, you agree to ShopVista's Terms and Conditions.
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
