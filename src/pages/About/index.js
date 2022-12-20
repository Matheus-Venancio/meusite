import React from "react"
import './styles.css';
export default function About() {


  return (
    <section id="about">
      <div class="wrapper">

        <div class="col-a">
          <header>
            <h4>Quem é</h4>
            <h2>Matheus Venâncio Cordeiro</h2>
          </header>

          <div class="content">
            <p>
              Sou um desenvolvedor Full-Stack que mora em Campinas-sp, formado no curso tecnico de Desenvolvimento de sistemas pelo Senai
              e estou cursando o ensino superior de analise e desenvolvimento de sistema pela Unip.</p>
            <p>
              Gosto muito de esporte e de ler, sou fã de filosofia classica e de futebol, sendo até arbitro. Por conta disso, sou muito
              comunicativo e proativo, sempre em busca de evoluir os meus conhecimentos.
            </p>
            <p>
              Atualmente estou estudando Desenvolvimento web, arduino, azure e sobre desenvolvimento pessoal e autocontrole.

            </p>

            <button>Baixar CV</button>

          </div>
        </div>
        {/**<Carrousel />**/}
        <div className="video">
          <iframe src="https://www.youtube.com/embed/lZGYbLuNNMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
      </div>
    </section>
  )

}

