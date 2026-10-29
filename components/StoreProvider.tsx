"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type StoreContextValue = {
  bag: number[];
  wishlist: number[];
  notice: string;
  ready: boolean;
  addToBag: (id: number) => void;
  removeFromBag: (id: number) => void;
  toggleWishlist: (id: number) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const STORAGE_KEY = "aura-store";

export function StoreProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [bag, setBag] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [notice, setNotice] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setReady(true);
      return;
    }

    try {
      const store = JSON.parse(saved) as { bag?: unknown; wishlist?: unknown };
      if (Array.isArray(store.bag) && store.bag.every(id => Number.isInteger(id))) setBag(store.bag);
      if (Array.isArray(store.wishlist) && store.wishlist.every(id => Number.isInteger(id))) setWishlist(store.wishlist);
    } catch (error) {
      console.error("Unable to restore the AURA shopping bag and wishlist.", error);
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ bag, wishlist }));
  }, [bag, wishlist, ready]);

  function announce(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  }

  const value = useMemo<StoreContextValue>(() => ({
    bag,
    wishlist,
    notice,
    ready,
    addToBag(id) {
      setBag(current => [...current, id]);
      announce("Added to your shopping bag");
    },
    removeFromBag(id) {
      setBag(current => {
        const index = current.indexOf(id);
        return index < 0 ? current : [...current.slice(0, index), ...current.slice(index + 1)];
      });
      announce("Removed from your shopping bag");
    },
    toggleWishlist(id) {
      announce(wishlist.includes(id) ? "Removed from wishlist" : "Saved to your wishlist");
      setWishlist(current => {
        const saved = current.includes(id);
        return saved ? current.filter(item => item !== id) : [...current, id];
      });
    }
  }), [bag, wishlist, notice, ready]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) throw new Error("useStore must be used within StoreProvider");
  return store;
}
