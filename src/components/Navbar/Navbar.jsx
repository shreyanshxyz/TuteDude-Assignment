// Import React, style, logo, user, FiChevronDown, and Link from their respective modules.
import React from "react";
import style from "./navbar.module.css";
import logo from "./svg/logo.svg";
import user from "./svg/user.svg";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

// Define the Navbar component.
const Navbar = () => {
  // Return a div with a nav element inside.
  return (
    <div>
      <nav className={style.nav}>
        {/* // Link to the home page. */}
        <Link to="/">
          {/* // div with a logo image inside. */}
          <div className={style.logo}>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        {/* // div with a list of options inside. */}
        <div className={style.option}>
          {/* // My Assignment option. */}
          <p>My Assignment</p>
          {/* // Chat with Mentor option. */}
          <p>Chat with Mentor</p>
          {/* // div with an image, a username, and a down arrow icon inside. */}
          <div>
            <img src={user} alt="personSvg" />
            <span>ProfileName</span>
            <FiChevronDown />
          </div>
        </div>
      </nav>
    </div>
  );
};

// Export the Navbar component.
export default Navbar;
