import React from "react";
import Carousel from "./Home-Carousel/CarouselComponent";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";
import Carousel4 from "../assets/Carousel4.png";

type Props = {};

function HomeContent({}: Props) {
  const slides = [
    {
      id: crypto.randomUUID(),
      src: Carousel1.src,
      width: Carousel1.width,
      height: Carousel1.height,
      title: "SERVICIO TÉCNICO EXPERTO PARA DISPOSITIVOS APPLE",
      subtitle: "Reparación rápida para tus dispositivos",
    },
    {
      id: crypto.randomUUID(),
      src: Carousel2.src,
      width: Carousel2.width,
      height: Carousel2.height,
      title: "ENCUENTRA EL DISPOSITIVO APPLE PERFECTO",
      subtitle: "Ofertas irresistibles en productos Apple",
    },
    {
      id: crypto.randomUUID(),
      src: Carousel3.src,
      width: Carousel3.width,
      height: Carousel3.height,
      title: "SOLUCIONES TÉCNICAS PARA TUS DISPOSITIVOS APPLE",
      subtitle: "Expertos en servicio técnico Apple",
    },
    {
      id: crypto.randomUUID(),
      src: Carousel4.src,
      width: Carousel4.width,
      height: Carousel4.height,
      title: "AMPLIA SELECCIÓN DE PRODUCTOS APPLE",
      subtitle: "Compra y repara: todo en un solo lugar",
    },
  ];
  return (
    <div className='w-[800px] m-auto pt-11 '>
      <Carousel slides={slides} />
    </div>
  );
}

export default HomeContent;
