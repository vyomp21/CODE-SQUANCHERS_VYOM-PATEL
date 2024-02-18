import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

const Slider = (props) => {
  return (
    <Carousel fade data-bs-theme="dark">
      {props.start.map((item, index) => (
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100 carousel-image"
            src={item}
            alt={`slide-${index}`}
            style={{ objectFit: 'contain', height: '500px'}}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
