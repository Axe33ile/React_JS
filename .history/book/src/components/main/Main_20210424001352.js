/**************************
 * *IMPORT Libraries
 *************************/

import React from "react";

import Book from "../book/Book";

/*************************
 * *IMPORT COMPONENTS
 *************************/

const Main = () => {
  return (
    <h3
    <div className="book">
      <Book
        details={{
          bookTitle: "Tamar",
          imgSrc:
            "https://i1.sndcdn.com/artworks-000221750589-gb0kvq-t200x200.jpg",
          alt: "book",
          bookAuthor: "adsasd",
          bookDetails: "chocolate",
        }}
      />

      <Book
        details={{
          bookTitle: "Tamar",
          imgSrc: "http://i.pravatar.cc/200?img=1",
          alt: "book",
          bookDetails: "chocolate",
        }}
      />

      <Book
        details={{
          bookTitle: "Tamar",
          imgSrc: "http://i.pravatar.cc/200?img=1",
          alt: "book",
          bookDetails: "chocolate",
        }}
      />
    </div>
  );
};

export default Main;
