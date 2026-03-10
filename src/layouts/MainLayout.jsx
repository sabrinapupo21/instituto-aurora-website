import { Link, Outlet, useMatch } from "react-router-dom";
import "../App.css";
import { useState } from "react";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const isContatoPage = useMatch("/Contato");

  return (
    <>
      <header className="site-header">
        <Link to="/">
          <img
            className="site-header__logo"
            src="/instituto-aurora-website/images/logo/logo_header.png" // <-- coloque aqui o caminho da sua nova logo
            alt="Logo Clínica Saúde Integral"
          />
        </Link>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <nav className={`site-nav ${isOpen ? "active" : ""}`}>
          <ul className="site-nav__list">
            <li className="site-nav__item">
              <Link to="/NossaEquipe" onClick={() => setIsOpen(false)}>
                Nossa Equipe
              </Link>
            </li>
            <li className="site-nav__item">
              <Link to="/SobreNos" onClick={() => setIsOpen(false)}>
                Sobre Nós
              </Link>
            </li>
            <li className="site-nav__item">
              <Link to="/Servicos" onClick={() => setIsOpen(false)}>
                Serviços
              </Link>
            </li>

            <li className="site-nav__item">
              <Link to="/Contato" onClick={() => setIsOpen(false)}>
                Contato
              </Link>
            </li>

            <li className="mobile-cta">
              <a
                href="https://api.whatsapp.com/send/?phone=5518997252281"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                AGENDE SUA CONSULTA
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="https://api.whatsapp.com/send/?phone=5518997252281"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          AGENDE SUA CONSULTA
        </a>
      </header>

      <Outlet />

      {!isContatoPage && (
        <section className="cta">
          <div className="content-wrapper">
            <h2 className="cta-highlight">Cuidando da sua saúde mental</h2>
            <a
              href="https://api.whatsapp.com/send/?phone=5518997252281"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              style={{ color: "#FFFFFF" }}
            >
              AGENDE SUA CONSULTA
            </a>
          </div>
        </section>
      )}

      <footer className="footer">
        <h3 className="footer-highlight">
          Aurora Saúde Mental - Atendimento Multidisciplinar
        </h3>

        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-description">Agendamentos e informações</h4>

            <address>
              <div className="footer-label">
                <strong>
                  Whatsapp -{" "}
                  <a
                    href="https://wa.me/5518997252281"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (18) 99725-2281
                  </a>
                </strong>
                <br />
                <strong className="footer-label">
                  Telefone fixo -{" "}
                  <a
                    href="tel:18997252281"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (18) 99725-2281
                  </a>
                </strong>
              </div>

              <p className="footer-hours">Segunda à sexta - 9h às 18h</p>

              <p className="footer-role">
                Diretor Técnico: Dr. João Silva Pereira
              </p>

              <p className="footer-role">
                Médico Especialista | CRM 000000 | RQE 00000
              </p>
            </address>
          </div>

          <div className="footer-col">
            <h4 className="footer-description">Nossas unidades</h4>

            <strong className="address-highlight">Unidade Centro</strong>
            <p className="address-description">
              Rua Exemplo, 123 — Sala 45
              <br />
              Cidade Exemplo - SP
            </p>

            <strong className="address-highlight">Unidade Zona Sul</strong>
            <p className="address-description">
              Avenida Modelo, 456 — Conjunto 78
              <br />
              Cidade Exemplo - SP
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
