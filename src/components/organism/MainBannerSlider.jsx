// components/MainBannerSlider.js
import React from 'react';
import Slider from 'react-slick'; // Replace with your chosen library
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainBannerSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:500,
  };

  const bannerImages = [
    'images/bannerimage1.jpg',
    'images/bannerimage2.jpg',
    'images/bannerimage3.jpg',
    // Add more image URLs
  ];

  return (
    <Slider {...sliderSettings}>
      {bannerImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default MainBannerSlider;
