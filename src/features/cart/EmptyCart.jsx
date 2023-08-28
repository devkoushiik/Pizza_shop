import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mt-2">
      <LinkButton className="mb-2" to="/menu">
        &larr; Back to menu
      </LinkButton>

      <p className=" mt-2 rounded-md bg-red-300 px-4 py-3 font-pizza font-semibold text-stone-800">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
