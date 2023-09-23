import React from "react";
import { Container } from "react-bootstrap";
import CardOurService from "./Card";

function OurAwesomeService() {
  return (
    <div>
      <Container>
        <div style={{ marginTop: 50 }}>
          <h2 style={{ fontWeight: "bold" }}>Our Awesome Service</h2>
          <p>
            EUREKA LOGISTIC - Memberikan Pilihan untuk opsi pengiriman logistik
            anda.
          </p>
        <CardOurService />
        </div>
      </Container>
    </div>
  );
}

export default OurAwesomeService;
