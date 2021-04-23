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
  return (
    <div>
      <Header />
      <Main />
      <Footer year={date.getFullYear} name={BarPr} />
    </div>
  );
};

export default App;
