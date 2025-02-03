import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
        <p>© 2025 GG Store. All Rights Reserved.</p>
        <Link to="/about-us">
            <p>About Us</p>
        </Link>
    </>
  )
}

export default Footer