import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link
        className="bg-blue-400  px-1 py-1 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded hover:shadow m-1"
        to="/login"
      >
        Login
      </Link>
      <Link
        className="bg-blue-400  px-1 py-1 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded hover:shadow m-1"
        to="/create-group"
      >
        Group Creation
      </Link>
      <Link
        className="bg-blue-400  px-1 py-1 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded hover:shadow m-1"
        to="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  );
};


export default Home