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
        imgsrc="https://2ality.com/img/impatient-js.jpg"
        titleBook="abaab"
      />  <Book
        imgsrc="https://2ality.com/img/impatient-js.jpg"
        titleBook="abaab"
      />
    </div>
  );
};

export default App;
