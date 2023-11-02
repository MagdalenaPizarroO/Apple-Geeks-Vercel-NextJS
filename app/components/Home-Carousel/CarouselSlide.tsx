import Image from "next/legacy/image";
import { Slide } from "./CarouselComponent";

interface Props {
  slide: Slide;
}

const CarouselSlide: React.FC<Props> = ({ slide }) => {
  return (
    <div key={slide.id} style={{ width: `${slide.width}px`, height: `${slide.height}px` }}>
      <Image
        src={slide.src}
        alt={`carousel-${slide.id}`}
        width={slide.width}
        height={slide.height}
        layout='fixed'
        priority
      />
      <div className='relative bottom-1/2 left-0 right-0 w-3/5 mx-auto text-center items-center '>
        <h6 className='p-2 my-3 text-white text-sm bg-black/[.3] font-semibold'>{slide.title}</h6>
        <p className='p-2 text-white text-sm bg-black/[.3] font-medium'>{slide.subtitle}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
