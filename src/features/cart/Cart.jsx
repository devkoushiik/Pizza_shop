import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="mt-5 px-5">
      <LinkButton className="mb-2" to="/menu">
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-2">Your cart, %NAME%</h2>

      <ul className="mb-3 mt-3 divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="my-3 flex">
        <Button type={"primary"} to="/order/new">
          Order pizzas
        </Button>
        <Button type={"primary"}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
