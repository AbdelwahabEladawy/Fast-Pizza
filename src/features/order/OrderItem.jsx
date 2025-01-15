import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1 ">
      <div className="flex items-center justify-between text-sm gap-4">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text=sm capitalize italic text-slate-500">
        {isLoadingIngredients ? "loadind..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
