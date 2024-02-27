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
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import { useNavigate } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar";

export default function HomenetPage() {
    const navigate = useNavigate();
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Homenet App <br />
                  <span className="text-white">Your Profesional Billing system</span>
                </h1>
                <p className="text-white mb-3">
                  Homenet App adalah aplikasi billing system untuk pelaku usaha UMKM
                  dibidang internet sharing provider {`(RT / RW Net)`}.
                  aplikasi yang dilengkapi system monitoring, auto billing, auto isolir dan 
                  Payment Point Online Banking dengan methode pembayaran yang lengkap membuat setiap proses pada bisnis anda lebih mobile dan flexible.

                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    Daftarkan bisnis anda Sekarang
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                {/* <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div> */}
              </Col>
              <Col  md="5">
                <img
                  alt="..."
                  className="img-fluid"
                 
                  src={require("assets/img/homenetBanner.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
         
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Benefit terbaik untuk anda</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Commission Fee</h4>
                      <hr className="line-primary" />
                      <p>
                        Anda berhak mendapat komisi Rp 500 setiap transaksi pembayaran internet yang dilakukan oleh client anda.
                        dan anda berhak mendapat komisi Rp 250 - Rp 500 setiap transaksi PPOB {`(Token Listrik, PLN Prabayar, Pulsa, Kuota, BPJS, PDAM, Angsuran Kredit, Voucher Game, dll)`} yang dilakukan oleh client anda 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Multiple Automation</h4>
                      <hr className="line-warning" />
                      <p>
                        Aplikasi telah dilengkap berbagai feature automatisasi.
                        sehingga anda dapat lebih mudah mengontrol setiap bisnis proses yang terjadi pada bisnis anda,
                        seperti Auto Billing System, Auto Biller Notifications, Failure Alert Notifications, 
                         Auto Alert Technical Team, dan banyak feature automatis lainnya
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Client Manageble</h4>
                      <hr className="line-success" />
                      <p>
                        Anda mendapat control penuh atas client anda,
                        tanpa harus terbatasi oleh layanan yang anda buka untuk client anda,
                        tidak perlu khawatir jika anda menerapkan system FTTH dan Hotspot didalam perangkat anda.
                        anda dapat mengintegrasikan nya kapanpun dan dimanapun anda mau
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col>
                <img
                  alt="..."
                  className="img-fluid "
                  src={require("assets/img/internetFlow.png")}
                />
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Internet Auto Billing Flow</h3>
                  <p>
                    Pada Flow Internet Auto Billing anda akan mendapatkan benefit anda berupa total income dati pembayaran internet client + komisi Rp 500 / Transaksi.
                    dan kami sebagai penyedia jasa layanan akan menerima fee admin sebesar Rp 1.500 / Transaksi sebagai biaya layanan dan mintenance aplikasi.
                    biaya admin dari kami dan komisi anda yang jika di totalkan adalah Rp 2.000, Akan dibebankan pada client selaku end user pada aplikasi.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="row-grid justify-content-between">
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>PPOB Flow</h3>
                  <p>
                    Pada Flow PPOB anda akan mendapatkan benefit anda berupa Comission Fee Sebesar Rp 250 sampai Rp 500 / Transaksi.
                    dan kami sebagai penyedia jasa layanan akan menerima fee Admin sebesar Rp 750 / Transaksi sebagai biaya layanan dan maintenance aplikasi.
                  </p>
                </div>
              </Col>
              <Col>
                <img
                  alt="..."
                  className="img-fluid "
                  src={require("assets/img/ppobFlow.png")}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Total Internet Sharing Provider {`(RT / RW Net)`}</h5>
                    <CardTitle tag="h2">Total Mitra Kami Monthly Updated</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the coin{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Light Coin</h4>
                        <span>Plan</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>50 messages</ListGroupItem>
                        <ListGroupItem>100 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Dark Coin</h4>
                        <span>Plan</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>150 messages</ListGroupItem>
                        <ListGroupItem>1000 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Bright Coin</h4>
                        <span>Plan</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>350 messages</ListGroupItem>
                        <ListGroupItem>10K emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
