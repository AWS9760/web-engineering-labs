import { Container, Row, Col, Card } from "react-bootstrap";

function Features() {
  return (
    <section id="features" className="py-5">
      <Container className="py-lg-4">
        <div className="text-center mb-5">
          <p className="pixel-eyebrow mb-2">✧ why shopkit ✧</p>
          <h2 className="section-title">Shopping that just works</h2>
          <p className="text-body-secondary mx-auto section-intro">
            Everything you need to set up your desk, without the usual hassle.
          </p>
        </div>

        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Card className="bubble-card h-100">
              <Card.Body className="p-4">
                <div className="orb orb-pink mb-3">
                  <i className="bi bi-truck" />
                </div>
                <Card.Title className="fw-bold">Fast delivery</Card.Title>
                <Card.Text className="text-body-secondary">
                  Nationwide shipping, usually at your door within 48 hours.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bubble-card h-100">
              <Card.Body className="p-4">
                <div className="orb orb-blue mb-3">
                  <i className="bi bi-cash-coin" />
                </div>
                <Card.Title className="fw-bold">Cash on delivery</Card.Title>
                <Card.Text className="text-body-secondary">
                  Pay when your order arrives. Cards and wallets work too.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bubble-card h-100">
              <Card.Body className="p-4">
                <div className="orb orb-lime mb-3">
                  <i className="bi bi-arrow-repeat" />
                </div>
                <Card.Title className="fw-bold">7-day returns</Card.Title>
                <Card.Text className="text-body-secondary">
                  Not happy? Send it back within a week, no questions asked.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bubble-card h-100">
              <Card.Body className="p-4">
                <div className="orb orb-lilac mb-3">
                  <i className="bi bi-shield-check" />
                </div>
                <Card.Title className="fw-bold">1-year warranty</Card.Title>
                <Card.Text className="text-body-secondary">
                  Every product is covered against defects for a full year.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
