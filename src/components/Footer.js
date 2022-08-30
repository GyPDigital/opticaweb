import React from "react";
import "../assets/css/Footer.css";

function Footer(){

    const openSocialMedia = url => {
        window.open( url, '_blank', 'noopener,noreferrer' );
    }

    return(
        <div className="container-footer">
            <div className="footer">
                <div className="footer-logo">
                    <img src={require("../assets/imgs/logo-optica-template.png")} alt="Logo optica" />
                    <p>Class quiste dui magna aliquet vivamus neque mus nist est.</p>
                </div>
                <div className="footer-data">
                    <div className="footer-list-data">
                        <img className="footer-location-icon" src={ require("../assets/icons/location-icon.png") } alt="icono ubicación" style={{width: "25px", height: "25px"}} />
                        <p className="li-icon-location">Cra 5a Calle 10 34-02 Ibagué</p>
                    </div>
                    <div className="footer-list-data">
                        <img src={ require("../assets/icons/icon-mail-blue.png") } alt="icono correo" />
                        <p className="li-icon-email">contacto-optometry@correo.com</p>
                    </div>
                    <div className="footer-list-data">
                        <img src={ require("../assets/icons/whatsapp-icon-blue.png") } alt="icono whatsapp azul" />
                        <p className="li-icon-whatsapp">+57 311 222 3344</p>
                    </div>
                </div>
                <div className="footer-social-media">
                    <h3>Siguenos en nuestras redes</h3>
                    <div className="footer-social-media-icons">
                        <button className="footer-sm-facebook" onClick={ () => openSocialMedia("https://facebook.com") } />
                        <button className="footer-sm-twitter"  onClick={ () => openSocialMedia("https://twitter.com") } />
                        <button className="footer-sm-youtube"  onClick={ () => openSocialMedia("https://youtube.com") } />
                        <button className="footer-sm-instagram"  onClick={ () => openSocialMedia("https://instagram.com") } />
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright <strong>©</strong> 2023 Optometry, todos los derechos reservados.</p>
                    <p>Creado por <a href="www.google.com" target={"_blank"}>G&P Informática y Tecnología</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;