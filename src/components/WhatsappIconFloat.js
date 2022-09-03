import React from "react";
import "../assets/css/WhatsappIconFloat.css";

function WhatsappIconFloat(){
    return(
        <a href="https://wa.me/573118142989" 
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={require("../assets/icons/whatsapp-icon-white.png")} alt="icono de whatsapp blanco" />
        </a>
    );
}

export default WhatsappIconFloat;