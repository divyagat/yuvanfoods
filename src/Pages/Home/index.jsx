import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import Button from "@mui/material/Button";
import { GoArrowRight } from "react-icons/go";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  const productImages = [
    "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
    "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
    "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
    "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
    "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
  ];

  return (
    <>
      <HomeBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} alt="Dry Petha" className="cursor w-100" />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center mb-3">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light1 text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <GoArrowRight />
                </Button>
              </div>

              <div className="product_row w-100">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000 }}
                  spaceBetween={20}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                  }}
                >
                  {productImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="item productItem">
                        <div className="imgWrapper">
                          <img src={img} alt={`Product ${idx}`} className="w-100" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
