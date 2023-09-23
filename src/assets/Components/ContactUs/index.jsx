import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import containers from "../../Img/containers.jpg";
function ContactUss() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", marginTop : -50}}>
      <Container style={{ marginTop: 150 }}>
        <Row>
          <Col sm={6}>
            <div style={{ marginTop: 100 }}>
              <h4 style={{ fontWeight: "bold" }}>
                Ayo Tunggu Apa Lagi, Gabung Bersama
              </h4>
              <h2 style={{ fontWeight: "bold" }}>
                Eureka <span style={{ color: "blue" }}>Logistics</span>
                <span style={{ color: "red" }}>!</span>
              </h2>
              <p style={{}}>
                Solusi logistik untuk perusahaan yang memproduksi dan
                mendistribusikan produknya di Indonesia
              </p>
              <Button variant="primary">Contact US</Button>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <img style={{padding : 50 }} src={containers} width={"100%"}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUss;
