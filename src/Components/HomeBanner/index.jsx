import React from "react";
import Slider from "react-slick";
const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="homeBannerSection">

                <Slider {...settings}>
                    <div >
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h0a/haa/33279581913118/casio-fossil-web600_8--ek.jpg" alt=""
                            className="w-100" />
                    </div>
                    <div>
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h0a/haa/33279581913118/casio-fossil-web600_8--ek.jpg" alt=""
                            className="w-100" />
                    </div>
                    <div>
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h0a/haa/33279581913118/casio-fossil-web600_8--ek.jpg" alt=""
                            className="w-100" />
                    </div>

                </Slider>
            </div>
        </>
    )
}
export default HomeBanner;