import React from "react"
import './styles.css';
import Carrousel from "../../Components/Carrousel";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque exercitationem dolorum
                perferendis eaque? Dolor sit voluptate repellat, dignissimos nam dolorem ipsum, magnam ducimus
                voluptatem, mollitia excepturi explicabo odio eius.
              </p>


            </div>
          </div>
          <Carrousel />
        </div>
      </section>
    )

}

