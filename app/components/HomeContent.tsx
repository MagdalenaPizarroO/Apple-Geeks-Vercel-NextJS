import React from "react";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";
import Carousel4 from "../assets/Carousel4.png";
import Image from "next/image";

type Props = {};

function HomeContent({}: Props) {
  return (
    <div style={{ width: "800px", margin: "0 auto" }}>
      <div className='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <Image src={Carousel1} className='w-full' alt='Home Carousel Image 1' />
        </div>
        <div id='item2' className='carousel-item w-full' style={{ width: "800px", margin: "0 auto" }}>
          <Image src={Carousel2} className='w-full' alt='Home Carousel Image 2' />
        </div>
        <div id='item3' className='carousel-item w-full' style={{ width: "800px", margin: "0 auto" }}>
          <Image src={Carousel3} className='w-full' alt='Home Carousel Image 3' />
        </div>
        <div id='item4' className='carousel-item w-full' style={{ width: "800px", margin: "0 auto" }}>
          <Image src={Carousel4} className='w-full' alt='Home Carousel Image 4' />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </div>
  );
}

export default HomeContent;
