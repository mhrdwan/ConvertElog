import React from "react";
import { Col, Row } from "react-bootstrap";
import terbuka from "../../Img/terbuka.jpg";
import buka from "../../Img/buka.jpg";
import liattruckbuka from "../../Img/liattruckbuka.jpg";
function Media() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <h3 style={{ fontWeight: "bold" }}>Media</h3>
      </div>
      <Row >
        <Col sm={4}>
          <img src={terbuka}></img>
        </Col>
        <Col sm={4}>
          <img src={buka}></img>
        </Col>
        <Col sm={4}>
          <img src={liattruckbuka}></img>
        </Col>
      </Row>
    </div>
  );
}

export default Media;
