import React, { useEffect } from "react";
function SobreNos() {
  useEffect(() => {
    document.title = "Sobre Nós — Instituto Aurora";
  }, []);
  return (
    <>
      <section className="apresentation">
        <img
          className="fotoEquipe"
          src="/institutoAurora/images/equipe/equipeCompleta.webp"
        />
        <div className="foto-overlay">
          <span>Unidos pelo propósito de oferecer o bem-estar mental</span>
        </div>
      </section>
      <section className="about-clinic">
        <div className="principles">
          <h2>Um percurso em direção ao equilíbrio e à saúde mental</h2>
          <p>
            No Instituto Aurora, acreditamos que cada pessoa possui uma história
            e necessidades próprias. Por isso, nosso trabalho é baseado em um
            cuidado atento e personalizado, no qual profissionais qualificados
            se dedicam a compreender as particularidades de cada paciente. A
            partir dessa compreensão, construímos estratégias terapêuticas
            adequadas a cada diagnóstico, buscando não apenas aliviar sintomas,
            mas também promover mudanças positivas e duradouras na qualidade de
            vida.
          </p>
        </div>
        <div className="atendimentos-container">
          <div className="atendimentos-text">
            <h2>Atendimentos</h2>
            <p>
              Nossas unidades estão localizadas em regiões de fácil acesso,
              oferecendo um ambiente acolhedor e preparado para o cuidado em
              saúde mental.{" "}
            </p>
            <p>
              Além dos atendimentos presenciais, também realizamos consultas
              on-line, visitas domiciliares e acompanhamento hospitalar.
            </p>
          </div>
          <div className="atendimentos-img">
            <img
              alt="Uma sala de atendimento da clínica"
              src="/institutoAurora/images/sobreNos/waitingRoom.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default SobreNos;
