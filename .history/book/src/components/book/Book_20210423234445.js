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
      <imgSrc src={props.imgsrc} alt={props.alt} />
      <p>{props.titleBook}</p>
      <p>{props.detail}</p>
    </div>
  );
};


export default Book;
// in case some field is not sent to props,
// it will take the value from defaultProps
