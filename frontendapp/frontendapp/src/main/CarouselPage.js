import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import carimg1 from '../images/carimg1.jpg';
import repare from '../images/carrepair.jpg';
import exhaust from '../images/bikeexhaust.jpg';

function Carouselpage() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carimg1}
          alt="First slide"
        />
        <Carousel.Caption style={{ color: "white" }}> 
          <h3>All Vehicle Types Available</h3>
          <p style={{ margin: '18px 0' }}></p>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={repare}
          alt="Second slide"
        />
        <Carousel.Caption style={{ color: "white" }}> 
          <h3>Extensive Spare Parts Collection</h3>
          <p style={{ margin: '18px 0' }}></p>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exhaust}
          alt="Third slide"
        />
        <Carousel.Caption style={{ color: "white" }}> 
          <h3>Exclusive Vehicle Accessories</h3>
          <p style={{ margin: '18px 0' }}></p>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselpage;
