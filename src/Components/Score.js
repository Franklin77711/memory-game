import React from "react";

const Score = (props) =>{
    const {bestScore, scoreRN} = props;
    return(
        <div id="scores">
            <p id="scoreRN">Score: {scoreRN}</p>
            <p id="bestScore">Best Score: {bestScore}</p>
        </div>
    )
}

export default Score;