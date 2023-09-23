import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Brench() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col sm={3}>
            <h4 style={{ fontWeight: "bold" }}>Brench Semarang</h4>
            <p>JI. Puspowarno Tengah No. 38-40 Semarang - Jawa Tengah.</p>
            <div>Tel: +62247621968</div>
            <div>Email: infosmg@eurekalogistics.co.id</div>
            <div>WA: 6281293941037</div>
          </Col>
          <Col sm={3}>
            <div>
              <h4 style={{ fontWeight: "bold" }}>Brench Bandung</h4>
              <p>JI Soerkarno-Hatta No.554 Bandung - Jawa Barat</p>
              <div>Telp: +62227507782</div>
              <div>Email: infobdg@eurekalogistics.co.id</div>
              <div>WA: 6287811048004</div>
            </div>
          </Col>
          <Col sm={3}>
            <div>
              <h4 style={{ fontWeight: "bold" }}>Brench Surabaya</h4>
              <p>
                JI. berbek industri VII/15 Waru Sidoarjo (Komp Sier, Surabaya)
                Surabaya - Jawa Timur
              </p>
              <div>Telp: +62318664620</div>
              <div>Email: infosby@eurekalogistics.co.id</div>
              <div>WA: 6282244696077</div>
            </div>
          </Col>
          <Col sm={3}>
            <div>
              <h4 style={{ fontWeight: "bold" }}>Brench Yogyakarta</h4>
              <p>
                JI Gedongkuning No. 132, Rejowinangun, Kec. Kotagede, Kota
                Yogyakarta, Daerah Istimewa Yogyakarta 55171
              </p>
              <div>Telp: +62247621968</div>
              <div>Email: infosmg@eurekalogistics.co.id</div>
              <div>WA: 6281293941037</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Brench;
