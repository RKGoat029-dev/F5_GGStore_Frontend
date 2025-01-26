import { Link } from "react-router-dom";
import "./admin-header.css";

const AdminHeader = () => {
  return (
    <header className="mb-6">
        <Link to="/">
            <div>HOME</div>
        </Link>
        <Link to="/admin">
            <div>ADMIN</div>
        </Link>
    </header>
  )
}

export default AdminHeader