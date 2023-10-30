import React from "react";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";
import Carousel4 from "../assets/Carousel4.png";
import Carousel from "./CarouselComponent";

type Props = {};

function HomeContent({}: Props) {
  const slides = [
    { src: Carousel1.src, width: Carousel1.width, height: Carousel1.height },
    { src: Carousel2.src, width: Carousel2.width, height: Carousel2.height },
    { src: Carousel3.src, width: Carousel3.width, height: Carousel3.height },
    { src: Carousel4.src, width: Carousel4.width, height: Carousel4.height },
  ];

  return (
    <div className='max-w-screen-md m-auto pt-11 '>
      <Carousel slides={slides} />
    </div>
  );
}

export default HomeContent;
