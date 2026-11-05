import type { FormEvent } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

function Newsletter() {
  // No backend yet, so just stop the page from reloading
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  
  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="y2k-window newsletter">
          <div className="window-bar">
            <span>subscribe.exe</span>
            <span className="window-btns" aria-hidden="true">
              <i>_</i>
              <i>□</i>
              <i>×</i>
            </span>
          </div>

          <div className="newsletter-body p-4 p-lg-5">
            <Row className="align-items-center g-4">
              <Col lg={6}>
                <h2 className="section-title mb-2">
                  Get deals <span className="holo-text">before everyone else</span>
                </h2>
                <p className="text-body-secondary mb-0">
                  One email a week with new arrivals and member-only discounts.
                </p>
              </Col>
              <Col lg={6}>
                <Form onSubmit={handleSubmit}>
                  <InputGroup size="lg" className="y2k-input">
                    <Form.Control
                      type="email"
                      placeholder="you@example.com"
                      aria-label="Email address"
                    />
                    <Button variant="gel" type="submit">
                      Subscribe ✦
                    </Button>
                  </InputGroup>
                  <Form.Text className="text-body-secondary">No spam. Unsubscribe anytime.</Form.Text>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Newsletter;
