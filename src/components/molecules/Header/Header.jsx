import { Link } from "react-router-dom"; 
import Logo from "../../../Components/molecules/logo/Logo";
import "./header.css";


const Header = () => {
  return (
  <header className="logo-header">
    <Link to="/">
    <Logo/>
    </Link>
    
    <Link to="/about-us">
     <div>CONTACT US</div>
    </Link>
    <Link to="/admin">
      <div>ADMIN</div>
    </Link>
   
  </header>
  )
}

export default Header