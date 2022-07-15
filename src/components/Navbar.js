import React from "react";
import "../assets/css/Navbar.css";

function Navbar (){
    return(
        <div className="navbar" id="nav">
            <div className="navbar-imgs">
                <img className="navbar-logo" src={require("../assets/imgs/logo-optica-template.png")} alt="Logo optica" />
                <a href="#" className="navbar-close">
                    <img src={require("../assets/icons/equis.png")} alt="Icono equis cerrar" />
                </a>
                <a href="#nav" className="navbar-hamburguer">
                    <img  src={require("../assets/icons/menu.png")} alt="Icono hamburguesa" />
                </a>
                <div className="divider-reverse">
                    <hr className="shine-reverse"/>
                </div>
            </div>
            
            <div className="navbar-link-box">
              	<a href="www.gypdigital.com">Inicio</a>
				<a href="www.gypdigital.com">Productos</a>
                <a href="www.gypdigital.com">Nosotros</a>
                <a href="www.gypdigital.com">Contacto</a>
            </div>
        </div>
    );
}

export default Navbar;