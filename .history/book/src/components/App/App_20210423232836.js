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
        imgsrc="https://avatars.githubusercontent.com/u/43363303?v=4"
        titleBook="abaab"
      />
    </div>
  );
};

export default App;
