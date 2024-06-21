import React from "react";
import Modal from "react-bootstrap/Modal";
import { Details } from "../helpers/Details";
import "bootstrap/dist/css/bootstrap.min.css";

function MyVerticallyCenteredModal({ show, onHide, name }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Details.map((details) => {
          const matchingNames = details.name === name;
          if (matchingNames) {
            return (
              <div className="card" key={details.id}>
                <h5>Genres : {details.genres}</h5>
                <h6>Episodes : {details.episodes}</h6>
                <p>{details.story}</p>
              </div>
            );
          }
          return null;
        })}
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
