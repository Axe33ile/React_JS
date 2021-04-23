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
      {props.date} {props.name}
    </footer>
  );
};

export default Footer;
