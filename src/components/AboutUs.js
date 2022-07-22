import React from "react";
import "../assets/css/AboutUs.css";

function AboutUs(){
    return(
        <div className="container">
            <div className="about">
                <div className="about-txt">
                    <h5>Sobre Nosotros</h5>
                    <h2>La Mejor Optica Que Puedes Encontrar</h2>
                    <p>Somos un equipo de profesionales certificados en optometria y oftanmologia con la misión de ayudar a todo quien podamos a conservar o mejorar la salud de sus ojos usando equipos de alta tecnologia y aplicando nuestros conocimientos y experiencia.</p>
                    <p>Sociosqu tempor rhoncus interdum nunc ornare risus hac. Nostra ut eget cubilia ex mattis nec tempor ante ac rutrum.</p>
                    <div className="about-bottom">
                        <div className="about-blue-box">
                            <h4>10+</h4>
                            <p>Años de experiencia</p>
                        </div>
                        <div className="about-bottom-text">
                            <h5>Profesionales a tu servicio</h5>
                            <p>Ornare curae pretium nisi tortor duis facibus pallentesque</p>
                            <h5>Pasión por lo que hacemos</h5>
                            <p>Ornare curae pretium nisi tortor duis facibus pallentesque</p>
                        </div>
                    </div>
                </div>
                <img className="about-img" src={require("../assets/imgs/about/optometrist-woman.jpg")} alt=" doctora optometra en tienda" />
            </div>
        </div>
    );
}

export default AboutUs;