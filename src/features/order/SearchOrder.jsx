import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus-outline-none focus:w-30 w-20 rounded-full px-4 py-1.5 text-sm ring-opacity-50 transition-all duration-300 placeholder:text-[0.8rem] placeholder:text-stone-400 focus:ring focus:ring-yellow-500 sm:w-64 md:w-60 md:placeholder:text-base md:focus:w-72"
      />
    </form>
  );
};
export default SearchOrder;
