import React from "react";
import Header from "./header";
import layoutStyles from "../styles/layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={layoutStyles.container}>
      <main>{children}</main>
    </div>
  </>
)

export default Layout;
