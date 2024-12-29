import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import About from "./pages/About";
import Products from "./pages/Products";
import Sign from "./pages/Sign";
import Register from "./pages/Register";
import Error from "./pages/Error";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.token) {
      const newToken = location.state.token;
      setToken(newToken);
      localStorage.setItem("token", newToken);
    }
  }, [location.state]);

  useEffect(() => {
    if (!token) {
      navigate("/sign");
    }
  }, [token, navigate]);

  function Private({ isAuth, children }) {
    return isAuth ? children : <Navigate to="/sign" replace />;
  }

  return (
    <Routes>
      <Route
        index
        element={
          <Private isAuth={!!token}>
            <MainLayout>
              <Home />
            </MainLayout>
          </Private>
        }
      />
      <Route path="*" element={<Error />} />
      <Route
        path="/about"
        element={
          <Private isAuth={!!token}>
            <MainLayout>
              <About />
            </MainLayout>
          </Private>
        }
      />
      <Route
        path="/products"
        element={
          <Private isAuth={!!token}>
            <MainLayout>
              <Products />
            </MainLayout>
          </Private>
        }
      />
      <Route
        path="/sign"
        element={
          <AuthLayout>
            <Sign />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;
