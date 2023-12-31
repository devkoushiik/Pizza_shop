import { Link, useNavigate } from "react-router-dom";
const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className = "text-md text-blue-500 hover:text-red-500 md:text-lg";
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
export default LinkButton;
