import { React } from "react"
import './styles.css';
import ImageKeen from "../../Components/ImageKeen";
import Form from "../../Components/Form";
import WavesEffect from "../../Components/WalvesEffect";


export default function ContactT() {

  return (
    <section id="contact">
      <div className="wavet">      <WavesEffect /></div>

      <div class="wrapper">

        <div class="col-a" data-aos="fade-right">
          <header>
            <h2>Frases que me definem</h2>
          </header>

          <div class="content">
            <p className="contentdesc">
              "A imaginação é mais importante que o conhecimento, porque o conhecimento é limitado, ao passo que a imaginação abrange o mundo inteiro."</p>
            <p className="contentname">
              Albert Einstein
            </p>
            <p className="contentdesc">"Se você agir sempre com dignidade, pode não melhorar o mundo, mas uma coisa é certa: haverá na Terra um canalha a menos"</p>
            <p className="contentname">
              Millôr Fernandes</p>


          </div>
        </div>

        <Form />

      </div>
    </section>
  )

}

