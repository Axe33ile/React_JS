/**************************
 * *IMPORT Libraries
 *************************/

import React from "react";

import Book from '../book/Book'

/*************************
 * *IMPORT COMPONENTS
 *************************/

const Main = () => {
  return (
    <div>
      <Book
        details={{
          bookTitle: "Tamar",
          imgSrc: "http://i.pravatar.cc/200?img=1",
          alt: "book",
          bookAuthor:"adsasd",
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