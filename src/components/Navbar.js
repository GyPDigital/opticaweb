import React from "react";
import "../assets/css/Navbar.css";

function Navbar (){
    return(
        <div className="navbar">
            <img className="navbar-logo" src={require("../assets/imgs/logo-optica-template.png")} alt="Logo optica" />
            <div className="navbar-link-box">
              	<a href="www.gypdigital.com"><img src={require("../assets/icons/home.png")} alt="Icono home" /> Inicio</a>
				<a href="www.gypdigital.com"><img src={require("../assets/icons/glasses.png")} alt="Icono productos gafas" /> Productos</a>
                <a href="www.gypdigital.com"><img src={require("../assets/icons/contact.png")} alt="Icono telefono contacto" /> Contacto</a>
                <a href="www.gypdigital.com"><img src={require("../assets/icons/about-us.png")} alt="Icono personas nosotros" /> Nosotros</a>
            </div>
        </div>
    );
}

export default Navbar;