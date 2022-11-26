import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faMicrochip, faWifi } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export default function Home() {


    return (
        <section id="home">

        <div class="wrapper">
          <div class="col-a">
            <header>
              <h1>Assistencia medica simplificada para todos</h1>
            </header>

            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ullam culpa quas quasi nulla, animi
                eum veritatis pariatur illo laboriosam ad possimus similique facilis facere minus at, architecto
                magnam ea.</p>
            </div>

            <div class="botao">
              <button>Conheça</button>
            </div>
          </div>


          <div class="col-b">
            <img className="photo" src={require("../../img/teste.png")} />
          </div>

          <div class="stats">

            <div class="stat">
              <FontAwesomeIcon icon={faMicrochip} className="icon_card" />
            </div>
            <div class="stat">
              <FontAwesomeIcon icon={faCode} className="icon_card" />
            </div>
            <div class="stat">
              <FontAwesomeIcon icon={faWifi} className="icon_card" />
            </div>
            <div class="stat">
              <FontAwesomeIcon icon={faDatabase} className="icon_card" />
            </div>
          </div>

        </div>
      </section>
    )

}

