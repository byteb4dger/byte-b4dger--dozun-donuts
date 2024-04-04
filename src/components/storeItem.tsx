"use client";

import "@fontsource/bungee";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Image from "next/image";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
  desc: string;
};

const StoreItem = ({ id, name, price, img, desc }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="mt-2 flex max-w-xs flex-col items-center justify-center rounded-3xl bg-sky-400 py-4 md:max-w-sm lg:min-h-[32rem] dark:bg-rose-400">
      <Image
        className="basis-40 px-4"
        src={img}
        alt=""
        width={200}
        height={200}
      />
      <div className="px-4 lg:basis-40">
        <h5
          className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          style={{ fontFamily: "Bungee" }}
        >
          {name}
        </h5>
        <p className="mb-3 font-sans text-rose-50 ">{desc}</p>
      </div>
      <div className="flex flex-col items-center justify-center lg:basis-44">
        <span className="text-xl font-bold">{formatCurrency(price)}</span>
        <div>
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="mt-4 rounded bg-rose-600 px-4 py-2 text-white"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-y-4 px-4 py-4">
              <div className="align-center flex justify-center gap-2">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="rounded bg-rose-600 px-2 py-1 text-xl text-white"
                >
                  -
                </button>
                <div className="flex items-center justify-center px-2">
                  <span className="lg:text-lg">{quantity}</span>
                </div>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="rounded bg-rose-600 px-2 py-1 text-xl text-white"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="mt-2 rounded-md bg-rose-600 px-4 py-2 text-white"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
