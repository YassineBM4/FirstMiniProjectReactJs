import React, { useState } from "react";
import "../styles/List.css";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../components/Modal";

function ListItems({ image, name, episodes }) {
  
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h4>Episodes : {episodes}</h4>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Watch now!
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={name}
      />
    </div>
  );
}

export default ListItems;
