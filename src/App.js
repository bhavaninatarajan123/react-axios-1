// import logo from './logo.svg';
// import './App.css';
import Navbar12 from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Api from './Api';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Caros from './Caros';
import Banner from './banner';

import App123 from './Api1234';


function App() {
  return (
    <div className="App">
      <Container>
        <Row className='row'>
          <Col className="col">
          <Navbar12/>
          <Caros/>
          <Banner />
          <App123/>
            {/* <Api/> */}
          </Col>
        </Row>
      </Container>
      
      {/* <Home/>
      */}
    </div>
  );
}

export default App;
