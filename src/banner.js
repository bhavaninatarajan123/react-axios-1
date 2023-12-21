import Carousel from 'react-bootstrap/Carousel';


function Banner() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="download11.jpg" 
            alt="First slide" style={{ width:'100%',height:'60vh'}}
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="download22.jpg"
            alt="Second slide"style={{ width:'100%',height:'60vh'}} 
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="download33.jpg"
            alt="Third slide" style={{ width:'100%',height:'60vh'}} 
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Banner;