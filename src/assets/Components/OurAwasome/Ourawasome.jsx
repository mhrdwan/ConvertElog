import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardOurAwasome from "./CardAwasome/CardOurAwasome";

function Ourawasome() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ marginTop: 50 }}>
            <h5 style={{ fontSize: 35, fontWeight: "bold" }}>
              Our Awesome Project
            </h5>
            <p>Kami Solusi Ekspedisi Anda</p>
            <p>
              Pelayanan pengiriman dari dan ke seluruh indonesia melalui darat,
              laut dan udara dengan waktu kirim cepat maupun kirim regular,
              kirim dari gudang ke gudang, kirim dari pelabuhan ke gudang atau
              kirim dari gudang ke pelabuhan serta kirim dari pelabuhan ke
              pelabuhan.
            </p>
          </Col>
          <CardOurAwasome />
        </Row>
      </Container>
    </div>
  );
}

export default Ourawasome;
