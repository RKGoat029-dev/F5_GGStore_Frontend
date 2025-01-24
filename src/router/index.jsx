
// REACT-ROUTER-DOM Components
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home.jsx";

/* ROUTER */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])