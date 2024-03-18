import { Outlet, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header>
        <h1 className="main-title">Inventory Management System (IMS)</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/customers"}>Customer Analysis</Link>
            </li>
            <li>
              <Link to={"/team"}>Team</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet></Outlet>

      <footer>
        <ul className="footer-main">
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/customers"}>Customer Analysis</Link>
          </li>
          <li>
            <Link to={"/team"}>Team</Link>
          </li>
        </ul>
        <p className="copyright">&copy; 2024 Group6. All rights reserved.</p>
      </footer>
    </>
  );
}
