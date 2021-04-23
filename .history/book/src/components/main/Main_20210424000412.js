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
          bookDetails: "chocolate",
        }}
      />

      <Book
        titleBook="abaab"
        imgSrc="https://pbs.twimg.com/profile_images/678198768660008960/ymtWhQi8_200x200.png"
        detail="kukumuku"
      />

      <Book
        titleBook="abaab"
        imgSrc="https://pbs.twimg.com/profile_images/678198768660008960/ymtWhQi8_200x200.png"
        detail="kukumuku"
      />
    </div>
  );
};

export default Main;