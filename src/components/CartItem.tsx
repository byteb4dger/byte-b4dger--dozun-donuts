import { useShoppingCart } from "@/context/ShoppingCartContext";
import storeItems from "@/data/items.json";
import { Stack, Button } from "react-bootstrap";
import formatCurrency from "@/utilities/formatCurrency";
import Image from "next/image";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="flex items-center">
      <Image
        src={item.img}
        alt=""
        width={50}
        height={50}
        className="h-12 w-20 object-cover"
      />
      <div className="flex-grow">
        <div className="text-lg font-bold text-rose-50">
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-xs text-rose-50">x{quantity}</span>
          )}
        </div>
        <div className="text-sm text-rose-50">{formatCurrency(item.price)}</div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="danger"
        size="lg"
        onClick={() => removeFromCart(item.id)}
        className="ml-auto"
        style={{ backgroundColor: "#FB7185", color: "#FFF1F2" }}
      >
        &times;
      </Button>
    </Stack>
  );
}
