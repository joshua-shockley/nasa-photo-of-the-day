import React from "react";
import "./App.css";
import Nasa from "./components/Nasa.js";
console.log("you can see this... its working ok!")
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket"> 🚀</span>!
        <Nasa/>
      </p>
    </div>
  );
}

export default App;
