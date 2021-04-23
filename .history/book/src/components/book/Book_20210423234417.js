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
      <img src={details.imgsrc} alt={details.alt} />
      <p>{details.titleBook}</p>
      <p>{details.detail}</p>
    </div>
  );
};


export default Book;
// in case some field is not sent to props,
// it will take the value from defaultProps
