import React from "react";
import  "../assets/css/ItemDescription.css";

function ItemDescription({ product, setModal }){

    const handleWhatsapp = () => {
        window.open( "https://wa.me/573118142989", "_blank", "noopener noreferrer" );
    }

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
                    <h3>{ product.name }</h3>
                    <h4>{ "$" + toMoney( product.price ) }</h4>
                    <div className="cardslider-info-description">
                        {
                            product.description.map( ( line, i ) =>
                                <p key={ "desc-item-" + i } className="description-item-line">{ line }</p>
                            )
                        }
                    </div>
                </div>
                <div className="cardslider-btn-section">
                    <button className="btn-cardslider btn-whatsapp" onClick={ handleWhatsapp }>
                        <div className="icon-whatsapp-cardslider"/>
                    </button>
                    <button className="btn-cardslider btn-back" onClick={ () => { setModal( false ) } }>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemDescription;