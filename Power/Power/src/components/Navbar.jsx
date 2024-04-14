import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1>
              Power
        </h1>

        <ul className="nav-links">

          <li>
            <NavLink to="/shop" className="nav-link">
              Hem
            </NavLink>
          </li>

          <li>
            <NavLink to="/ShoppingCart" className="nav-link">
            <FaShoppingCart />
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link">
              Kontakta Oss
            </NavLink>
          </li>

        </ul>

      </div>
    </div>
  );
};
