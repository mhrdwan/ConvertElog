import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import delivery from "../../../Img/delivery-truck.png";
import tipper from "../../../Img/tipper.png";
import truck from "../../../Img/truck.png";
import deliveryyy from "../../../Img/deliveryyy.png";
function CardOurAwasome() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col sm={3}>
            <Card style={{ minHeight: "350px" }}>
              <div className="mx-4">
                <img src={delivery} width={"50%"}></img>
                <h4 style={{ fontWeight: "bold" }}>Trucking</h4>
                <p>
                  Pelayanan Pengiriman barang dalam satu unit penuh kendaraan
                  (Full Charter service)
                </p>
              </div>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ minHeight: "350px" }}>
              <div className="mx-4">
                <img src={tipper} width={"50%"}></img>
                <h4 style={{ fontWeight: "bold" }}>Regular</h4>
                <p>
                  Pelayanan pengiriman cepat, aman, dan handal seperti kirim
                  dokumen, kriim surat dan kirim barang paket keseluruh wilayah
                  indonesia.
                </p>
              </div>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ minHeight: "350px" }}>
              <div className="mx-4">
                <img src={truck} width={"50%"}></img>
                <h4 style={{ fontWeight: "bold" }}>Project Logistics</h4>
                <p>
                  Pengiriman ke seluruh indonesia menggunakan semua jenis
                  kendaraan melalui jalur darat, laut, maupun udara
                </p>
              </div>
            </Card>
          </Col>
          <Col sm={3}>
            <Card style={{ minHeight: "350px" }}>
              <div className="mx-4">
                <img src={deliveryyy} width={"50%"} alt="Delivery" />
                <h4 style={{ fontWeight: "bold" }}>Movers (Jasa Pindahan)</h4>
                <p>
                  pelayanan membantu prroses pindahan anda, baik untuk keperluan
                  residensial (rumah, apartemen, kost) maupun komersial (kantor,
                  ruko , gudang , pabrik) ke seluruh indonesia
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardOurAwasome;
