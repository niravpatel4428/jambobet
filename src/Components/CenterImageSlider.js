import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dashboardimg from "../images/dashboardimg.png";
import dashboardimg2 from "../images/dashboardimg2.png";
import dashboardimg3 from "../images/dashboardimg3.png";
const imageslider = [
  { image: dashboardimg },
  { image: dashboardimg2 },
  { image: dashboardimg3 },
];
const CenterImageSlider = () => {
  const sliderRef = useRef();
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [],
  };
  const imageslider = [
    { image: dashboardimg },
    { image: dashboardimg2 },
    { image: dashboardimg3 },
  ];
  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {imageslider.map((imageslider, index) => (
          <div
            key={index}
            className="cursor-pointer md:rounded-md w-full !flex"
          >
            <img
              src={imageslider.image}
              alt="img"
              className="w-full md:rounded-md h-full"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CenterImageSlider;
