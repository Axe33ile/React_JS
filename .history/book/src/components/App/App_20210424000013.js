/*****************************************
 * * IMPORT LIBRARIES
 *****************************************/

//react libraries
import React from "react";

//import components
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

/*****************************************
 * * COMPONENT
 *****************************************/

const App = () => {
  let date = new Date();
  let name = "bar";
  return (
    <div>
      <Header />
      <Main />
      <Footer year={date.getFullYear} name={name} />
    </div>
  );
};

export default App;
