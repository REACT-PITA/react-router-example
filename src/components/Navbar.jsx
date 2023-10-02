import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
          Home
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
