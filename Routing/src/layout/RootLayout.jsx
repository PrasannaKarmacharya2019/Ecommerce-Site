import React from "react";
import Header from "../components/Header";
import Footer1 from "../components/Footer1";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer1 />
    </>
  );
};

export default RootLayout;
