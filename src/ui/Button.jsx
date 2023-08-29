import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "mr-3 py-2 px-4 mt-4 font-semibold rounded-full bg-yellow-400 text-[0.6rem] md:text-[0.6rem] uppercase tracking-widest text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-4 md:py-3 md:font-semibold font-pizza";

  const style = {
    primary: base + "px-5 py-2 sm-px-6 sm:py-3 sm:font-bold lg:text-sm",
    small: base,
    round: base + " py-3",
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={style[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
};
export default Button;
