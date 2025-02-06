import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";
import ProductDetails from "../Components/organisms/product-details/ProductDetails.jsx";
import ProductGrid from "../components/organisms/product-grid/ProductGrid.jsx"
import AdminForm from "../Components/organisms/AdminForm/AdminForm.jsx";
import UpdateProductForm from "../Components/organisms/UpdateProductForm/UpdateProductForm.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/about-us",
        element: <AboutUs />
    },
    {
        path: "/product-detail",
        element: <ProductDetails/>
    },
    {
        path: "/product-grid",
        element: <ProductGrid/>
    },
    {
        path: "/admin-form",
        element: <AdminForm />
    },
    {
        path: "/:productId",
        element: <UpdateProductForm />
    }
])