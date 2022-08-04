import React from "react";
import "../assets/css/AppointmentBar.css";

function AppointmentBar(){
    return(
        <div className="conainer">
            <div className="appointment-bar">
                <div className="appointment-bar-img"/>
                <div className="appointment-bar-text">
                    <h2>Agenda una cita con nosotros</h2>
                    <h2 className="appointment-txt-thin">y obten un descuento en tus nuevos lentes</h2>
                </div>
                <button className="appointment-bar-btn">AGENDAR CITA <div className="icon-whatsapp"/></button>
            </div>
        </div>
    );
}

export default AppointmentBar;