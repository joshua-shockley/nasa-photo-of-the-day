import React, {useState, useEffect} from "react";
import "./App.css";
import Nasa from "./components/Nasa.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
console.log("you can see this... its working ok! apps.js")
function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket"> 🚀</span>!
        
      </p> */}
      <div><Header/></div>
      
      <Nasa/>
      <Footer/>
    </div>
  );
}

export default App;
