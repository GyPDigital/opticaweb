import React, { useState } from "react";
import "../assets/css/Advantage.css";
import listAdvtg from "./data/data-advantage";


/**************************************************************************************************
 * Se puede añadir cualquier cantidad de "ventajas" en numeros impares, para que uno de ellos
 * quede en el centro y los demas a los costados derecho e izquierdo en la misma cantidad.
 * EJ: cantidad de obj en array 3, uno se muestra en el centro y uno a cada lado
 * EJ: cantidad de obj en array 5, uno se muestra en el centro y dos a cada lado
 * La animacion CSS maneja el margin-left en valores de 200% positivo y negativo
 * siendo el centro 0%
 * No se itera con el index del objeto en el array sino con una lista de valores en donde
 * el cero es el valor central y de comienzo
 * recorremos hacia la izquierda y si acabamos la lista comenzamos la lista en el otro extremo
 * EJ:
 *      3 obj en array = -1, 0, 1
 *      5 obj en array = -2, -1, 0, 1, 2
 *      7 obj en array = -3, -2, -1, 0, 1, 2, 3
 * 
 * tomando como ejemplo el array de 7 obj
 * comenzamos mostrando obj central es decir cero
 * al terminar lista en -3 mostramos el objeto 3
 * 
 * falta el detallito del tamaño del contenedor con mas de 3 objetos
 * y tamaño del componente en diferentes tamaños de pantalla
 * @returns 
 **************************************************************************************************/
function Advantage(){
    const middleObj = (listAdvtg.length - 1) / 2; // 
    const [card, setCard] = useState(0); // valores recorridos -2, -1, 0, 1, 2

    function handleCard(n){
        
        if( n < (middleObj * -1) ){
            setCard( middleObj);
        }else{
            setCard( n );
        }
    }

    return(
        <div className="container">
            <div className="Advantage-container" onClick={()=>{handleCard(card-1)}} style={{marginLeft: (card*200).toString()+"%" }} >
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