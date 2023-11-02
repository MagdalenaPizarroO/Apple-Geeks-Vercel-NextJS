import { AiOutlineMinus } from "react-icons/ai";
import { Slide } from "./CarouselComponent";

interface Props {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselButtons: React.FC<Props> = ({ slides, currentSlide, setCurrentSlide }) => {
  return (
    <div className='absolute bottom-0 text-4xl flex left-0 right-0 justify-center'>
      {slides.map((s, index) => (
        <div key={s.id} className={index === currentSlide ? "text-gray-950" : "text-gray-500"}>
          <button
            className=''
            onClick={() => {
              setCurrentSlide(index);
            }}
          >
            <AiOutlineMinus />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarouselButtons;
