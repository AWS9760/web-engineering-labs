import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";

// Named SiteNavbar so it doesn't clash with React Bootstrap's own <Navbar>
function SiteNavbar() {
  return (
    <Navbar expand="lg" sticky="top" className="y2k-nav py-3">
      <Container>
        <Navbar.Brand href="#home" className="brand d-flex align-items-center gap-2">
          <span className="brand-orb" aria-hidden="true">✦</span>
          ShopKit
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-2 order-lg-last">
          <ThemeToggle />
          <Navbar.Toggle aria-controls="main-nav" />
        </div>

        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-lg-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Why ShopKit</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Button variant="gel" className="rounded-pill px-3 me-lg-2 mt-3 mt-lg-0">
            <i className="bi bi-bag-heart me-2" />
            Cart
            <Badge bg="light" text="dark" pill className="ms-2">
              0
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
