import React, { useEffect, useState } from "react";
import "../../assets/css/showcase/Showcase.css";
import products from "../data/data-products";
import Modal from "./Modal.js";
import ItemDescription from "./ItemDescription.js";

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
    // lista de productos filtrados por la categoria seleccionada
    const [catList, setCatList] = useState([]);
    // muestra una animacion de carga, no hay necesidad pero se ve chevere XD
    const [preloader, setPreloader] = useState(false);
    // mostrar ocultar el modal que muestra la descripcion del producto
    const [modal, setModal] = useState(false);
    // almacena el codigo del producto a mostrar en el modal
    const [itemToShow, setItemToShow] = useState("1");

    // cambia la categoria y mientras pasa muestra el preloader
    function handleCategory(cat){

        if(cat === "offer" || cat === "luxury" || cat === "new" || cat === "classic" || cat === "all"){
            setCategory(cat);
            handlePreloader();
        }else{
            alert("No existe la categoria seleccionada");
        }
    }

    // muestra la animacion de carga durante 0,7 s
    function handlePreloader(){
        setPreloader(true);
        setTimeout(()=>{
            setPreloader(false);
        }, 700);
    }

    // se establece el producto a mostrar en el modal y se abre el modal 
    function showModal (codeProd){
        setItemToShow(codeProd);
        setModal(true);
    }

    // numero a formato moneda
	const toMoney = ( number ) => {
		return new Intl.NumberFormat("es-CO").format( number );
	};

    useEffect(()=>{
        // cuando se actualiza el estado categoria, se carga la lista de items a mostrar
        setCatList( category === "all" ? products : products.filter(item => item.category === category) );
    },[category]);

    return(
        <div className="container">
            <div className="showcase">
                <div className="sc-title">
                    <h5 className="section-title">Vitrina Virtual</h5>
                    <h1>Nuestros Productos</h1>
                    <p>Lo mejor en marcos y monturas para ti</p>
                </div>
                <div className="sc-category">
                    <div className="sc-category-btn">
                        {
                            btnData.map( ( btn, i ) => 
                                <div className="btn-wrap" key={btn.class+i}>
                                    <button 
                                        className={ category === btn.name ? "round-btn "+btn.class+"-selected" : "round-btn "+btn.class }
                                        onClick={ () => { handleCategory( btn.name ) }}
                                    />
                                    <h5>{ btn.text }</h5>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="sc-items-box" style={{ overflow: preloader ? "hidden" : "scroll" }} >
                    <div className="loader-container" style={{ display: preloader ? "flex" : "none" }}>
                        <div className="loader"/>
                    </div>
                    {
                        catList.map( (prod, i) =>
                            <div className="item" key={"item-"+i} onClick={ () => { showModal( prod.codeProd ) } }>
                                <img src={require("../../assets/imgs/products/"+prod.img)} alt={prod.alt} />
                                <div className="item-text">
                                    <h5>{prod.name}</h5>
                                    <p><strong>{ "$" + toMoney( prod.price ) }</strong></p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Modal modalShow={modal} setModalShow={setModal}>
                    <ItemDescription
                        product={products.find( item => item.codeProd === itemToShow )}
                        setModal={setModal}
                    />
                </Modal>
            </div>
        </div>
    );
}

export default Showcase;