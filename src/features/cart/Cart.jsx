import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);

  return (
    <div className="mt-5 px-5">
      <LinkButton className="mb-2" to="/menu">
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-2">
        Your cart, <span className="font-bold">{username}</span>
      </h2>

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
