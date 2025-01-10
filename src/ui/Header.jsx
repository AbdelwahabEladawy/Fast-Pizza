import { Link } from "react-router-dom";
import SerachOrder from "../features/order/SerachOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <div className="bg-yellow-500 uppercase  px-4 py-3 sm:px-6 flex items-center justify-between   " >

<Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
      <SerachOrder/>
      <UserName/>
    </div>
  )
}
