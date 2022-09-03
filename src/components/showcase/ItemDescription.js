import React from "react";
import  "../../assets/css/showcase/ItemDescription.css";

function ItemDescription({ product, setModal }){

    const handleWhatsapp = ( text ) => {
        window.open( "https://wa.me/573118142989?text="+text.replace(" ", "%20"), "_blank", "noopener noreferrer" );
    }

    // numero a formato moneda
	const toMoney = ( number ) => {
		return new Intl.NumberFormat("es-CO").format( number );
	};

    return(
        <div className="item-desc">
            <div className="item-desc-img">
                <img src={ require("../../assets/imgs/products/" + product.img )} alt={ product.img }/>
            </div>  
            <div className="item-desc-info">
                <div className="item-desc-info-text">
                    <h3>{ product.name }</h3>
                    <h4>{ "$" + toMoney( product.price ) }</h4>
                    <div className="item-desc-info-description">
                        {
                            product.description.map( ( line, i ) =>
                                <p key={ "desc-item-" + i } className="description-item-line">{ line }</p>
                            )
                        }
                    </div>
                </div>
                <div className="item-desc-btn-section">
                    <button className="btn-item-desc btn-whatsapp" onClick={ () => { handleWhatsapp( "Hola, me pueden dar mas información sobre " + product.name ) } }>
                        <div className="icon-whatsapp-item-desc"/>
                    </button>
                    <button className="btn-item-desc btn-back" onClick={ () => { setModal( false ) } }>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemDescription;