import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center">
          <Col md={6}>
            <h5>Follow Us</h5>
            <Link href="https://www.youtube.com/@FlyFishing50States" target="_blank" className="text-light me-3">
              YouTube
            </Link>
          </Col>
          <Col md={6}>
            <h5>Our Sponsors</h5>
            <div className="d-flex justify-content-center">
              <img src="/assets/sponsor1.png" alt="Sponsor 1" className="mx-2" width="80" />
              <img src="/assets/sponsor2.png" alt="Sponsor 2" className="mx-2" width="80" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
