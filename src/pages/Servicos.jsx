import React, { useEffect } from "react";
import Slider from "../components/Slider";
function Servicos() {
  useEffect(() => {
    document.title = "Serviços — Instituto Aurora";
  }, []);
  return (
    <>
      <section className="servicos-hero">
        <div className="servicos-hero-overlay"></div>
        <div className="servicos-content-wrapper">
          <h2 className="servicos-hero-highlight">
            Abordagem especializada para cada etapa do desenvolvimento
          </h2>
        </div>
      </section>
      <section className="servicos-about">
        <div className="servicos-content-wrapper">
          <span className="servicos-about-highlight">
            Cuidado personalizado para cada pessoa
          </span>
          <p className="servicos-about-description">
            No Aurora, acreditamos que um tratamento eficaz nasce da colaboração
            entre diferentes especialidades. Nossa equipe atua de forma
            integrada, combinando conhecimentos e experiências para oferecer um
            cuidado completo e individualizado. Cada plano de acompanhamento é
            pensado de acordo com as necessidades de crianças, adolescentes e
            adultos, respeitando as particularidades de cada fase da vida.
          </p>
          <p className="servicos-about-description">
            Nossa atuação inclui áreas como psiquiatria, terapia ocupacional,
            psicoterapia e avaliação neuropsicológica. Com o compromisso de
            promover saúde e equilíbrio emocional, disponibilizamos diferentes
            modalidades de atendimento, como consultas presenciais, suporte em
            situações de emergência, internações, atendimentos on-line, além de
            visitas domiciliares e hospitalares.
          </p>
        </div>
      </section>
      <section className="areas-de-atuacao">
        <h2 className="atuacao-highlight">Áreas de atuação</h2>
        <div className="content-slider">
          <Slider />
        </div>
      </section>
      <section class="servicos-curva">
        <svg
          class="servicos-curva-svg"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,700 
     C600,700 900,600 1440,450 
     L1440,800 
     L0,800 
     Z"
            fill="#2b4e31"
          />
        </svg>
      </section>
    </>
  );
}
export default Servicos;
