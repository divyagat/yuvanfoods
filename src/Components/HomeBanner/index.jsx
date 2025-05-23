import React from "react";
import Slider from "react-slick";

// Be sure to import these in your root or component-level styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        {[1, 2, 3].map((_, index) => (
          <div key={index}>
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h0a/haa/33279581913118/casio-fossil-web600_8--ek.jpg"
              alt={`Banner ${index + 1}`}
              className="w-100"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
