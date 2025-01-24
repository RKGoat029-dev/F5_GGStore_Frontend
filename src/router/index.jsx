import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin/Admin.jsx";
import Home from "../pages/Home/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/",
        element: <Admin />
    }
])