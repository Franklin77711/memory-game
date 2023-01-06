import React, {useState} from "react";
import style from "./style/App.css"
import Cards from "./Components/Cards";
import Score from "./Components/Score";

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [scoreRN, setScoreRN] = useState(0);


  return (
    <div className="App">
      <h1>Dota 2 Memory Game</h1>
      <p>Get a point by clicking on a character which you didn't click already.</p>
      <Score bestScore={bestScore} scoreRN={scoreRN}/>
      <Cards />
    </div>
  );
}

export default App;
