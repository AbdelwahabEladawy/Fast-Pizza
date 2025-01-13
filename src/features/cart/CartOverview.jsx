import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TotalPizzaQuantity, TotalPriceOfCart } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(TotalPizzaQuantity);
  const totalCartPrice=useSelector(TotalPriceOfCart)
  if(!totalQuantity) return null  

  // const totalPrice=

  return (
    <div className="bg-stone-800 text-stone-200 uppercase p-4 sm:px-6 text-sm md:text-base flex items-center justify-between ">
      <p className="text-stone-300 font font-semibold space-x-4 sm:space-x-6   ">
        <span> {totalQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
