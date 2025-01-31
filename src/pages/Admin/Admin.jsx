import Header from "../../components/molecules/Header/Header.jsx";
import Footer from "../../components/molecules/Footer/Footer.jsx";
import AdminProductManagement from "../../components/organisms/AdminProductManagement/AdminProductManagement.JSX";
import "./admin.css";

const Admin = () => {
  return (
    <>
        <Header />
        <AdminProductManagement />
        <Footer />
    </>
  )
}

export default Admin