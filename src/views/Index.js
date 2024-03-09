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
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  const handleGetHotel = () => {
    navigate('/homenet-page');
  }
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <NucleoIcons />
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
                  Product Digicube{" "}
                  <span className="text-info">yang cocok dengan bisnis anda</span>
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
                      src={require("assets/img/homenet.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Homenet Apps</h4>
                        <span>Untuk RT / RW Net</span>
                        <hr className="line-warning" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Multi Payment Methode</ListGroupItem>
                        <ListGroupItem>Monitoring Feature</ListGroupItem>
                        <ListGroupItem>Auto Isolir Client</ListGroupItem>
                        <ListGroupItem>Free {`(Tanpa Biaya Langganan)`}</ListGroupItem>
                        <ListGroupItem>Comission Fee / Transaksi</ListGroupItem>
                        <ListGroupItem>Layanan Iklan Gratis</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="warning" onClick={handleGetHotel}>
                      Get Plan
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
                      src={require("assets/img/ispPlus.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">ISP Plus Apps</h4>
                        <span>Untuk Internet Service Provider</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Multy Payment Methode</ListGroupItem>
                        <ListGroupItem>Monitoring Feature</ListGroupItem>
                        <ListGroupItem>Auto Isolir Client</ListGroupItem>
                        <ListGroupItem>Comission Fee</ListGroupItem>
                        <ListGroupItem>Layanan Iklan Gratis</ListGroupItem>
                        <ListGroupItem>Aplikasi Client {`(Broadband)`}</ListGroupItem>
                        <ListGroupItem>Free 3 Custom Feature</ListGroupItem>
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
                      src={require("assets/img/hotel.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Hotel Service Apps</h4>
                        <span>Untuk Perhotelan</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Tablet Views</ListGroupItem>
                        <ListGroupItem>Visitor & Outlet App</ListGroupItem>
                        <ListGroupItem>Outlet Product Display</ListGroupItem>
                        <ListGroupItem>Order Product Outlet</ListGroupItem>
                        <ListGroupItem>Telepon Outlet</ListGroupItem>
                        <ListGroupItem>Telepon antar kamar</ListGroupItem>
                        <ListGroupItem>Real Time Chat outlet</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info" >
                      Get Plan
                    </Button>
                  </CardFooter>
                </Card>
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
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/automatic.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Maintainly</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">573 K</CardTitle>
                        <p className="card-category text-white">
                          End Users
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">12.000+</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Bisnis Mudah dengan Automatisasi</h3>
                  <p>
                    Software yang kami kembangkan dengan research pada banyak mitra kami.
                    sehingga kami bisa menyediakan setiap automatisasi pada bisnis proses yang terjadi pada bisnis partner kami.
                    setiap invasi yang kami tuangkan adalah apa yang bisnis anda butuhkan.
                    sehingga anda hanya perlu memikirkan pemasaran dan pengembangan bisnis anda
                    tanpa takut ada yang terlewatkan pada proses bisnis anda.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Optimalisasi System dan automatisasi</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Mudah untuk dioperasikan dan diimplementasikan</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Team Support yang super friendly sedia selalu 7/24</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
          {/* <Basics /> */}
          {/* <Navbars /> */}
          {/* <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JavaScript />
          <Signup />
          <Examples /> */}
          <Download />
        </div>
        <Footer />
      </div>
    </>
  );
}
