import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
const slidesData = [
  {
    imgSrc:
      "/instituto-aurora-website/images/servicos/areasDeOcupacao/psiquiatria.webp",
    title: "Psiquiatria",
    posicao: "center 50%",
  },
  {
    imgSrc:
      "/instituto-aurora-website/images/servicos/areasDeOcupacao/terapiaOcupacional.webp",
    title: "Terapia Ocupacional",
    posicao: "center 65%",
  },
  {
    imgSrc:
      "/instituto-aurora-website/images/servicos/areasDeOcupacao/psicoterapia.webp",
    title: "Psicoterapia",
    posicao: "center 50%",
  },
  {
    imgSrc:
      "/instituto-aurora-website/images/servicos/areasDeOcupacao/integracaoSensorial.webp",
    title: "Integração Sensorial",
    posicao: "center 70%",
  },
  {
    imgSrc:
      "/instituto-aurora-website/images/servicos/areasDeOcupacao/psiquiatriaInfantil.webp",
    title: "Psiquiatria da Infância e Adolescência",
    posicao: "center 50%",
  },
  {
    imgSrc:
      "/instituto-aurora-website/images/servicos/areasDeOcupacao/neuropsicologia.webp",
    title: "Avaliação Neuropsicológica",
    posicao: "center 71%",
  },
];
export default function Slider() {
  return (
    <>
      <main>
        <div className="swiper-container">
          <Swiper
            modules={[Pagination]}
            loop={true}
            slidesPerView={"1.1"}
            centeredSlides={true}
            spaceBetween={40}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  style={{ objectPosition: slide.posicao }}
                />
                <div className="slide-title">
                  <h1>{slide.title}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
}
