import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer pt-5 pb-4 mt-4">
      <Container>
        <Row className="g-4 mb-4">
          <Col lg={5}>
            <div className="brand d-flex align-items-center gap-2 mb-2">
              <span className="brand-orb" aria-hidden="true">✦</span>
              ShopKit
            </div>
            <p className="footer-about">
              Desk gear for people who build things. Based in Pakistan, shipping nationwide.
            </p>
            <span className="pixel-tag footer-tag">✦ best viewed in any browser ✦</span>
          </Col>

          <Col xs={6} lg={{ span: 2, offset: 1 }}>
            <h6 className="footer-head">Shop</h6>
            <Nav className="flex-column">
              <Nav.Link href="#products" className="px-0">Keyboards</Nav.Link>
              <Nav.Link href="#products" className="px-0">Mice</Nav.Link>
              <Nav.Link href="#products" className="px-0">Headphones</Nav.Link>
            </Nav>
          </Col>

          <Col xs={6} lg={2}>
            <h6 className="footer-head">Company</h6>
            <Nav className="flex-column">
              <Nav.Link href="#features" className="px-0">About us</Nav.Link>
              <Nav.Link href="#contact" className="px-0">Contact</Nav.Link>
              <Nav.Link href="#" className="px-0">Careers</Nav.Link>
            </Nav>
          </Col>

          <Col xs={6} lg={2}>
            <h6 className="footer-head">Follow</h6>
            <Nav className="gap-3">
              <Nav.Link href="#" className="px-0 fs-5" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </Nav.Link>
              <Nav.Link href="#" className="px-0 fs-5" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </Nav.Link>
              <Nav.Link href="#" className="px-0 fs-5" aria-label="GitHub">
                <i className="bi bi-github" />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <div className="footer-bottom d-flex flex-wrap justify-content-between gap-2 pt-4 small">
          <span>© {year} ShopKit. All rights reserved.</span>
          <Nav className="gap-3">
            <Nav.Link href="#" className="p-0">Privacy</Nav.Link>
            <Nav.Link href="#" className="p-0">Terms</Nav.Link>
            <Nav.Link href="#" className="p-0">Shipping policy</Nav.Link>
          </Nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
