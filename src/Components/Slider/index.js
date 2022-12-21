import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './styles.css';
import { Button } from "react-bootstrap";



export default function Slider() {

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  return (

    <div ref={sliderRef} className="keen-slider" data-aos="fade-down">
      <div className="keen-slider__slide number-slide1">
        <img className="photo" src={require("../../img/projectsimg/doctorcare.PNG")} />

        <div class="image__overlay image__overlay--primary">

          <div class="image__title">Doctorcare</div>
          <a href="https://github.com/Matheus-Venancio/Doctorcare" target="_blank">
            <p class="image__description">
              Desenvolvi um site exemplo para uma assistencia medica usando html, css e javascript
              Clique para ir até o repositorio.
            </p>
          </a>
          <a href="https://github.com/Matheus-Venancio/Doctorcare" target="_blank">
            <p class="image__description">
              Clique para ir até o repositorio.
            </p>
          </a>

        </div>
      </div>

      <div className="keen-slider__slide number-slide2">
        <img className="photo" src={require("../../img/projectsimg/card.PNG")} />

        <div class="image__overlay image__overlay--primary">

          <div class="image__title">Card</div>
          <a href="https://github.com/Matheus-Venancio/Cartao_explorer" target="_blank">
            <p class="image__description">
              Esse projeto consegue identificar a bandeira de seu cartão apenas com alguns numeros informados,
              assim você tem a facilidade na hora de prencher os dados.
            </p>
          </a>
          <a href="https://github.com/Matheus-Venancio/Cartao_explorer" target="_blank">
            <p class="image__description">
              Clique para ir até o repositorio.
            </p>
          </a>

        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <img className="photo" src={require("../../img/projectsimg/softfloor.PNG")} />

        <div class="image__overlay image__overlay--primary">

          <div class="image__title">Soft floor</div>
          <a href="https://softflooreco.com/" target="_blank">
            <p class="image__description">
              A empresa Softfloor entrou em contato comigo para desenvolver um site de aprensentação deles.
              Desenvolvi com HTML, CSS e JS.
            </p>
          </a>
          <a href="https://softflooreco.com/" target="_blank">
            <p class="image__description">
              Clique para ir até o repositorio.
            </p>
          </a>

        </div>
      </div>
      <div className="keen-slider__slide number-slide4">
        <img className="photo" src={require("../../img/projectsimg/financas.PNG")} />

        <div class="image__overlay image__overlay--primary">

          <div class="image__title">Sistema Finanças</div>
          <a href="https://github.com/Matheus-Venancio/controlefinanceiro" target="_blank">
            <p class="image__description">
              Desenvolvi um sistema de controle financeiro que você consegue ver aonde gastou mais e ter
              o controle sobre isso.
            </p>
          </a>
          <a href="https://github.com/Matheus-Venancio/controlefinanceiro" target="_blank">
            <p class="image__description">
              Clique para ir até o repositorio.
            </p>
          </a>

        </div>

      </div>
      <div className="keen-slider__slide number-slide5">
        <div className="content-keen">
          <h3>Mais em breve...</h3>
          <p>Me acompanhe para saber mais</p>
          <div className="button-flex">
            <a href="https://github.com/Matheus-Venancio" target="_blank"><Button>GitHub</Button></a>
            <a href="https://www.linkedin.com/in/matheusvenanciocordeiro/" target="_blank"><Button>Linkedin</Button></a>
          </div>
        </div>
      </div>

    </div>

  )

}

