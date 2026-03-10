import React, { useEffect } from "react";
function Contato() {
  useEffect(() => {
    document.title = "Contato — Instituto Aurora";
  }, []);
  return (
    <>
      <section className="contato-hero">
        <div className="contato-hero-overlay"></div>
        <div className="contato-content-wrapper">
          <h2 className="contato-hero-highlight">
            Seu caminho para uma mente mais saudável começa aqui.
          </h2>
          <h2 className="contato-hero-highlight">
            Vamos dar o primeiro passo juntos?
          </h2>
          <a
            href="https://api.whatsapp.com/send/?phone=5518997252281&text&type=phone_number&app_absent=0"
            target="_blank"
            className="cta-btn"
            style={{ color: "#FFFFFF" }}
          >
            AGENDE SUA CONSULTA
          </a>
        </div>
      </section>
    </>
  );
}
export default Contato;
