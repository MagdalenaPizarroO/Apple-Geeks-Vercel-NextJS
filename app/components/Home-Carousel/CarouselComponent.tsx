"use client";
import { useCallback, useEffect, useState } from "react";
import CarouselSlide from "./CarouselSlide";
import CarouselButtons from "./CarouselButtons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface Slide {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  subtitle: string;
}

interface Props {
  slides: Slide[];
}

const Carousel: React.FC<Props> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [setCurrent, slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, current]);

  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition ease-out duration-300'
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => (
          <CarouselSlide key={s.id} slide={s} />
        ))}
      </div>
      <div className='absolute top-0 h-full w-full justify-between flex px-8 text-gray-400 text-4xl'>
        <button onClick={previousSlide}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
      <CarouselButtons slides={slides} currentSlide={current} setCurrentSlide={setCurrent} />
    </div>
  );
};

export default Carousel;
