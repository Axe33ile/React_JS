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
    <article className="main">
      <h3>Welcome to the book Store</h3>
      <div className="books">
        <Book
          details={{
            bookTitle: "Tamar",
            imgSrc: "https://2ality.com/2018/08/impatient-js/cover-epub.jpg",
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
        
        <Book
          details={{
            bookTitle: ,
            imgSrc: "http://i.pravatar.cc/200?img=1",
            alt: "book",
            bookDetails: "chocolate",
          }}
          />
      </div>
    </article>
  );
};

export default Main;
