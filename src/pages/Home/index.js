import React from "react"
import './styles.css';

export default function Home() {


  return (
    <section id="home">

      <div class="wrapper">

        <div class="col-a">
          <div className="loader"></div>
          <h2>Olá, me chamo</h2>
          <h1>Matheus Venâncio</h1>
          <h3 class="line-1 anim-typewriter">Full-Stack Developer</h3>
          <p>
            Tenho 20 anos e sou apaixonado por tecnologias, livros e esportes</p>
          <a href="#about"><button class="botao">Sobre mim</button></a>
        </div>


        <div class="col-b">
          <div className="animationPhoto">
            <img className="photo" src={require("../../img/player.gif")} />
          </div>
        </div>

      </div>
    </section>
  )

}

