/*********************
 * Import libraries
 ********************/

import React from "react";

/****************
 * *Components
 ****************/

const Footer = (props) => {
  return (
    <footer className="footer">
      &copy; {props.year} {props.name}
    </footer>
  );
};

export default Footer;
