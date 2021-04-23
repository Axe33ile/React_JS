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
      <Main/>
      <Book
        titleBook="abaab"
        imgSrc="https://pbs.twimg.com/profile_images/678198768660008960/ymtWhQi8_200x200.png"
        detail="kukumuku"
      />
      <Book
        titleBook="abaab"
        imgSrc="https://2ality.com/img/impatient-js.jpg"
        detail="rico enriko"
      />
      />
    </div>
  );
};

export default App;
