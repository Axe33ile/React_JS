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
      <p>{props.date} {props.name}</p>
    </footer>
  );
};

export default Footer;
