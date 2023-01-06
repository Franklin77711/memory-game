import React, {useState} from "react";
import {CardData} from "./Data/CardsData.js" 
import style from "../style/Cards.css"
import Score from "./Score.js";

const Cards = () =>{
    const [bestScore, setBestScore] = useState(0);
    const [scoreRN, setScoreRN] = useState(0);
    const [clickedCard, setClickedCard] =useState([]);

    const CardClick = (card) =>{
        setClickedCard(clickedCard.concat(card.id));
    }

    return(
         <div id="content">
            <Score bestScore={bestScore} scoreRN={scoreRN}/>
            {CardData.map((data) => {
                return(
                    <div key={data.id} className="card" onClick={ () => CardClick(data)}>
                        <img src={data.img}></img>
                        <h2>{data.name}</h2>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Cards;