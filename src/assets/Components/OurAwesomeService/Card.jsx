import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import darat from "../../Img/darat.jpg";
import laut from "../../Img/jalur laut.jpg";
import udara from "../../Img/jalur udara.jpg";
function CardOurService() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            <div>
              <img src={darat} style={{ borderRadius: "10px" }} />
            </div>
            <h5 style={{ fontWeight: "bold" , marginTop :8}}>Jalur Darat</h5>
            <p>
              Pelayanan menggunakan transportasi darat dengan unit kendaraan
              berbagai variasi jenis kendaraan yang telah dilengkapi GPS dan
              Sistem ERP dalam melayani pengiriman area Jawa dan pengiriman luar
              Jawa.
            </p>
          </Col>
          <Col sm={4}>
            <div>
              <img src={laut} style={{ borderRadius: "10px" }}></img>
            </div>
            <h5 style={{ fontWeight: "bold", marginTop :8 }}>Jalur Laut</h5>
            <p>
              Pelayanan menggunakan transportasi laut untuk pengiriman luar Jawa
              menggunakan fasilitas Less Truck Load (LTL) dan Full Truck Load
              (FTL) yang melayani pengaturan pengiriman atau transportasi Door
              To Door(DTD), Door To Port (DTP), Port To Door (PTD) dan Port To
              Port (PTP) seperti jenis kapal Roro, kapal Pelni, dan cargo
              keseluruh wilayah Indonesia.
            </p>
          </Col>
          <Col sm={4}>
            <div>
              <img src={udara} style={{ borderRadius: "10px" }}></img>
            </div>
            <h5 style={{ fontWeight: "bold" , marginTop :8}}>Jalur Udara</h5>
            <p>
              Pelayanan menggunakan transportasi udara dalam pengirman luar
              negeri maupun dalam negeri, pengiriman kesuluruh wilayah
              Indonesia.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardOurService;
