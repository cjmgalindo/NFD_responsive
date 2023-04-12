import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function ModalGang( {state, setState, text} ) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    setState({...state, [text.name]:false})
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
      >
        {/* <Modal.Header closeButton>
              <Modal.Title>Join a Gang</Modal.Title>    
              <p>
                To join a clan you need a gang membership
              </p>
            </Modal.Header> */}
        <Modal.Body className="background__modal">
          <div className="body__modal">
            <div className="body__modal-header">
              <h2>{text.name} a Gang</h2>
              <p>{text.info}</p>
            </div>
            <div className="body__modal-input">
              { text.name === "Make" 
                ?
                <>
                  <p>Gang name</p>
                  <input type="text" placeholder="Enter a name"/>
                  <p>temp-gang box</p>
                </>
                : 
                <>
                  <input type="text" placeholder="GANGS" style={{
                    margin: "1em 0 ",
                    background:"none",
                    borderBottom: "2px solid rgb(124,92,44)"
                    }}/>
                </>
              }
            </div>
           
            <div className="body_modal__footer">
            <p className="text-center text-white fw-bolder text-white h2">{text.details}</p>

            <div className="body_modal__footer-buttons">
                <div className="modal__footer-img"></div>
                <div className="modal__footer-buttons">
                    <button onClick={()=>handleClose()}>
                        Cancel
                    </button>
                    <Link to={text.link}>
                      <button>
                      {text.name}
                      </button>
                    </Link>
                </div>
            </div>
            </div>
          </div>
        </Modal.Body>
        {/*  <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary">Join</Button>
            </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalGang;
