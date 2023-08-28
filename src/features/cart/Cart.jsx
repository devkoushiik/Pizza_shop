import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-5 px-5">
      <LinkButton className="mb-2" to="/menu">
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-4  font-pizza text-lg font-bold">
        Your cart, <span className="font-bold">{username}</span>
      </h2>

      <ul className="mb-3 mt-3 divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="my-3 flex">
        <Button type={"primary"} to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type={"primary"}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
