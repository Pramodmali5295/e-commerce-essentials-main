import { useCart, CartItem } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalPrice, totalSavings, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-foreground/40 z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-card z-50 flex flex-col shadow-elevated"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-accent" />
                <span className="font-display font-semibold text-lg">Cart ({totalItems})</span>
              </div>
              <button onClick={toggleCart} className="p-2 hover:bg-surface rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-muted-foreground/30 mb-4" />
                  <p className="font-display text-lg text-muted-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground/60 mt-1">Add items to get started</p>
                  <Link to="/products" onClick={toggleCart} className="mt-4 px-6 py-2.5 gradient-gold text-primary font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity">
                    Browse Products
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <CartItemCard key={item.cartId} item={item} onRemove={removeItem} onUpdateQty={updateQuantity} />
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 border-t border-border space-y-3">
                {totalSavings > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-success font-medium">You save</span>
                    <span className="text-success font-semibold">₹{totalSavings.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-display font-semibold text-lg">Total</span>
                  <span className="font-display font-bold text-xl">₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <Link to="/cart" onClick={toggleCart} className="block w-full text-center py-3 gradient-gold text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CartItemCard = ({
  item,
  onRemove,
  onUpdateQty,
}: {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
}) => (
  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-3 p-3 bg-surface rounded-lg">
    <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0 overflow-hidden">
      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium truncate">{item.product.name}</p>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm font-bold">₹{item.product.price.toLocaleString("en-IN")}</span>
        {item.product.originalPrice && (
          <span className="text-xs text-muted-foreground line-through">₹{item.product.originalPrice.toLocaleString("en-IN")}</span>
        )}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2 bg-card rounded-md border border-border">
          <button onClick={() => onUpdateQty(item.cartId, item.quantity - 1)} className="p-1 hover:bg-surface rounded transition-colors">
            <Minus size={14} />
          </button>
          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
          <button onClick={() => onUpdateQty(item.cartId, item.quantity + 1)} className="p-1 hover:bg-surface rounded transition-colors">
            <Plus size={14} />
          </button>
        </div>
        <button onClick={() => onRemove(item.cartId)} className="text-xs text-destructive hover:underline">Remove</button>
      </div>
    </div>
  </motion.div>
);

export default CartSidebar;
