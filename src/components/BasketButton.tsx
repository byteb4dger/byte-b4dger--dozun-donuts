"use client";

import Image from "next/image";
import Cart from "/public/cart.svg";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const BasketButton = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <button
      onClick={openCart}
      className={`dark:bg-accent relative z-10 size-12 transform items-center justify-center rounded-full bg-rose-400 text-pink-50 shadow-md shadow-slate-500 dark:shadow-none ${cartQuantity > 0 ? "flex" : "hidden"}`}
    >
      <Image src={Cart} alt="cart" width="24" height="24" />
      <div className="absolute bottom-8 left-8 flex size-6 items-center justify-center rounded-full bg-emerald-500 shadow-md dark:shadow-none">
        {cartQuantity}
      </div>
    </button>
  );
};

export default BasketButton;
