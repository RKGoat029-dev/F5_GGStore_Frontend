import { Link } from "react-router-dom";
import Logo from "../../../Components/molecules/logo/Logo";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="logo-header">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <nav className="nav-links">
          <Link to="/product-grid">PRODUCTOS</Link>
          <Link to="/about-us">CONTACT US</Link>
          <Link to="/admin">ADMIN</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
