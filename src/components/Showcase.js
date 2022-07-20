import React from "react";
import "../assets/css/Showcase.css";

function Showcase(){
    return(
        <div className="container">
            <div className="showcase">
                <div className="sc-title">
                    <h5>Vitrina Virtual</h5>
                    <h1>Nuestros Lentes</h1>
                    <p>Lo mejor de nosotros para ti</p>
                </div>
                <div className="sc-category">
                    <h3>Categorias</h3>
                    <div className="sc-category-btn">
                        <div className="btn-wrap">
                            <button className="round-btn categ-offer"/>
                            <h5>Oferta</h5>
                        </div>
                        <div className="btn-wrap">
                            <button className="round-btn categ-cheap"/>
                            <h5>Economico</h5>
                        </div>
                        <div className="btn-wrap">
                            <button className="round-btn categ-luxury"/>
                            <h5>Lujo</h5>
                        </div>
                        <div className="btn-wrap">
                            <button className="round-btn categ-new"/>
                            <h5>Nuevo</h5>
                        </div>
                    </div>
                </div>
                <div className="sc-items-box">
                    <div className="item">
                        <img src={require("../assets/imgs/products/rounded-black.jpg")} alt="gafas tipo redondeadas negras" />
                        <div className="item-text">
                            <h5>Redondeado negro</h5>
                            <p><strong>$30.000</strong></p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require("../assets/imgs/products/transparent-lennon.jpg")} alt="gafas tipo lenon transparentes" />
                        <div className="item-text">
                            <h5>Lennon transparentes</h5>
                            <p><strong>$40.000</strong></p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require("../assets/imgs/products/rounded-black.jpg")} alt="gafas tipo redondeadas negras" />
                        <div className="item-text">
                            <h5>Redondeado negro</h5>
                            <p><strong>$30.000</strong></p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require("../assets/imgs/products/transparent-lennon.jpg")} alt="gafas tipo lenon transparentes" />
                        <div className="item-text">
                            <h5>Lennon transparentes</h5>
                            <p><strong>$40.000</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showcase;