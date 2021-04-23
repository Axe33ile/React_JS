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
      <h3 className="book-important">{details.bookAuthor}</h3>
      <p className="book-details">{details.bookDetails}</p>
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
    imgSrc:
      "https://thebookwithnopictures.com/wp-content/uploads/2014/08/BookWithNoPictures_3D-300x423.png",
    alt: "book",
    bookAuthor: "NO NAME",
    bookDetails: "NO DETAILS  NO DETAILS  NO DETAILS",
  },
};

export default Book;
