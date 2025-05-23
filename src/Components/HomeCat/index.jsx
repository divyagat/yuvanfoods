import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

const slidesData = [
    { id: 1, title: "Slide 1", image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png" },
    { id: 2, title: "Slide 2", image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png" },
    { id: 3, title: "Slide 3", image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-1.png" },
    { id: 4, title: "Slide 4", image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-2.png" },
    { id: 5, title: "Slide 5", image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-4.png" },
    { id: 6, title: "Slide 6", image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-5.png" },
    { id: 7, title: "Slide 7", image: "/images/slide7.jpg" },
    { id: 8, title: "Slide 8", image: "/images/slide8.jpg" },
    { id: 9, title: "Slide 9", image: "/images/slide9.jpg" },
    { id: 10, title: "Slide 10", image: "/images/slide10.jpg" },
    { id: 11, title: "Slide 11", image: "/images/slide11.jpg" },
    { id: 12, title: "Slide 12", image: "/images/slide12.jpg" },
    { id: 13, title: "Slide 13", image: "/images/slide13.jpg" },
    { id: 14, title: "Slide 14", image: "/images/slide14.jpg" },
    { id: 15, title: "Slide 15", image: "/images/slide15.jpg" },
    { id: 16, title: "Slide 16", image: "/images/slide16.jpg" },
    { id: 17, title: "Slide 17", image: "/images/slide17.jpg" },
    { id: 18, title: "Slide 18", image: "/images/slide18.jpg" },
    { id: 19, title: "Slide 19", image: "/images/slide19.jpg" },
    { id: 20, title: "Slide 20", image: "/images/slide20.jpg" },
];

const HomeCat = () => {
    return (
        <>
            <section className="homeCat">
                <div className="container">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={20}
                        slidesPerView={10}
                        slidesPerGroup={10}
                        loop={true}
                    >
                        {slidesData.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="card">
                                    <img src={slide.image} alt={slide.title} className="card-img" />
                                    <h4 className="card-title">{slide.title}</h4>
                                    <h5 className="card-subtitle">{slide.subtitle}</h5>
                                    <p className="card-desc">{slide.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* CSS Styles */}
            <style jsx>{`
                .card {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    text-align: center;
                    background: #fff;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                    padding: 12px;
                    height: 260px;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                }
                .card-img {
                    width: 100%;
                    height: 100px;
                    object-fit: contain;
                    border-radius: 4px;
                    margin-bottom: 8px;
                }
                .card-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: #222;
                    margin: 4px 0;
                }
                .card-subtitle {
                    font-size: 13px;
                    font-weight: 500;
                    color: #777;
                    margin: 2px 0;
                }
                .card-desc {
                    font-size: 12px;
                    color: #666;
                    margin-top: 4px;
                }
            `}</style>
        </>
    );
};

export default HomeCat;
