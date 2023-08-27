import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-10 py-3 font-extrabold uppercase tracking-widest">
      <Link to="/"> Fast Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
};
export default Header;
