import React from "react";
import Life from "../../img/battle/life.png";


function EquipInfo( {img,tittle,number} ) {
  return (
    <div className="container__info">
      <img src={img} alt="" />
      <div className="container__info__equip">
        <p>{tittle}</p>
        <p className="container__info__equip-number">{number}</p>
      </div>
    </div>
  );
}

export default EquipInfo;
