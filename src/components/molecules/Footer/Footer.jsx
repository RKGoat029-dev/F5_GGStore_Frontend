import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
        <p>FOOTER</p>
        <Link to="/about-us">
            <p>About Us</p>
        </Link>
    </>
  )
}

export default Footer