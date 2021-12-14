import React from 'react';
import { Carousel, Figure, Row } from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const HomePage = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fastrack.in/wps/wcm/connect/fastrack/bb79a0e0-8a12-4ab0-babe-7b9d3e48be88/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-bb79a0e0-8a12-4ab0-babe-7b9d3e48be88-desktop-nPAWzlP&impolicy=pqlow"
            alt="First slide" height="400px"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fastrack.in/wps/wcm/connect/fastrack/7f99d6c0-d106-4ed3-a430-8521d4955652/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-7f99d6c0-d106-4ed3-a430-8521d4955652-desktop-nRCiGee&impolicy=pqlow"
            alt="Second slide" height="400px"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fastrack.in/wps/wcm/connect/fastrack/20f44f9f-a61a-47f5-8cc5-98d17a11bb24/desktop/1920-X-600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-20f44f9f-a61a-47f5-8cc5-98d17a11bb24-desktop-nP1hdm-&impolicy=pqlow"
            alt="Third slide" height="400px"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fastrack.in/wps/wcm/connect/fastrack/9265c319-279e-49e2-8625-d36d58c37ca6/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-9265c319-279e-49e2-8625-d36d58c37ca6-desktop-nSvRbGb&impolicy=pqlow"
            alt="Third slide" height="400px"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="text-center pt-3 text-black">
        <h3>FASTRACK ESSENTIALS</h3>
        <OwlCarousel className="owl-theme text-center" nav>
          <Figure>
            <Figure.Image

              alt="171x180"
              src="https://www.fastrack.in/wps/wcm/connect/fastrack/3156c817-5671-4edf-b846-126830b1152a/essential_6210SM03.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-3156c817-5671-4edf-b846-126830b1152a-n4QBn-5"
            />
            <Figure.Caption className="text-black fw-bold">
              GIRLS WATCHES
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image

              alt="171x180"
              src="https://www.fastrack.in/wps/wcm/connect/fastrack/e158ebd3-893b-40c3-a139-ef745cdfc26b/essential_6180SL01.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-e158ebd3-893b-40c3-a139-ef745cdfc26b-n39dmuN"
            />
            <Figure.Caption className="text-black fw-bold">
              BOYS WATCHES
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image

              alt="171x180"
              src="https://www.fastrack.in/wps/wcm/connect/fastrack/efc2dbd8-3e9d-4803-8c44-72c52b215fbc/essential_SWD90066PP02.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-efc2dbd8-3e9d-4803-8c44-72c52b215fbc-n33nR.N"
            />
            <Figure.Caption className="text-black fw-bold">
              SMART BRAND
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image

              alt="171x180"
              src="https://www.fastrack.in/wps/wcm/connect/fastrack/967e27d1-b298-4a82-9932-c9cfcf720af2/teeslogo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-967e27d1-b298-4a82-9932-c9cfcf720af2-nc4ITri"
            />
            <Figure.Caption className="text-black fw-bold">
              TEES WATCHES
            </Figure.Caption>
          </Figure>
        </OwlCarousel>
      </div>

      <div>
        <video src="https://www.fastrack.in/wps/wcm/connect/fastrack/b1ae772f-6d85-4bdd-99e2-2044bc2d361e/Giftcard1920x600.mp4?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-b1ae772f-6d85-4bdd-99e2-2044bc2d361e-nM1KyZ-" controls></video>
      </div>

      <div className="text-center text-black pt-3 pb-3">
        <h3>TRENDING</h3>
        <Row md={3} className="g-3 mx-auto">
          <picture>
            <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/3be2ce43-768f-4a12-83c6-b1a008759b6a/Tees_offer+banner.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-3be2ce43-768f-4a12-83c6-b1a008759b6a-nSuvwNb" className="img-fluid img-thumbnail" alt="..." />
          </picture>
          <picture>
            <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/fa9b2a68-1f85-4f2a-8bcf-19202c2ea8ef/1080x1080_1.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-fa9b2a68-1f85-4f2a-8bcf-19202c2ea8ef-nSuvJsg" className="img-fluid img-thumbnail" alt="..." />
          </picture>
          <picture>
            <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/cdf686d2-1a27-4fb0-a8fc-a39f8d4ff446/Tees+Arcade.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-cdf686d2-1a27-4fb0-a8fc-a39f8d4ff446-np3p1lm" className="img-fluid img-thumbnail" alt="..." />
          </picture>
        </Row>
      </div>

    </div>

  );
};

export default HomePage;