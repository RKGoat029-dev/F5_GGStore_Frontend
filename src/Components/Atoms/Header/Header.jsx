import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  <header>
    <Link to="/">
      <div>HOME</div>
    </Link>
    <Link to="/admin">
      <div>ADMIN</div>
    </Link>
  </header>
}

export default Header