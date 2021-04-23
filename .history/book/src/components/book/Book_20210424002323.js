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
      <img className="photo" src={details.imgSrc} alt={props.details.alt} />
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
    bookTitle: "BOOK DOESN'T EXIST YET",
    imgSrc: "https://i1.sndcdn.com/artworks-000221750589-gb0kvq-t200x200.jpg",
    alt: "book",
    bookAuthor: "NO NAME",
    bookDetails: "NO DETAILS",
  },
};

export default Book;