import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UserProvider from "./Context/Context";

const Layout = () => {
  return (
    <>
      <UserProvider>
        <Header />

        <Outlet />
        <Footer />
      </UserProvider>
    </>
  );
};

export default Layout;
