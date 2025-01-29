import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../logo/Logo";

const Header = () => {
  return (
  <header className="logo-header">
     
    <Link to="/">
      <Logo />
    </Link>
    <Link to="/admin">
      <div>ADMIN</div>
    </Link>
   
  </header>
  )
}

export default Header