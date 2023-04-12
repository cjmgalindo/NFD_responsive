import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import hat from "../../img/hat.png";
import level from "../../img/level.png";
import moustache from "../../img/moustache.png";

function ModalStats({ state, setState }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setState(!state);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <Modal.Body className="bg_modalText">
          <div className="modalText">
            <div className="modalText_header">
              <h2>STATS</h2>
            </div>

            <div
              className="modal__statis-"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <div className="box__Statis">
                  <div>
                    <img src={hat} alt="" />
                    <h4>RESPECT</h4>
                  </div>
                  <p>
                    170 <span>RECEIVED</span>{" "}
                  </p>
                </div>

                <div className="box__Statis">
                  <div>
                    <img src={level} alt="" />
                    <h4>LEVEL</h4>
                  </div>
                  <p>
                    20 <span>280/2,500 XP</span>{" "}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <div className="box__Statis">
                  <div>
                    <img src={moustache} alt="" />
                    <h4>$PB0</h4>
                  </div>
                  <p>
                    6,550 <span>EARNED</span>{" "}
                  </p>
                </div>
                <div className="box__Statis">
                  <div>
                    <h4>SEASON POINTS</h4>
                  </div>
                  <p>
                    340,222 <span>IMPSUN</span>{" "}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <div className="box__Statis">
                  <div>
                    <h4>OTHER STAT</h4>
                  </div>
                  <p>
                    000 <span>L IMPSUN</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            

            <div className="modalText_footer">
              <div>
                <div className="modalText_footer_btns">
                  <button onClick={() => handleClose()}>OKAY</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalStats;
