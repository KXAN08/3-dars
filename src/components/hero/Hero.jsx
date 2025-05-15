import React, { useState } from "react";
import { heroSlides } from "../../static";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      className="relative h-[500px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroSlides[current].image})` }}
    >

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-[1100px] mx-auto h-full flex flex-col justify-center px-6 md:px-12 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{heroSlides[current].title}</h2>
        <p className="text-lg mb-6 max-w-lg">{heroSlides[current].description}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(heroSlides[current].shopLink)}
            className="underline text-white hover:text-gray-200 transition"
          >
            Shop all phone deals
          </button>
          <button
            onClick={() => navigate(heroSlides[current].buyLink)}
            className="bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-200 transition"
          >
            Buy now
          </button>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <ChevronLeftIcon className="w-8 h-8 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <ChevronRightIcon className="w-8 h-8 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 ${index === current ? "bg-white" : "bg-white/30"} transition-all`}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-4 right-6">
        <PauseIcon className="w-5 h-5 text-white" />
      </div>
    </section>
  );
};

export default Hero;
