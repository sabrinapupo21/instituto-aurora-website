import React, { useEffect } from "react";

function NossaEquipe() {
  useEffect(() => {
    document.title = "Equipe — Instituto Aurora";
  }, []);

  const equipe = [
    {
      nome: "Ariana Rocha",
      cargo: "DIRETORA CLÍNICA / PSIQUIATRA",
      registro: "CRM 00.000 | RQE 0000",
      descricao:
        "Especialista em psiquiatria forense e gestão de crises, com mais de 20 anos de experiência em hospitais universitários.",
    },
    {
      nome: "Luciana Bittencourt",
      cargo: "PSICÓLOGA ANALÍTICA",
      registro: "CRP 06/0000-0",
      descricao:
        "Focada em psicologia junguiana, trabalha com interpretação de sonhos e processos de individuação em adultos.",
    },
    {
      nome: "Marcos Vinícius Terra",
      cargo: "NEUROLOGISTA",
      registro: "CRM 11.111 | RQE 2222",
      descricao:
        "Especialista em distúrbios do sono e cefaleias, atuando na investigação de causas orgânicas para sintomas emocionais.",
    },
    {
      nome: "Lucas Oliveira Santos",
      cargo: "PSICÓLOGO CLÍNICO",
      registro: "CRP 06/000000",
      descricao:
        "Especialista em Terapia Cognitivo-Comportamental com foco em transtornos de ansiedade e depressão em jovens e adultos.",
    },
    {
      nome: "Matheus Alencar",
      cargo: "NEUROPSICÓLOGO",
      registro: "CRP 06/000001",
      descricao:
        "Doutor em Neurociências, atua na avaliação de funções cognitivas e reabilitação neuropsicológica de idosos.",
    },
    {
      nome: "Renata Ferreira",
      cargo: "ASSISTENTE SOCIAL",
      registro: "CRESS 0000/SP",
      descricao:
        "Especialista em saúde mental pública, focada no suporte familiar e reintegração social de pacientes em tratamento.",
    },
    {
      nome: "Juliana Mendes",
      cargo: "FONOAUDIÓLOGA",
      registro: "CRFa 2-00000",
      descricao:
        "Atua com foco em linguagem e comunicação em crianças com transtornos do neurodesenvolvimento e dificuldades de aprendizagem.",
    },
    {
      nome: "Fernanda Souza",
      cargo: "PSIQUIATRA INFANTIL",
      registro: "CRM 000.000 | RQE 00000",
      descricao:
        "Especialista em psiquiatria da infância e adolescência, com vasta experiência em TDAH e Transtorno do Espectro Autista.",
    },
    {
      nome: "Carlos Rocha",
      cargo: "ARTETERAPEUTA",
      registro: "AATESP 000/0000",
      descricao:
        "Utiliza expressões artísticas como ferramentas terapêuticas para auxiliar no tratamento de traumas e inteligência emocional.",
    },
    {
      nome: "André Gustavo Silva",
      cargo: "PSICOMOTRICISTA",
      registro: "ABP 0000-SP",
      descricao:
        "Focado no desenvolvimento motor e afetivo, integrando corpo e mente através de atividades lúdicas e terapêuticas.",
    },
    {
      nome: "Breno Nogueira",
      cargo: "PSICÓLOGO INFANTIL",
      registro: "CRP 06/000002",
      descricao:
        "Especialista em ludoterapia e orientação parental, auxiliando famílias no manejo de comportamentos desafiadores.",
    },
    {
      nome: "Thiago Magalhães",
      cargo: "MUSICOTERAPEUTA",
      registro: "UBAM 00.000",
      descricao:
        "Mestre em musicoterapia, atua no desenvolvimento de habilidades sociais e regulação emocional através da música.",
    },
    {
      nome: "Sofia Helena Bittencourt",
      cargo: "PSICOPEDAGOGA",
      registro: "ABPp 0000/00",
      descricao:
        "Especialista em dificuldades de aprendizagem e intervenções escolares para crianças com necessidades especiais.",
    },
    {
      nome: "Marcela Diniz",
      cargo: "ENFERMEIRA PSIQUIÁTRICA",
      registro: "COREN-SP 000.000",
      descricao:
        "Responsável pelo acompanhamento medicamentoso e cuidados intensivos em saúde mental, com foco em segurança do paciente.",
    },
    {
      nome: "Aline Proença",
      cargo: "PSICÓLOGA HOSPITALAR",
      registro: "CRP 06/000003",
      descricao:
        "Atua no suporte psicológico a pacientes e familiares em momentos de crise e diagnósticos de doenças crônicas.",
    },
  ];

  return (
    <>
      {/* Coordenador */}
      <section className="coordenador">
        <div className="description-rodrigo">
          <h3 className="drRodrigo">
            Rodrigo Augusto de Souza
            <br /> MD, PhD
          </h3>

          <p className="about-rodrigo">
            O Dr.Rodrigo de Souza, Diretor de Inovação da Clínica Aurora, é uma
            referência internacional em Psiquiatria Intervencionista e
            Neurobiologia do Comportamento. Com doutorado pela Universidade de
            Stanford e mestrado em Ciências Cognitivas pela Sorbonne, sua
            carreira é pautada pela integração entre tecnologia e saúde mental.
            Ele lidera o Centro de Inteligência Neural (CIN), onde coordena
            pesquisas de vanguarda sobre neuroplasticidade e o uso de interfaces
            digitais no tratamento de transtornos de ansiedade e depressão
            severa.
          </p>
          <p>
            Sob sua liderança, a Clínica Aurora tornou-se um polo de medicina
            personalizada, unindo o acolhimento clínico a métodos diagnósticos
            baseados em farmacogenômica e mapeamento cerebral avançado. O Dr.
            Rodrigo é autor de mais de 280 artigos científicos e detém patentes
            exclusivas em protocolos de estimulação magnética transcraniana. Seu
            trabalho busca não apenas a remissão de sintomas, mas a otimização
            da performance cognitiva e a restauração da qualidade de vida de
            seus pacientes através de uma ciência ética e humanizada.
          </p>
          <p>CRM-SP 000.000 | RQE 00000</p>
        </div>

        <img
          className="rodrigo-pic"
          src="/instituto-aurora-website/images/equipe/coordenador.webp"
          alt="Rodrigo Affonseca Bressan"
          loading="lazy"
        />
      </section>

      {/* Grid da equipe */}
      <section className="equipe-grid">
        {equipe.map((membro, index) => (
          <div className="grid-item" key={membro.nome}>
            <div className="grid-pic">
              <img
                src={`/instituto-aurora-website/images/equipe/pessoa-${String(index + 1)}.webp`}
                alt={membro.nome}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="grid-description">
              <h2>{membro.nome}</h2>

              <p>
                {membro.cargo}
                <br />
                {membro.registro}
              </p>

              <p>{membro.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default NossaEquipe;
