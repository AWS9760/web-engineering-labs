import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Products() {
  return (
    <section id="products" className="py-5">
      <Container className="py-lg-4">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <p className="pixel-eyebrow mb-2">✦ featured ✦</p>
            <h2 className="section-title mb-0">Best sellers this week</h2>
          </div>
          <Button variant="chrome" className="rounded-pill">
            View all products <i className="bi bi-arrow-right" />
          </Button>
        </div>

        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="holo-card h-100">
              <div className="product-art art-pink">
                <i className="bi bi-keyboard" />
              </div>
              <Card.Body className="d-flex flex-column">
                <span className="pixel-badge align-self-start mb-2">new</span>
                <Card.Title className="fw-bold">KeyForge K87 Mechanical</Card.Title>
                <Card.Text className="text-body-secondary small">
                  Tenkeyless layout, hot-swap switches.
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="price">Rs 12,500</span>
                  <Button variant="gel" size="sm" className="rounded-pill px-3">
                    <i className="bi bi-bag-plus me-1" /> Add
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="holo-card h-100">
              <div className="product-art art-blue">
                <i className="bi bi-mouse" />
              </div>
              <Card.Body className="d-flex flex-column">
                <span className="pixel-badge align-self-start mb-2">best seller</span>
                <Card.Title className="fw-bold">Glide Pro Wireless Mouse</Card.Title>
                <Card.Text className="text-body-secondary small">
                  26K DPI sensor, 70-hour battery.
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="price">Rs 6,800</span>
                  <Button variant="gel" size="sm" className="rounded-pill px-3">
                    <i className="bi bi-bag-plus me-1" /> Add
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="holo-card h-100">
              <div className="product-art art-lime">
                <i className="bi bi-headphones" />
              </div>
              <Card.Body className="d-flex flex-column">
                <span className="pixel-badge align-self-start mb-2">low stock</span>
                <Card.Title className="fw-bold">Studio One Headphones</Card.Title>
                <Card.Text className="text-body-secondary small">
                  Closed-back, detachable mic, 40mm drivers.
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="price">Rs 9,200</span>
                  <Button variant="gel" size="sm" className="rounded-pill px-3">
                    <i className="bi bi-bag-plus me-1" /> Add
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Products;
