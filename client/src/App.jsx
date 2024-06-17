import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes"; // Ensure you have this component
import { Provider } from "react-redux";
import store from "./redux/store.js";
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoutes>
                <HomePage />
            </ProtectedRoutes>
        )
    },
    {
        path: "/login",
        element: (
            <PublicRoutes>
                <Login />
            </PublicRoutes>
        )
    },
    {
        path: "/register",
        element: (
            <PublicRoutes>
                <Register />
            </PublicRoutes>
        )
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

