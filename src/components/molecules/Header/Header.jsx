import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../logo/Logo";

const Header = () => {
  return (
  <header className="logo-header">
     <Logo />
    <Link to="/">
      <div>HOME</div>
    </Link>
    <Link to="/admin">
      <div>ADMIN</div>
    </Link>
   
  </header>
  )
}

export default Header