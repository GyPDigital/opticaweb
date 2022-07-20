import React, { useEffect, useState } from "react";
import "../assets/css/Header.css";
import headersData from "./data/data-header";

function Header(){

    const [imgToShow, setImgToShow] = useState(0);
    const [pause, setPause] = useState(false);

    function handleImg(n) {

        // seccion que restablece el index para que nunca sea mayor o menor al numero de imagenes
        if(n > headersData.length-1){
            setImgToShow(0)
        }else if(n < 0){
            setImgToShow(headersData.length-1)
        }else{
            setImgToShow(n);
        }
    }

    // ejecuta la animacion del slider cada 4.5 s
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(!pause) handleImg(imgToShow+1);
        }, 4500);

        return () => {
            if(interval){
                clearInterval(interval);
            }
        };
    });

    return(
        <div className="header-container" onMouseEnter={()=>{ setPause(true) }} onMouseLeave={()=>{ setPause(false) }}>
            {
                headersData.map( (e, i) => 
                    <div
                        key={e.img+i} 
                        className="header-img"
                        style={{
                            backgroundImage: "url("+require("../assets/imgs/header/"+e.img)+")",
                            display: imgToShow === i ? "block" : "none",
                            backgroundPosition: i === 2 ? "left" : "right"
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