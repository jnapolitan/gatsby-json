import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import headerStyles from "../styles/header.module.css";
import headerImage from "../images/header-image.svg";

const Header = () => (
  <header>
    <div className={headerStyles.container}>
      <Link to="/programs">
        <img className={headerStyles.headerImage} src={headerImage} alt="logo" />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
