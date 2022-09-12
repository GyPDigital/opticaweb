import React, {useState, useEffect} from "react";
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
 *      5 obj en array = -2, -1, 0, 1, 2
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

    const [ limit, setLimit ] = useState( -2 ); // limite derecho de iteracion (se toma como base 5 obj)
    const [ cardList, setCardList ] = useState( 0 ); // valores recorridos -2, -1, 0, 1, 2
    const [ marginLBase, setMarginLBase ] = useState( 200 ); // cantidad de margin-left del contenedor que se movera al hacer clic
    const [ marginLeft, setMarginLeft ] = useState( 200 );
    const [ itemWidth, setItemWidth ] = useState( "100%" ); // ancho del item a mostrar
    const [ contWidth, setContWidth ] = useState( "500%" );

    function handleCard(n){
        
        if( n > 2 ){
            setCardList( limit );
        }else if( n < limit ){
            setCardList( 2 );
        }else{
            setCardList( n );
        }
    }

    function handleSlider(){

        const windowWidth = window.screen.width;

        if( windowWidth <= 740 ){
            setItemWidth( windowWidth + "px" );
            setMarginLBase( 200 );
            setMarginLeft( (cardList * marginLBase) + "%" );
        }else if( windowWidth > 740 && windowWidth <= 1110 ){
            setItemWidth( Math.floor( windowWidth / 2 ) + "px" );
            setLimit( -1 );
            setMarginLBase( 100 );
            setContWidth("300%");
            setMarginLeft( (cardList * marginLBase) + "%" );
        }else{
            setItemWidth( Math.floor( windowWidth / 3 ) + "px" );
            setLimit( 0 );
            setMarginLBase( 50 );
            setContWidth("200%");
            
            if( cardList === 2 ){
                setMarginLeft( "100%" );
            }else if( cardList === 1 ){
                setMarginLeft( "33%" );
            }else{
                setMarginLeft( "-33%" );
            }
        }
    }

    useEffect( () => {
            handleSlider();
        });

    return(
        <div className="container">
            <div className="Advantage-container"
                onClick={ () => { handleCard( cardList - 1 ) } }
                style={ { width: contWidth, marginLeft: marginLeft } }
            >
                {
                    listAdvtg.map( (item, i) => 
                        <div key={"Advantage-"+i}
                            className="Advantage-item"
                            style={{ width: itemWidth }}
                        >
                            <span className="icon-cheked-box"/>
                            <div className="Advantage-text">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Advantage;