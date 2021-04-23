/*********************
 * import libraries
 **********************/

import React from "react";

/*********************
 * *Components
 *********************/

const Book = (props) => {
    const details = props.details;
  return (
    <div className="book">
      <h1>{details.props.titleBook}</h1>
      <img src={details.props.imgSrc} alt={props.alt} />
      <p>{props.detail}</p>
    </div>
  );
};


export default Book;
// in case some field is not sent to props,
// it will take the value from defaultProps
