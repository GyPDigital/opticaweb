import React, { useState } from "react";
import "../assets/css/Advantage.css";
import listAdvtg from "./data/data-advantage";

function Advantage(){

    const [card, setCard] = useState(0);

    function handleCard(n){
        if(n >= listAdvtg.length){
            setCard(0);
        }else if(n < 0){
            setCard( listAdvtg.length-1 );
        }else{
            setCard(n);
        }
    }

    return(
        <div className="container">
            <div className="Advantage-container" onClick={()=>{handleCard(card+1)}} style={{marginLeft: (card*-100).toString()+"%" }} >
                {listAdvtg.map( (item, i) => 
                    <div key={"Advantage-"+i} className="Advantage-item" /*style={{ display: card === i ? "flex" : "none" }}*/>
                        <span className="icon-cheked-box"/>
                        <div className="Advantage-text">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Advantage;