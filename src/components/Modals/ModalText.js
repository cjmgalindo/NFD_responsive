import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ModalText({ state, setState }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setState(!state);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        centered
      >
        <Modal.Body className="bg_modalText">
          <div className="modalText">
            <div className="modalText_header">
              <h2 >CONFIRM UPGRADE SLOT</h2>
              <p >Lorem ipsum dolor sit amet?.</p>
            </div>

            <p>
                Morbi facilisis felis turpis, vitae accumsan elit egestas eget. <br />
                In sit amet scelerisque lectus. Nulla in dolor at locus sagittis
            </p>

            <div className="modalText_footer">
              <div >
                <div className="modalText_footer_btns">
                  <button onClick={() => handleClose()}>Cancel</button>

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

export default ModalText;
