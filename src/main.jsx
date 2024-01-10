import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";
import ProjectView from "./pages/Project/ProjectView";
import Login from "./pages/Login/Login";
import Start from "./pages/Start/Start";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
import Footer from "./components/complex/Footer";
import ProjectCreate from "./pages/Project/ProjectCreate";
import LandingPage from "./pages/Static/LandingPage";
import PricingPage from "./pages/Static/PricingPage";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
    { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
    { path: "/pricing", Component: PricingPage },
    { path: "/discover", Component: Start },
    { path: "/login", Component: Login },
    { path: "/signup", Component: Register },
    { path: "/homepage/:username", Component: Homepage },
    { path: "/homepage", Component: Start },
    { path: "/project/:projectId", Component: ProjectView },
    { path: "/createproject", Component: ProjectCreate },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <RouterProvider base="/" router={router}></RouterProvider>
        <Footer></Footer>
    </>
);
