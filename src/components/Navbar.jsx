import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/About">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/Products">
          Products
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
