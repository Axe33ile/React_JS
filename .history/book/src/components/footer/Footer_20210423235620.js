/*********************
 * Import libraries
 ********************/

import React from "react";

/****************
 * *das
 ****************/

const Footer = (props) => {
    let date = new Date();
  return (
    <div className="footer">
      <p>{date.getFullYear} Bar</p>
    </div>
  );
};

export default Footer;
