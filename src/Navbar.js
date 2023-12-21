import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navbar12() {
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark" style={{ marginBottom:'30px'}}>
        <Container>
          <Navbar.Brand href="#home">CINIMA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#api">banner</Nav.Link>
            <Nav.Link href="#features">carosal</Nav.Link>
            <Nav.Link href="#pricing">card</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default Navbar12;