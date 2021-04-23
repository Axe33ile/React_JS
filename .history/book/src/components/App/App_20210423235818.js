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
  
  return (
    <div>
      <Header />
      <Main />
      <Footer year="" name="bar" />
    </div>
  );
};

export default App;
