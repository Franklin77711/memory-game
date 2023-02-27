import React from "react";
import "./style/App.css"
import Cards from "./Components/Cards";

const App = () => {
  return (
    <div className="App">
      <h1>Dota 2 Memory Game</h1>
      <p>Get a point by clicking on a character which you didn't click already. (Max: 12)</p>
      <Cards/>
    </div>
  );
}

export default App;
