import React, { useEffect } from "react";
function Home() {
  useEffect(() => {
    document.title = "Aurora - Instituto de Saúde Mental";
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="content-wrapper">
          <h2 className="hero-highlight">Bem-vindo ao Aurora</h2>
          <p className="hero-description">
            Excelência em cuidado psicológico e psiquiátrico
          </p>
        </div>
      </section>
      <section className="about">
        <div className="content-wrapper">
          <span className="about-highlight">
            Cuidado integral para cada fase da sua vida
          </span>
          <p className="about-description">
            No Aurora Instituto de Saúde Mental, reunimos uma equipe
            multidisciplinar altamente qualificada para oferecer um atendimento
            completo e individualizado. Atuamos de forma integrada nas áreas de
            psiquiatria, psicoterapia, terapia ocupacional e avaliação
            neuropsicológica, desenvolvendo planos terapêuticos personalizados
            para cada paciente.
          </p>
        </div>
      </section>
      <section className="locations">
        <div className="locations-section1">
          <h2 className="locations-highlight">Atendimentos</h2>
          <p className="locations-description">
            Contamos com unidades estrategicamente localizadas para oferecer
            conforto, acessibilidade e um ambiente acolhedor aos nossos
            pacientes.
          </p>

          <p className="locations-description">
            Além do atendimento presencial, disponibilizamos consultas on-line,
            acompanhamento domiciliar e suporte hospitalar, garantindo cuidado
            contínuo e personalizado.
          </p>
        </div>
        <div className="locations-map">
          <iframe
            src="https://www.google.com/maps?q=Rua+Exemplo+123,+Cidade+Exemplo,+SP&output=embed"
            width="682.99px"
            height="679.17px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
export default Home;
