import React from "react";
import Shark from "../../img/shark.png";
function Personaje() {
  return (
    <div
      className="container__buttons__prod_info "
      id="cont"
      style={{ height: "460px !important", maxHeight: "460px !important" }}
    >
      <div className="row" style={{ marginTop: "4rem" }}>
        <div className="h1 text-uppercase text-white fw-bold d-flex justify-content-between align-items-center">
          <p className="h1 text-uppercase text-white fw-bold">
            Selected item
            <span className=" h4 ms-4 text-uppercase text-white fw-bold">
              character
            </span>
          </p>
          <button
            className="btn p-0"
            style={{
              background: "#FC653D",
              color: "white",
              width: "6em",
              fontSize: ".9em",
              fontWeight: "bold",
            }}
          >
            CHANGE
          </button>
        </div>

        <div className="col-12 col-md-6">
          <img src={Shark} alt="" className="personaje__img" />
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Expires on: 30 December <br /> 2022 at 18:24:13
          </p>
        </div>
        <div className="col-12 col-md-6 table__personaje">
          <h2
            className="fw-bold text-uppercase text-white ps-3 mb-2"
            style={{ marginTop: "15px" }}
          >
            Hugo 'shark' cruz
          </h2>
          <h3 className="fw-bold text-uppercase text-white ps-3">
            item detail
          </h3>
          <table className="table__layout" style={{ marginLeft: "15px" }}>
            <tbody>
              <tr>
                <td>assed id</td>
                <td>|</td>
                <td>1099811735470</td>
              </tr>
              <tr>
                <td>mint</td>
                <td>|</td>
                <td>24</td>
              </tr>
              <tr>
                <td>mint date</td>
                <td>|</td>
                <td>1 aug, 2022 22:26:44</td>
              </tr>
              <tr>
                <td>rarity</td>
                <td>|</td>
                <td>gold</td>
              </tr>
              <tr>
                <td>type</td>
                <td>|</td>
                <td>sativa</td>
              </tr>
            </tbody>
          </table>
          <h3 className="fw-bold text-uppercase mt-3">Production</h3>
          <table className="table__layout" style={{ marginLeft: "15px" }}>
            <tr>
              <td>time</td>
              <td>|</td>
              <td>50 min</td>
            </tr>
            <tr>
              <td>luck</td>
              <td>|</td>
              <td>8</td>
            </tr>
            <tr>
              <td>power</td>
              <td>|</td>
              <td>48</td>
            </tr>
          </table>
          <h3 className="fw-bold text-uppercase mt-3">deal</h3>
          <table className="table__layout" style={{ marginLeft: "15px" }}>
            <tr>
              <td>speed</td>
              <td>|</td>
              <td>8</td>
            </tr>
            <tr>
              <td>respect</td>
              <td>|</td>
              <td>25</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Personaje;
