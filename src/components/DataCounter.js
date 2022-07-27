import React, { useEffect, useRef, useState } from "react";
import "../assets/css/DataCounter.css";

function DataCounter(){

    const dataList = [
        {
            number: 24,
            afterNum: "k+",
            text: "Pacientes Felices"
        },
        {
            number: 7,
            afterNum: "k+",
            text: "Citas en Linea"
        },
        {
            number: 8,
            afterNum: "k+",
            text: "Cirugias Exitosas"
        },
        {
            number: 15,
            afterNum: "+",
            text: "Tiendas y Clinicas"
        }
    ];

    const interval = 100;
    // Limite conteo = numero mas alto en dataList
    //const limit = 24;
    
    function limit(){
        let highest = 0;
        dataList.forEach( item => { 
            if( item.number > highest ) highest = item.number;
        } );
        return highest;
    }
    
    // numeros a mostrar iniciando en 0
    const [counter, setCounter] = useState(0);
    // stand-by, executting, finished
    const [animationState, setAnimationState] = useState("stand-by");
    // componente a la vista del usuario
    const [compOnScreen, setCompOnScreen] = useState(false);

    const componentRef = useRef();

    function restartAnimation(){
        if( animationState === "finished" ){
            setCounter( 0 );
            setAnimationState( "stand-by" );
        }
    }

    useEffect(()=>{
    
        function handleScroll(){

            const yPos = componentRef.current.getBoundingClientRect().y;
            const screenH = window.screen.height;
            // cuando el usuario visualice una parte del componente vacio se ejecuta la animacion
            const startPosition = ( yPos - (( screenH / 4 ) * 3 )) <= 0 ? true : false ;
            
            if( startPosition ) setCompOnScreen(true);
        }

        window.addEventListener("scroll", handleScroll );

        // la animación debe empezar una sola vez y cuando el usuario visualiza el componente
        if( (animationState === "stand-by" || animationState === "executting") && compOnScreen ){
            
            setAnimationState("executting");

            const timer = setInterval(() => {
                
                if( counter < limit() ){
                    setCounter(counter + 1)
                }else{
                    setAnimationState("finished");
                }

            }, interval);

            return () => {
                clearInterval( timer );
                window.removeEventListener("scroll", handleScroll );
            }
        }

        return ()=>{ window.removeEventListener("scroll", handleScroll ); }

    }, [ counter, animationState, compOnScreen, limit ]);

/**************************************************************************************************/

    return(
        <div className="container">
            <div className="data-counter" onClick={ restartAnimation } ref={ componentRef } >
                {
                    dataList.map( ( item, i ) =>
                        <div key={ "ds-" + i } className={ compOnScreen ? "data-section ds-active" : "data-section" }>
                            <h2>{ counter < item.number ? counter + " " + item.afterNum : item.number + " " + item.afterNum }</h2>
                            <h5>{ item.text }</h5>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default DataCounter;