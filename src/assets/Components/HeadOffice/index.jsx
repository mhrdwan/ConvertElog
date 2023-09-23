import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import handsani from "../../Img/handsani.jpg";
function Headoffices() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }} className="mt-5">
      <Container >
        <Row >
          <Col className="d-flex justify-content-start" sm={4}>
            <div>
              <img style={{ padding: 30 }} src={handsani}></img>
            </div>
          </Col>
          <Col sm={6}>
            <h2 className="mt-5" style={{ fontWeight: "bold" }}>
              Head Office
            </h2>
            <div className="">JI. H.Badiving Raya No.100 Ciracas - Jakarta Timur</div>
            <div className="">Odivening Hours Mon-Fri: 08:00-16:00</div>
            <div className="">Give us a Call 02187796010</div>
            <div className="">Send us a Message info@eurekalogistics.cold</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Headoffices;
