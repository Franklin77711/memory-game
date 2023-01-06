import React from "react";
import {CardData} from "./Data/CardsData.js" 

const Cards = () =>{
    return(
         <div>
            {CardData.map((data) => {
                return(
                    <div key={data.id} className="card">
                        <img src={data.img}></img>
                        <h2>{data.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;