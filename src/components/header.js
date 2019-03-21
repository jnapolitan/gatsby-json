import { Link } from "gatsby";
import React from "react";
import headerStyles from "../styles/header.module.css";
import headerImage from "../images/header-image.svg";

const Header = () => (
  <header>
    <div className={headerStyles.container}>
      <Link to="/programs">
        <img className={headerStyles.headerImg} src={headerImage} alt="logo" />
      </Link>
    </div>
  </header>
)

export default Header;
