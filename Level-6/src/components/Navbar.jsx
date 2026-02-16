import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">MyApp</h1>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold"
              : "hover:text-blue-400 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold"
              : "hover:text-blue-400 transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-semibold"
              : "hover:text-blue-400 transition"
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
