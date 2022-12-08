import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './styles.css';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


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

    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <div className="img-slider">
          <img className="photo" src={require("../../img/projectsimg/doctorcare.PNG")} />
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className="img-slider">
          <img className="photo" src={require("../../img/projectsimg/doctorcare.PNG")} />
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className="img-slider">
          <img className="photo" src={require("../../img/projectsimg/card.PNG")} />
        </div>
      </div>
      <div className="keen-slider__slide number-slide4">
        <div className="img-slider">
          <img className="photo" src={require("../../img/projectsimg/softfloor.PNG")} />
        </div>
      </div>
      <div className="keen-slider__slide number-slide5">
        <div className="img-slider">
          <img className="photo" src={require("../../img/projectsimg/financas.PNG")} />
        </div>
      </div>
      <div className="keen-slider__slide number-slide6">
        <div className="content-keen">
          <h3>Mais em breve...</h3>
          <p>Me acompanhe para saber mais</p>
          <div className="button-flex">
            <Button><FontAwesomeIcon icon={faLink} />GitHub</Button>
            <Button><FontAwesomeIcon icon={faLink} />GitHub</Button>
          </div>
        </div>
      </div>

    </div>

  )

}

