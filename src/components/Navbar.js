import React, { useState } from "react";
import "../assets/css/Navbar.css";

function Navbar(){
    /* despliega u oculta el menú */
    const [deploy, setDeploy] = useState(false);

    return(
        <div className="navbar" id="nav">
            <div className="navbar-imgs">
                <img className="navbar-logo" src={require("../assets/imgs/logo-optica-template.png")} alt="Logo optica" />
                <button className={!deploy ? "navbar-cls btn-hide" : "navbar-cls btn-show"} onClick={() => setDeploy(!deploy)}>
                    <img src={require("../assets/icons/equis.png")} alt="Icono equis cerrar" />
                </button>
                <button className={deploy ? "navbar-ham btn-hide" : "navbar-ham btn-show" } onClick={() => setDeploy(!deploy)}>
                    <img  src={require("../assets/icons/menu.png")} alt="Icono hamburguesa" />
                </button>
                <div className="divider-reverse">
                    <hr className="shine-reverse"/>
                </div>
            </div>
            <div className={ deploy ? "navbar-link-box opened-links" : "navbar-link-box closed-links" }>
              	<a href="www.gypdigital.com">Inicio</a>
				<a href="www.gypdigital.com">Productos</a>
                <a href="www.gypdigital.com">Nosotros</a>
                <a href="www.gypdigital.com">Contacto</a>
            </div>
        </div>
    );
}

export default Navbar;