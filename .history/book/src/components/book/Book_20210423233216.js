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
      <img src={props.imgsrc} alt={props.alt} />
      <p>{props.titleBook}</p>
      <p>{props.detail}</p>
    </div>
  );
};

Book.defaultProps = {
  props: {
    imgSrc: "http://i.pravatar.cc/200?img=20",
    alt: "#",
    name: "not specified",
    phone: "not specified",
    email: "",
  },
};

export default Book;
// in case some field is not sent to props,
// it will take the value from defaultProps
