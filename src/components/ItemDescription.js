import React from "react";
import  "../assets/css/ItemDescription.css";

function ItemDescription({ product, setModal }){

    // numero a formato moneda
	const toMoney = ( number ) => {
		return new Intl.NumberFormat("es-CO").format( number );
	};

    return(
        <div className="cardslider">
            <div className="cardslider-img">
                <img src={ require("../assets/imgs/products/" + product.img )} alt={ product.img }/>
            </div>
            <div className="cardslider-info">
                <div className="cardslider-info-text">
                    <h3>{ product.title }</h3>
                    <h4>{ "$" + toMoney( product.price ) }</h4>
                    {
                        product.description.map( ( line, i ) =>
                            <p key={ "desc-item-" + i } className="description-item-line">{ line }</p>
                        )
                    }
                </div>
                <button className="btn-return" onClick={ () => { setModal( false ) } }>Regresar</button>
            </div>
        </div>
    );
}

export default ItemDescription;