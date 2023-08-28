import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((s) => s.user.username);
  return (
    <div className="my-10 px-2 text-center">
      <h1 className="mb-8 px-4 text-xl  font-semibold md:text-3xl">
        The best pizza.
        <br />
        <div className="mt-2">
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </div>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
