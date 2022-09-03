import React from "react";
import "../assets/css/Testimonials.css";
import data from "./data/data-testimonials";

function Testimonials(){

    return(

        <div className="container" style={{backgroundColor: "white"}}>
            <div className="testimonials">
                <hr />
                <div className="testimonials-header">
                    <h5 className="section-title">Testimonios</h5>
                    <div className="testimonials-title">
                        <h2>Nuestros Clientes Dicen</h2>
                        <hr />
                    </div>
                </div>
                <div className="testimonials-body">
                    {
                        data.map( ( item, i ) =>
                            <div key={ "testimonials-card-" + i } className="testimonials-card">
                                <div className="testimonials-card-text">
                                    <p>{ item.text }</p>
                                    <div className={ i % 2 === 0 ? "testimonials-card-text-customer" : "testimonials-card-text-customer text-right" } >
                                        <h5>{ item.name }</h5>
                                        <h5 className="testimonials-card-profession">{ item.profession }</h5>
                                    </div>
                                    <hr />
                                </div>
                                <img className={ i % 2 === 0 ? "testimonials-card-photo" : "testimonials-card-photo align-left" } src={ require( "../assets/imgs/testimonials/" + item.img ) } alt="foto de Erica Beltrán" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    );
}

export default Testimonials;