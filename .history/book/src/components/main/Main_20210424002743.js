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
            bookTitle: "PHP,MySQL & Java Script",
            imgSrc:
              "https://www.guru99.com/images/2/060520_1101_16BESTPHPBo7.jpg",
            alt: "book",
            bookAuthor: "Robin Nixon",

            bookDetails:
              "Learning PHP, MySQL & JavaScript: With jQuery, CSS & HTML5 is a book written by Robin Nixon. The book helps you to build interactive, data-driven websites. In this edition, you'll also study dynamic web programming with the latest versions, PHP, MySQL, JavaScript, CSS, HTML5, and key jQuery libraries.",
          }}
        />

        <Book />
      </div>
    </article>
  );
};

export default Main;
