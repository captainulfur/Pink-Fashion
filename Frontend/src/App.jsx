import React from "react";
import Home from "./Page/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Abaut from "./Page/Abaut";
import Cart from "./Page/Cart";
import Dasbord from "./Page/Dashbord";
import ProductDetail from "./Page/ProductDetail";
import Products from "./Page/Products";
import NotPage404 from "./Page/NotPage404";
import Auth from "./Page/Auth";
import SignUp from "./Page/Auth/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
export default function App() {
  const { token } = useSelector((state) => state.auth);
  const theme = createTheme({
    palette:{
      primary: {
        main: "#ff92bc",
        bk:"#000000",
        bkNero:"#1f1f1f",
        ws:"#ffffff",
      },
    }
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/abaut" element={<Abaut />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashbord"
            element={token ? <Dasbord /> : <Navigate to={"/auth"} />}
          />
          <Route path="/product-detail/:id/name" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/auth"
            element={!token ? <Auth /> : <Navigate to={"/dashbord"} />}
          />
          <Route
            path="/search/:query"
            element={!token ? <Auth /> : <Navigate to={"/"} />}
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotPage404 />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}
