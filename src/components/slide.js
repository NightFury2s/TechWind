import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Slider() {
  const slides = [
    {
      url: "https://www.linkpicture.com/q/banner_1_2.jpg",
    },
    {
      url: "https://www.linkpicture.com/q/banner_2_1.jpg",
    },
    {
      url: "https://www.linkpicture.com/q/banner_3_1.jpg",
    },
    {
      url: "https://www.linkpicture.com/q/banner_4_1.jpg",
    },
    {
      url: "https://www.linkpicture.com/q/banner_5_2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  const handleMouseEnter = () => {
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
  };

  return (
    <div className="relative z-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <style>
        {`
        @media (min-width: 1024px) {
          .desktop-slider {
            height: 770px;
          }
        }

        .slider-enter {
          animation: slide-enter 1s ease-in-out forwards;
        }

        .slider-exit {
          animation: slide-exit 1s ease-in-out forwards;
        }

        @keyframes slide-enter {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-exit {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }
        `}
      </style>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-64 md:h-128 bg-center bg-cover transition-all duration-1000 ease-in-out desktop-slider animate-slider-enter"
      ></div>
      {/* Left Arrow */}
      {showArrows && (
        <div
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white cursor-pointer z-10"
          onClick={prevSlide}
        >
          <AiOutlineLeft size={30} />
        </div>
      )}
      {/* Right Arrow */}
      {showArrows && (
        <div
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white cursor-pointer z-10"
          onClick={nextSlide}
        >
          <AiOutlineRight size={30} />
        </div>
      )}
    </div>
  );
}

export default Slider;
