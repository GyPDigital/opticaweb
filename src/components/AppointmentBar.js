import React from "react";
import "../assets/css/AppointmentBar.css";

function AppointmentBar(){

    const openWhatsapp = () => {
        window.open( "https://wa.me/573118142989?text=Hola,%20quisiera%20agendar%20una%20cita" , "_target", "noopener, noreferrer");
    }

    return(
        <div className="conainer">
            <div className="appointment-bar">
                <div className="appointment-bar-img"/>
                <div className="appointment-bar-text">
                    <h2>Agenda una cita con nosotros</h2>
                    <h2 className="appointment-txt-thin">y obten un descuento en tus nuevos lentes</h2>
                </div>
                <button className="appointment-bar-btn" onClick={openWhatsapp}>AGENDAR CITA <div className="icon-whatsapp"/></button>
            </div>
        </div>
    );
}

export default AppointmentBar;