import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UserProvider from "./Context/Context";
import Loader from "./components/Loader/Loader";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <UserProvider>
          <Header />
          <Outlet />
          <Footer />
        </UserProvider>
      )}
    </>
  );
};

export default Layout;
