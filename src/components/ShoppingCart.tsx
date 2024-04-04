import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import storeItems from "@/data/items.json";
import formatCurrency from "@/utilities/formatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end"
      style={{ backgroundColor: "#FB7185", color: "#FFF1F2" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Koszyk</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="fw-bold fs-5 text- ms-auto">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
