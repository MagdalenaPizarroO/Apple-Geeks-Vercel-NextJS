"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Slide {
  src: string;
  width: number;
  height: number;
}

interface Props {
  slides: Slide[];
}

const Carousel: React.FC<Props> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition ease-out duration-300'
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => {
          return (
            <div key={index} style={{ width: `${s.width}px`, height: `${s.height}px` }}>
              <Image src={s.src} alt={`carousel-${index}`} layout='fill' objectFit='cover' />
            </div>
          );
        })}
      </div>

      <div className='absolute top-0 h-full w-full justify-between flex px-8 text-gray-400 text-4xl'>
        <button onClick={previousSlide}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
