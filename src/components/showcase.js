import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Showcase = () => {
  const products = [
    {
      id: 1,
      name: "Máy tính xách tay",
      image: "https://www.linkpicture.com/q/laptop.png",
    },
    {
      id: 2,
      name: "Màn hình",
      image: "https://www.linkpicture.com/q/monitor.png",
    },
    {
      id: 3,
      name: "Điện thoại",
      image: "https://www.linkpicture.com/q/phone_5.png",
    },
    {
      id: 4,
      name: "Máy tính xách tay",
      image: "https://www.linkpicture.com/q/laptop.png",
    },
    {
      id: 5,
      name: "Màn hình",
      image: "https://www.linkpicture.com/q/monitor.png",
    },
    {
      id: 6,
      name: "Điện thoại",
      image: "https://www.linkpicture.com/q/phone_5.png",
    },
  ];

  const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 5,
    slidesToScroll: 1,
    ref: sliderRef,
    swipe: false,      // Disable swipe
    draggable: false,  // Disable dragging
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="font-link">
      <div className="mt-5 max-w-full mx-auto text-center">
        <h2 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 text-[#202020]">
          KHÁM PHÁ SẢN PHẨM CỦA CHÚNG TÔI
        </h2>
      </div>

      <div className="parentDiv p-2 m-4 relative">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                className="w-[200px] h-[200px] object-cover p-2 mx-auto"
                src={product.image}
                alt={product.name}
              />
              <div>
                <button className="font-bold text-xl text-[#202020]">
                  {product.name}
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-red-800 p-4 cursor-pointer"
          onClick={goToPrev}
        >
          <AiOutlineLeft size={40} />
        </div>
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-red-800 p-4 cursor-pointer"
          onClick={goToNext}
        >
          <AiOutlineRight size={40} />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
