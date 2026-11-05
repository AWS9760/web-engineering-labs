import { Container, Row, Col, Button, Card, ProgressBar, Stack } from "react-bootstrap";

function Hero() {
  const support =
    "Mechanical keyboards, precise mice and studio headphones, picked for students and developers. Delivered anywhere in Pakistan.";

  return (
    <section id="home" className="hero position-relative py-5">
      {/* decorative sparkles */}
      <span className="sparkle s1" aria-hidden="true">✦</span>
      <span className="sparkle s2" aria-hidden="true">✧</span>
      <span className="sparkle s3" aria-hidden="true">✦</span>
      <span className="sparkle s4" aria-hidden="true">✧</span>

      <Container className="py-lg-5 position-relative">
        <Row className="align-items-center gy-5 gx-4">
          <Col lg={6}>
            <span className="pixel-tag mb-3">✦ new drop // winter 2026 ✦</span>

            <h1 className="hero-title mb-3">
              Gear up for your next <span className="holo-text">big build.</span>
            </h1>
            <p className="lead text-body-secondary mb-4">{support}</p>

            <Stack direction="horizontal" gap={3} className="flex-wrap">
              <Button variant="gel" size="lg" href="#products" className="rounded-pill px-4">
                Shop now <i className="bi bi-arrow-right ms-1" />
              </Button>
              <Button variant="chrome" size="lg" href="#features" className="rounded-pill px-4">
                Why ShopKit?
              </Button>
            </Stack>

            <Stack direction="horizontal" gap={4} className="mt-5 flex-wrap">
              <div>
                <div className="stat-num">2,400+</div>
                <div className="stat-label">orders shipped</div>
              </div>
              <div>
                <div className="stat-num">4.8/5</div>
                <div className="stat-label">avg rating</div>
              </div>
              <div>
                <div className="stat-num">48h</div>
                <div className="stat-label">delivery</div>
              </div>
            </Stack>
          </Col>

          <Col lg={{ span: 5, offset: 1 }}>
            {/* A retro OS window holding the deal of the day */}
            <Card className="y2k-window">
              <div className="window-bar">
                <span>deal_of_the_day.exe</span>
                <span className="window-btns" aria-hidden="true">
                  <i>_</i>
                  <i>□</i>
                  <i>×</i>
                </span>
              </div>

              <div className="deal-art">
                <div className="cd-disc" aria-hidden="true" />
                <i className="bi bi-keyboard deal-icon" />
              </div>

              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="pixel-badge">deal of the day</span>
                  <span className="small text-body-secondary">ends in 06:42:10</span>
                </div>
                <Card.Title className="fs-4 fw-bold">KeyForge K87 Mechanical</Card.Title>
                <Card.Text className="text-body-secondary">
                  Hot-swappable switches, white backlight, aluminium top plate.
                </Card.Text>
                <div className="d-flex align-items-baseline gap-2 mb-3">
                  <span className="fs-3 fw-bold">Rs 10,625</span>
                  <span className="text-decoration-line-through text-body-secondary">Rs 12,500</span>
                </div>
                <ProgressBar now={68} className="holo-progress mb-1" />
                <div className="small text-body-secondary">68% claimed</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
