import React from "react";
import Phi from "../../img/phi201.png";

function CardBlend({
  img = Phi,
  text = "Available",
  event
}) {
  return (
    <div className="card__blend_page" onClick={event}>
      <h1 style={text === "Finish" ? {background:"red"}: {}}>{text}</h1>
      <img src={img} alt="" style={{userSelect:"none", pointerEvents:"none"}}/>
      <p className="fw-bold pt-2">"PHS [28657]"</p>
      
    </div>
  );
}

export default CardBlend;