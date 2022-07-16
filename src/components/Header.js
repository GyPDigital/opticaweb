import React, { useState } from "react";
import "../assets/css/Header.css";
import headersData from "./data/data-header";

function Header(){

    const [imgToShow, setImgToShow] = useState(0);

    function handleImg(n) {

        // seccion que restablece el index para que nunca sea mayor o menor al numero de imagenes
        if(n > headersData.length-1){
            setImgToShow(0)
        }else if(n < 0){
            setImgToShow(headersData.length-1)
        }else{
            setImgToShow(n);
        }

        console.log("cantidad de imgs en array : "+headersData.length);
        console.log("imagen a mostrar : "+imgToShow);
    }

    return(
        <div className="header-container">
            {
                headersData.map( (e, i) => 
                    <div
                        key={e.img+i} 
                        className="header-img"
                        style={{
                            backgroundImage: "url("+require("../assets/imgs/header/"+e.img)+")",
                            display: imgToShow === i ? "block" : "none"
                        }}
                    />
                )
            }
            <button className="btn-header btn-r" onClick={()=>{ handleImg( imgToShow + 1 ) }} />
            <button className="btn-header btn-l" onClick={()=>{ handleImg( imgToShow - 1 ) }} />
            <div className="list-pagination">
                {
                    headersData.map((e, i) => 
                        <span 
                            key={"dot"+i}
                            className="dot"
                            style={{ opacity: imgToShow === i ? "1" : "0.5"}}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Header;