import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import orangnulis from "../../Img/orangnulis.jpg";
import orangliatban from "../../Img/orangliatban.jpg";
import liattruckbuka from "../../Img/liattruckbuka.jpg";

function OpeningHours() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", height: 300, marginTop: 60 }}>
      <Container>
        <Row style={{ margin: -50 }}>
            <Col sm={4}>
              <Card
                style={{
                  minHeight: 180,
                  minWidth: 450,
                  backgroundColor: "rgba(0, 0, 255, 0.5)", 
                  display: "flex",
                  backgroundImage: `url(${orangnulis})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: 50
                }}
              >
                <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                  Opening Hours Mon-Fri: 08:00-16:00
                </p>
                <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                  Eureka Logistics Head Office
                </p>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                style={{
                  minHeight: 180,
                  minWidth: 450,
                  backgroundColor: "rgba(0, 0, 255, 0.5)",
                  display: "flex",
                  backgroundImage: `url(${ liattruckbuka})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: 50
                }}
              >
                <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                  Opening Hours Mon-Fri: 08:00-16:00
                </p>
                <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                  Eureka Logistics Head Office
                </p>
              </Card>
            </Col>
            <Col sm={4}>
              <Card
                style={{
                  minHeight: 180,
                  minWidth: 450,
                  backgroundColor: "rgba(0, 0, 255, 0.5)", 
                  display: "flex",
                  backgroundImage: `url(${orangliatban})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: 50
                }}
              >
                <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                  Opening Hours Mon-Fri: 08:00-16:00
                </p>
                <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                  Eureka Logistics Head Office
                </p>
              </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OpeningHours;
