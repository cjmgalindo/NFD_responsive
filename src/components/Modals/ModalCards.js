import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ModalCards({ state, setstate, img }) {
    const [show, setShow] = useState(true);

    const handleClose = () => {
      setShow(false);
      setstate(!state);
    };
    // const handleShow = () => setShow(true);
    
    // generador de cards
    const card = [];
    for (let i = 0; i < 21; i++) {
        card.push(
            <div className="card__ModalCards" key={i} onClick={(e)=>e.target.classList.toggle("select_ModalCards")}>

                <img src={img} alt="" style={{pointerEvents:"none"}}/>
                <p style={{fontWeight:"bold", margin:".8em 0", textAlign:"center", pointerEvents:"none"}}>
                    BIKE (001)
                </p>

            </div>
        )
        
    }


    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
          centered
        >
          <Modal.Body className="bg_modalText">
            <div className="modalCards">
              <div className="modalCards_header">
                <h2>SELECT CARD</h2>
              </div>
              <div className="cards_modalCards">
                {card}
              </div>
              <div className="modalCards_footer">
                <div >
                  <div className="modalCards_footer_btns">
                    <button onClick={() => handleClose()}>Cancel</button>
  
                    <button onClick={() => handleClose()}>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default ModalCards;
