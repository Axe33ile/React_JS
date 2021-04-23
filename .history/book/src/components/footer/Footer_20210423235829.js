/*********************
 * Import libraries
 ********************/

import React from "react";

/****************
 * *das
 ****************/

const Footer = (props) => {
  return (
    <div className="footer">
      <p>{props.date} {props.name}</p>
    </div>
  );
};

export default Footer;
