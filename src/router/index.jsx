import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";

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
    }
])