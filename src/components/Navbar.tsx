import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Colorado from '../pages/state/colorado';

const NavbarComponent = ({ initialVisitedStates = ['Colorado'] }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Fly Fishing 50 States</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/states">Explore All States</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="success">
                Visited States
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {initialVisitedStates.length > 0 ? (
                  initialVisitedStates.map((state) => (
                    <Dropdown.Item key={state} href={`/state/${state.toLowerCase().replace(/\s+/g, '-')}`}>
                      {state}
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item disabled>No states visited yet</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
