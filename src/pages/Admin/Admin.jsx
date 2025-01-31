import AdminHeader from "../../components/molecules/AdminHeader/AdminHeader.jsx";
import Footer from "../../components/molecules/Footer/Footer.jsx";
import AdminProductManagement from "../../components/organisms/AdminProductManagement/AdminProductManagement.JSX";
import "./admin.css";

const Admin = () => {
  return (
    <>
        <AdminHeader />
        <AdminProductManagement />
        <Footer />
    </>
  )
}

export default Admin