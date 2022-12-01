import React from "react"
import BackgroundHome from "../../Components/BackgroundHome";
import './styles.css';

export default function Home() {


  return (
    <section id="home">
      <BackgroundHome />
      <div class="wrapper">
        <div class="col-a">
          <h2>Olá, eu sou</h2>
          <h1>Matheus Venâncio</h1>
          <h3 class="line-1 anim-typewriter">Full-Stack Developer</h3>
          <p>
            Me chamo Matheus Venâncio Cordeiro, mas pode me chamar de Venâncio, tenho 19 anos e sou apaixonado por tecnologias, livros e esportes</p>
          <button class="botao">Sobre mim</button>
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

