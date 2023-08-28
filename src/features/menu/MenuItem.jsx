import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilites/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  };

  const isInCart = currentQuantity > 0;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-30 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5 sm:flex">
        <p>{name}</p>
        <p className="text-sm capitalize italic text-stone-500 md:text-base">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            {!soldOut ? (
              <p>{formatCurrency(unitPrice)}</p>
            ) : (
              <p className="text-sm font-medium uppercase text-red-500">
                Sold out
              </p>
            )}
          </div>

          <div className="sm:flex sm:items-center sm:justify-center">
            <div>
              {isInCart && (
                <>
                  {" "}
                  <UpdateItemQuantity
                    pizzaId={id}
                    currentQuantity={currentQuantity}
                  />{" "}
                  <DeleteItem pizzaId={id} />
                </>
              )}
            </div>

            <div>
              {!soldOut && !isInCart && (
                <Button onClick={handleAddToCart} type="small">
                  Add to cart
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
