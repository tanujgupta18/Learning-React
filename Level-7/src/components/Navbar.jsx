import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-center text-xl font-bold">
      <Link to="/">🎬 Movie App</Link>
    </nav>
  );
};

export default Navbar;
