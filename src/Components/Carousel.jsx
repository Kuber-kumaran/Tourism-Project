import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1524467128837-00f6644866d7?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRvdXJpc218ZW58MHx8MHx8fDA%3D ",
  },
  {
    url: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D ",
  },
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlYWNofGVufDB8fDB8fHww ",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length);

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0  : slide + 1);
  };

  return (
    <div className="max-w-[1240] mx-auto px-4 py-16 relative flex justify-center items-center ">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-20"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-20"
      />

      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className=" w-screen object-cover rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
