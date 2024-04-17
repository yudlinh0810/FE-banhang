import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';
import './style.css';

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidersToShow: 1,
    slidersToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return (
          <Image
            key={image}
            src={image}
            alt={`slider ${image}`}
            preview={false}
            height={'274px'}
            width={'100%'}
            className='slider_image'
          />
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
