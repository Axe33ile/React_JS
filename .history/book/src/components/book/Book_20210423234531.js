/*********************
 * import libraries
 **********************/

import React from "react";

/*********************
 * *Components
 *********************/

const Book = (props) => {
  return (
    <div className="book">
      <img src={props.imgSrc} alt={props.alt} />
      <h1>{props.titleBook}</h1>
      <p>{props.detail}</p>
    </div>
  );
};


export default Book;
// in case some field is not sent to props,
// it will take the value from defaultProps
