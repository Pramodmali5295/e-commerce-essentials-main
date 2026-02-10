
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  cartId: string;
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; selectedVariants?: Record<string, string> } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { cartId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) =>
          i.product.id === action.payload.product.id &&
          JSON.stringify(i.selectedVariants || {}) === JSON.stringify(action.payload.selectedVariants || {})
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.cartId === existing.cartId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            cartId: crypto.randomUUID(),
            product: action.payload.product,
            quantity: 1,
            selectedVariants: action.payload.selectedVariants,
          },
        ],
      };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.cartId !== action.payload) };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.cartId === action.payload.cartId
              ? { ...i, quantity: Math.max(0, action.payload.quantity) }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "LOAD_CART":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, selectedVariants?: Record<string, string>) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalSavings: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  const cartKey = "cart";

  useEffect(() => {
    try {
      const saved = localStorage.getItem(cartKey);
      if (saved) {
        dispatch({ type: "LOAD_CART", payload: JSON.parse(saved) });
      } else {
        dispatch({ type: "LOAD_CART", payload: [] });
      }
    } catch {
      dispatch({ type: "LOAD_CART", payload: [] });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const totalSavings = state.items.reduce(
    (sum, i) => sum + ((i.product.originalPrice || i.product.price) - i.product.price) * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        addItem: (product, selectedVariants) => dispatch({ type: "ADD_ITEM", payload: { product, selectedVariants } }),
        removeItem: (cartId) => dispatch({ type: "REMOVE_ITEM", payload: cartId }),
        updateQuantity: (cartId, quantity) => dispatch({ type: "UPDATE_QUANTITY", payload: { cartId, quantity } }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
        toggleCart: () => dispatch({ type: "TOGGLE_CART" }),
        totalItems,
        totalPrice,
        totalSavings,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
