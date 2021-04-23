/*********************
 * Import libraries
 ********************/

import React from "react";

/****************
 * *das
 ****************/

const Footer = (props) => {
  return (
    <footer className="footer">
      &copy; {props.year} {props.name}
    </footer>
  );
};

export default Footer;
