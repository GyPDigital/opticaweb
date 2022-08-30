import React, { useEffect, useState } from "react";
import "../assets/css/Showcase.css";
import products from "./data/data-products";

const btnData = [
    {
        class:"categ-offer",
        name:"offer",
        text:"Oferta"
    },
    {
        class:"categ-classic",
        name:"classic",
        text:"Clasico"
    },
    {
        class:"categ-luxury",
        name:"luxury",
        text:"Lujo"
    },
    {
        class:"categ-new",
        name:"new",
        text:"Nuevo"
    },
    {
        class:"categ-all",
        name:"all",
        text:"Todo"
    }
];

function Showcase(){
    // categoria a mostrar, por defecto offer
    const [category, setCategory] = useState("offer");
    // catList lista de productos filtrados por la categoria seleccionada
    const [catList, setCatList] = useState([]);
    // preloader muestra una animacion de carga, no hay necesidad pero se ve chevere XD
    //const [preloader, setPreloader] = useState(false);

    //const [selectedBtn, setSelectedBtn] = useState( [btnOffer=true, btnClassic=false, btnLuxury=false, btnNew=false, btnAll=false] );

    function handleCategory(cat){

        if(cat === "offer" || cat === "luxury" || cat === "new" || cat === "classic" || cat === "all"){
            setCategory(cat);
        }else{
            alert("No existe la categoria seleccionada");
        }
    }

    /*

    function handleCategory(cat){ //"#c9d3e5"

        if(cat === "offer" || cat === "luxury" || cat === "new" || cat === "classic" || cat === "all"){
            // se establece una animacion de 0.5s antes de cargar los nuevos items
            setPreloader(true);
            setTimeout(()=>{
                setCategory(cat);
                setPreloader(false);
            }, 500);
            
        }else{
            alert("No existe la categoria seleccionada");
        }
    }

    */

    useEffect(()=>{
        // cuando se actualiza el estado categoria, se carga la lista de items a mostrar
        setCatList( category === "all" ? products : products.filter(item => item.category === category) );
    },[category]);

    return(
        <div className="container">
            <div className="showcase">
                <div className="sc-title">
                    <h5>Vitrina Virtual</h5>
                    <h1>Nuestros Productos</h1>
                    <p>Lo mejor en marcos y monturas para ti</p>
                </div>
                <div className="sc-category">
                    <div className="sc-category-btn">
                        {
                            btnData.map( ( btn, i ) => 
                                <div className="btn-wrap" key={btn.class+i}>
                                    <button 
                                        className={ "round-btn " + btn.class }
                                        onClick={ () => { handleCategory( btn.name ) }}
                                        style={{ backgroundColor: category === btn.name ? "#c9d3e5" : "white" }}
                                    />
                                    <h5>{ btn.text }</h5>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="sc-items-box">
                    {
                        //preloader // carga el preloader entes de mostrar los items
                        //? <div className="loader"/>
                  /*:*/ catList.map( (prod, i) =>
                            <div className="item" key={"item-"+i}>
                                <img src={require("../assets/imgs/products/"+prod.img)} alt={prod.alt} />
                                <div className="item-text">
                                    <h5>{prod.name}</h5>
                                    <p><strong>{prod.price}</strong></p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Showcase;