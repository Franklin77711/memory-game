import React, {useState} from "react";
import {CardData} from "./Data/CardsData.js";
import "../style/Cards.css";
import Score from "./Score.js";

const Cards = () =>{
    const [bestScore, setBestScore] = useState(0);
    const [scoreRN, setScoreRN] = useState(0);
    const [clickedCard, setClickedCard] = useState([]);

    const ClickedToState = (card) =>{
        if (clickedCard.includes(card.id)){
            if(scoreRN > bestScore){
                setBestScore(scoreRN)
                setScoreRN(0)
                setClickedCard([])
            }else{
                setScoreRN(0)
                setClickedCard([])
            }
        }else{
            
            setClickedCard(clickedCard.concat(card.id));
            setScoreRN(scoreRN+ 1)
        }
    }

    const shuffle = (cards) =>{
        let currentIndex = cards.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [cards[currentIndex], cards[randomIndex]] = [
            cards[randomIndex], cards[currentIndex]];
          }
        return cards;
        }

    const CardClick = (card) =>{
        ClickedToState(card);
    }
    return(
         <div id="content">
            <Score bestScore={bestScore} scoreRN={scoreRN}/>
            {shuffle(CardData).map((data) => {
                return(
                    <div key={data.id} className="card" onClick={ () => CardClick(data)}>
                        <img src={data.img} alt={data.name}></img>
                        <h2>{data.name}</h2>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Cards;