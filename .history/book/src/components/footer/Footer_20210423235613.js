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
      <p>{props.Footer} Bar</p>
    </div>
  );
};

export default Footer;
