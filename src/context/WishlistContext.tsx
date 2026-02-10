
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";

interface WishlistState {
    items: Product[];
}

type WishlistAction =
    | { type: "TOGGLE_WISHLIST"; payload: Product }
    | { type: "LOAD_WISHLIST"; payload: Product[] }
    | { type: "CLEAR_WISHLIST" };

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
    switch (action.type) {
        case "TOGGLE_WISHLIST": {
            const exists = state.items.find((i) => i.id === action.payload.id);
            if (exists) {
                return {
                    ...state,
                    items: state.items.filter((i) => i.id !== action.payload.id),
                };
            }
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }
        case "LOAD_WISHLIST":
            return { ...state, items: action.payload };
        case "CLEAR_WISHLIST":
            return { ...state, items: [] };
        default:
            return state;
    }
};

interface WishlistContextType {
    items: Product[];
    toggleWishlist: (product: Product) => void;
    isInWishlist: (productId: string) => boolean;
    clearWishlist: () => void;
    wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(wishlistReducer, { items: [] });
    const wishlistKey = "wishlist";

    useEffect(() => {
        try {
            const saved = localStorage.getItem(wishlistKey);
            if (saved) {
                dispatch({ type: "LOAD_WISHLIST", payload: JSON.parse(saved) });
            } else {
                dispatch({ type: "LOAD_WISHLIST", payload: [] });
            }
        } catch {
            dispatch({ type: "LOAD_WISHLIST", payload: [] });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(wishlistKey, JSON.stringify(state.items));
    }, [state.items]);

    const isInWishlist = (productId: string) => state.items.some((i) => i.id === productId);

    return (
        <WishlistContext.Provider
            value={{
                items: state.items,
                toggleWishlist: (product) => dispatch({ type: "TOGGLE_WISHLIST", payload: product }),
                isInWishlist,
                clearWishlist: () => dispatch({ type: "CLEAR_WISHLIST" }),
                wishlistCount: state.items.length,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const ctx = useContext(WishlistContext);
    if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
    return ctx;
};
