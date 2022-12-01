import React from "react"
import BackgroundHome from "../../Components/BackgroundHome";
import './styles.css';

export default function Home() {


  return (
    <section id="home">
      <BackgroundHome />
      <div class="wrapper">
        <div class="col-a">
          <p>Olá, eu sou</p>
          <h1>Matheus Venancio</h1>
          <h3>Full-Stack Developer</h3>
          <button class="botao">Conheça</button>
        </div>


        <div class="col-b">
          <img className="photo" src={require("../../img/player.gif")} />
        </div>

      </div>
    </section>
  )

}

