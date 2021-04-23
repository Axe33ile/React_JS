/*********************
 * import libraries
 **********************/

import React from "react";

/*********************
 * *Components
 *********************/

let Book = (props) => {
  const details = props.details;
  return (
    <div className="book">
      <h3>{details.bookTitle}</h3>
      <img className="src={details.imgSrc} alt={props.details.alt} />
      <h3>{details.bookAuthor}</h3>
      <p>{details.bookDetails}</p>
      <p style={{ display: details.email ? "block" : "none" }}>
        Email: {details.email}
      </p>
    </div>
  );
};

// in case some field is not sent to props,
// it will take the value from defaultProps
Book.defaultProps = {
  details: {
    imgSrc: "http://i.pravatar.cc/200?img=20",
    alt: "#",
    name: "not specified",
    phone: "not specified",
    email: "",
  },
};

export default Book;