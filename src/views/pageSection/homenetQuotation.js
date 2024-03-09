/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function HomenetQuotation() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Daftarkan Bisnis anda sekarang !
            </h2>
            <h4 className="description">
              daftarkan bisnis anda dan nikmati benefit dari homenet App, aplikasi kami gratis ! 
              anda hanya akan dikenakan biaya registrasi sebesar Rp 600.000 untuk membuka database acount bisnis anda.
              setelah anda registrasi seluruh aplikasi dapat anda akses selamanya tanpa harus membayar subscraption bulanan.
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://www.creative-tim.com/product/blk-design-system-react?ref=blkdsr-index-page-download-section"
              role="button"
              size="lg"
            >
              click untuk registrasi
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
      
      </Container>
    </div>
  );
}
