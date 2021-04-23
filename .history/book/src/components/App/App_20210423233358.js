/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

//react libraries
import React from "react";

//import components
import Header from "../header/Header";
import Main from "../main/Main";
import Book from "../book/Book";

/*****************************************
 * * COMPONENT
 *****************************************/

const App = () => {
  return (
    <div>
      <Header />
      <Book
        imgsrc="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457542606l/25136217._SY475_.jpg"
        titleBook="abaab"
      />
    </div>
  );
};

export default App;
