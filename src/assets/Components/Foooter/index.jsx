import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#0d6efd",
        overflow: "hidden",
        height: "30px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center", 
        marginTop : "10px",
      }}
    >
      <Container className="mt-4">
        <Row>
          <Col sm={4}>
            <p style={{ color: "white" }}>EUREKA LOGISTICS</p>
          </Col>
          <Col sm={4}>
            <p style={{ color: "white" }}>
              @2023 - Eureka Logistics All Right Reserved
            </p>
          </Col>
          <Col sm={4}>
            <p style={{ color: "white" }}>EUREKA LOGISTICS</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
