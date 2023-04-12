import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import iconInfo from "../../img/info.png";

function Information({
  eSelect,
  seteoWindow,
  setText,
  eText,
  color = "#B06A26",
  btnInfo,
  valueSub,
  setValueSub,
  value
}) {

  function click() {
    if (eSelect) {
      seteoWindow(btnInfo.set);
      setText({
        tittle: btnInfo.tittle,
        subtitle: btnInfo.subtitle,

      });
    setValueSub(valueSub + value)
    }
  }


  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="col-12 col-md-5 col-lg-3 d-flex box_info__prod">
      <div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginBottom: "2.5rem" }}
        >
          <img
            src={iconInfo}
            alt=""
            style={{ width: "2rem", height: "2rem", marginRight: "2rem" }}
          />
          <h1
            className="text-white text-uppercase text-center fw-bold m-1 d-flex"
            style={{ margin: "200px 0px" }}
          >
            info {eText.tittle}
          </h1>
        </div>

        <h4 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          Assets Multiplier
        </h4>
        <p className="text-white text-center  ">0.5%</p>

        <h4 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          Random
        </h4>
        <p className="text-white text-center  ">
          After slot are lack, we add <br /> the random bonus
        </p>

        <h4 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          total multiplier
        </h4>
        <p className="text-white text-center  ">0.5% (+/-10%)</p>

        <table className="table__layout m-auto" style={{}}>
          <tbody>
            <tr>
              <td>neutral bonus</td>
              <td>|</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>sativa bonus</td>
              <td>|</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Hybrid Bonus</td>
              <td>|</td>
              <td>8</td>
            </tr>
            <tr>
              <td>indica bonus</td>
              <td>|</td>
              <td>10%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row button__prod" style={{ marginTop: "3rem" }}>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-white fw-bold text-uppercase ">
            {" "}
            Confirm Selection
          </h3>

          <button
            className="btn "
            style={{
              background: color,
              width: "8em",
              fontSize: "1.7em",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={click}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;
