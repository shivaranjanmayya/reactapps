import React from 'react';
import { Carousel} from 'react-bootstrap';
const HomePage = () => {
    return (
        <div>
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
            alt="First slide" height="400px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Under development stage</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
            alt="Second slide" height="400px"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Under development stage</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
            alt="Third slide" height="400px"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Under development stage</p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>

      <div className="content">
            <h1>Under Construction</h1>
          
      </div>

      </div>
      
    );
};

export default HomePage;