import React, { useEffect, useState } from "react";
import "../assets/css/Showcase.css";
import products from "./data/data-products";

function Showcase(){

    const [category, setCategory] = useState("offer");

    const [catList, setCatList] = useState([]);

    function handleCategory(cat){

        if(cat === "offer" || cat === "luxory" || cat === "new" || cat === "cheap"){
            setCategory(cat);
        }else{
            alert("No existe la categoria seleccionada");
        }
    }

    useEffect(()=>{
        setCatList( products.filter(item => item.category === category) );
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
                    <h3>Categorias</h3>
                    <div className="sc-category-btn">
                        <div className="btn-wrap">
                            <button className="round-btn categ-offer" onClick={()=>{ handleCategory("offer") }}/>
                            <h5>Oferta</h5>
                        </div>
                        <div className="btn-wrap">
                            <button className="round-btn categ-cheap" onClick={()=>{ handleCategory("cheap") }}/>
                            <h5>Economico</h5>
                        </div>
                        <div className="btn-wrap">
                            <button className="round-btn categ-luxury" onClick={()=>{ handleCategory("luxory") }}/>
                            <h5>Lujo</h5>
                        </div>
                        <div className="btn-wrap">
                            <button className="round-btn categ-new" onClick={()=>{ handleCategory("new") }}/>
                            <h5>Nuevo</h5>
                        </div>
                    </div>
                </div>
                <div className="sc-items-box">
                    {
                        catList.map( (prod, i) =>
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