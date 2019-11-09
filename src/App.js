import React, {useState, useEffect} from "react";
import "./App.css";
import Nasa from "./components/Nasa.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import {Card, Icon,Image, CardContent} from 'semantic-ui-react';

// console.log("you can see this... its working ok! apps.js")
function App() {
  return (
    <div className="App">
      <div><Header/></div>
      
      <Nasa/>
      <Footer/>
    </div>
  );
}

export default App;
