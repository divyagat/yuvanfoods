
import React from "react";

import Button from "@mui/material/Button";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
const ProductItem = () => {
    const productData = [
        {
            img: "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
            title: "Kesar Dry Petha",
            subtitle: "Delicious sweet from Agra",
            rating: 4,
            inStock: true,
            originalPrice: "₹249",
            discountedPrice: "₹199",
            button: "Add to cart"
        },
        {
            img: "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
            title: "Angoori Petha",
            subtitle: "Soft and juicy treat",
            rating: 5,
            inStock: false,
            originalPrice: "₹249",
            discountedPrice: "₹199",
            button: "Add to cart"
        },
        {
            img: "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
            title: "Chocolate Petha",
            subtitle: "Sweet with a twist",
            rating: 3,
            inStock: true,
            originalPrice: "₹249",
            discountedPrice: "₹179",
            button: "Add to cart"
        },
        {
            img: "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
            title: "Paan Petha",
            subtitle: "Refreshing and unique",
            rating: 4,
            inStock: true,
            originalPrice: "₹249",
            discountedPrice: "₹189",
            button: "Add to cart"
        },
        {
            img: "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
            title: "Dry Fruit Petha",
            subtitle: "Rich in dry fruits",
            rating: 4,
            inStock: true,
            originalPrice: "₹249",
            discountedPrice: "₹209",
            button: "Add to cart"
        },
        {
            img: "https://www.delightfoods.com/cdn/shop/files/kesar_dry_petha_350g.jpg?v=1737692200&width=400",
            title: "Rose Petha",
            subtitle: "Floral delight",
            rating: 4,
            inStock: true,
            originalPrice: "₹249",
            discountedPrice: "₹199",
            button: "Add to cart"
        }
    ];

    return (
        <>
          
             <div className=" productRow">
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
                                    // pagination={{ clickable: true }}
                                    autoplay={{ delay: 1800 }}
                                    spaceBetween={20}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        576: { slidesPerView: 2 },
                                        768: { slidesPerView: 3 },
                                        992: { slidesPerView: 4 },
                                    }}
                                >
                                    {productData.map((item, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="item productItem">


                                                <div className="imgWrapper position-relative">
                                                    <img src={item.img} alt={`Product ${idx}`} className="w-100" />
                                                    <div className="actions">
                                                        <Button>
                                                            <TfiFullscreen />
                                                        </Button><br />
                                                        <Button><IoMdHeartEmpty style={{ fontsize: '20px' }} /></Button>
                                                    </div>
                                                    <span className="badge">28%</span>
                                                </div>


                                                <div className="productContent p-4">


                                                    <h5 className="title">{item.title}</h5>
                                                    <p className="subtitle">{item.subtitle}</p>
                                                    <div className="rating">
                                                        {[1, 2, 3, 4, 5].map((star) =>
                                                            star <= item.rating ? (
                                                                <StarIcon key={star} className="filledStar" />
                                                            ) : (
                                                                <StarBorderIcon key={star} className="emptyStar" />
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="stock">
                                                        {item.inStock ? (
                                                            <span className="inStock"><CheckCircleIcon /> In Stock</span>
                                                        ) : (
                                                            <span className="outOfStock"><CancelIcon /> Out of Stock</span>
                                                        )}
                                                    </div>
                                                    <div className="price">
                                                        {(idx >= 0 && idx <= 7) && item.originalPrice && item.discountedPrice ? (
                                                            <>
                                                                <span style={{ textDecoration: "line-through", color: "#888", marginRight: "8px" }}>
                                                                    {item.originalPrice}
                                                                </span>
                                                                <span style={{ color: "red", fontWeight: "bold" }}>
                                                                    {item.discountedPrice}
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <span style={{ fontWeight: "bold" }}>
                                                                {item.discountedPrice}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <Button
                                                        className="rounded-5 SlidBtn px-4 py-1 mt-4 "
                                                        style={{
                                                            backgroundColor: "white",
                                                            borderColor: "blue",
                                                            border: "1px solid blue",
                                                            color: "blue",
                                                            width: "160px",
                                                        }}
                                                    > {item.button}
                                                    </Button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                              <div className="col-md-9 productRow w-100">
                            <div className="d-flex align-items-center mb-3">
                                <div className="info ">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light1 text-sml mb-0">
                                        New Products with updated stocks
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
                                    // pagination={{ clickable: true }}
                                    autoplay={{ delay: 1800 }}
                                    spaceBetween={20}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        576: { slidesPerView: 2 },
                                        768: { slidesPerView: 3 },
                                        992: { slidesPerView: 4 },
                                    }}
                                >
                                    {productData.map((item, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="item productItem">


                                                <div className="imgWrapper position-relative">
                                                    <img src={item.img} alt={`Product ${idx}`} className="w-100" />
                                                    <div className="actions">
                                                        <Button>
                                                            <TfiFullscreen />
                                                        </Button><br />
                                                        <Button><IoMdHeartEmpty style={{ fontsize: '20px' }} /></Button>
                                                    </div>
                                                    <span className="badge">28%</span>
                                                </div>


                                                <div className="productContent p-4">


                                                    <h5 className="title">{item.title}</h5>
                                                    <p className="subtitle">{item.subtitle}</p>
                                                    <div className="rating">
                                                        {[1, 2, 3, 4, 5].map((star) =>
                                                            star <= item.rating ? (
                                                                <StarIcon key={star} className="filledStar" />
                                                            ) : (
                                                                <StarBorderIcon key={star} className="emptyStar" />
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="stock">
                                                        {item.inStock ? (
                                                            <span className="inStock"><CheckCircleIcon /> In Stock</span>
                                                        ) : (
                                                            <span className="outOfStock"><CancelIcon /> Out of Stock</span>
                                                        )}
                                                    </div>
                                                    <div className="price">
                                                        {(idx >= 0 && idx <= 7) && item.originalPrice && item.discountedPrice ? (
                                                            <>
                                                                <span style={{ textDecoration: "line-through", color: "#888", marginRight: "8px" }}>
                                                                    {item.originalPrice}
                                                                </span>
                                                                <span style={{ color: "red", fontWeight: "bold" }}>
                                                                    {item.discountedPrice}
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <span style={{ fontWeight: "bold" }}>
                                                                {item.discountedPrice}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <Button
                                                        className="rounded-5 SlidBtn px-4 py-1 mt-4 "
                                                        style={{
                                                            backgroundColor: "white",
                                                            borderColor: "blue",
                                                            border: "1px solid blue",
                                                            color: "blue",
                                                            width: "160px",

                                                        }}
                                                    > {item.button}
                                                    </Button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        </div>

        </>
    )
}

export default ProductItem