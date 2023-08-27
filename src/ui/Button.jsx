import { Link } from "react-router-dom";

const Button = ({ children, disabled, to }) => {
  const className =
    "mr-3 mt-4 rounded-full bg-yellow-400 px-2 py-2 text-[0.6rem] uppercase tracking-widest text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-4 md:py-3 md:font-semibold";

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};
export default Button;
