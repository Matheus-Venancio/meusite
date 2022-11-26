
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDumbbell, faFutbol, faHammer, faMicrophone, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import 'keen-slider/keen-slider.min.css';
import Slider from './Components/Slider';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Carrousel from './Components/Carrousel';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">

      <Header />

      <Home />

      <About />

      <section id="services">
        <div class="wrapper">
          <header>
            <h4>Minhas</h4>
            <h2>Hard-skills</h2>
          </header>

          <div class="cards">
            <div class="card top">

              <FontAwesomeIcon icon={faBook} />

              <h3>Estudar</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card transparent">
              <FontAwesomeIcon icon={faDumbbell} />

              <h3>Academia</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card top">
              <FontAwesomeIcon icon={faFutbol} />

              <h3>Construir</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card transparent">
              <FontAwesomeIcon icon={faHammer} />

              <h3>Futebol</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card top">
              <FontAwesomeIcon icon={faMicrophone} />

              <h3>Comunicação</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card transparent">
              <FontAwesomeIcon icon={faScaleBalanced} />

              <h3>Leis</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>
          </div>
        </div>

        <div className='bg header_top'>
          <div class="wrapper">

            <header className='header_top'>
              <h4 className='text_white'>Minhas</h4>
              <h2 className='text_white'>Soft-skills</h2>
            </header>

            <div class="cards">
              <div class="card transparent2">

                <FontAwesomeIcon icon={faBook} className="icon_card" />

                <h3>Estudar</h3>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                  expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                  esse nobis soluta molestiae itaque!</p>
              </div>

              <div class="card top2">
                <FontAwesomeIcon icon={faDumbbell} className="icon_card" />

                <h3>Academia</h3>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                  expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                  esse nobis soluta molestiae itaque!</p>
              </div>

              <div class="card transparent2">
                <FontAwesomeIcon icon={faFutbol} className="icon_card" />

                <h3>Construir</h3>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                  expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                  esse nobis soluta molestiae itaque!</p>
              </div>

              <div class="card top2">
                <FontAwesomeIcon icon={faHammer} className="icon_card" />

                <h3>Futebol</h3>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                  expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                  esse nobis soluta molestiae itaque!</p>
              </div>

              <div class="card transparent2">
                <FontAwesomeIcon icon={faMicrophone} className="icon_card" />

                <h3>Comunicação</h3>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                  expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                  esse nobis soluta molestiae itaque!</p>
              </div>

              <div class="card top2">
                <FontAwesomeIcon icon={faScaleBalanced} className="icon_card" />

                <h3>Leis</h3>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                  expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                  esse nobis soluta molestiae itaque!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section id="contact">
        <div class="wrapper">

          <div class="col-a">
            <header>

              <h2>Frases que me definem</h2>
            </header>

            <div className='phrases'>
              <p className='words'>"A imaginação é mais importante que o conhecimento, porque o conhecimento é limitado, ao passo que a imaginação abrange o mundo inteiro."</p>
              <p className='people'>Albert Einstein</p>
            </div>

            <div className='phrases'>
              <p className='words'>"Se você agir sempre com dignidade, pode não melhorar o mundo, mas uma coisa é certa: haverá na Terra um canalha a menos"</p>
              <p className='people'>Millôr Fernandes</p>
            </div>
            <div class="content">

              <ul>
                <li><h2>Outros meios:</h2></li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22 6L12 13L2 6" stroke="#00856F" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                  matheusvecordeiro@gmail.com
                </li>
              </ul>
              <a class="button" href="https://wa.me/5519981466623" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001ZM16.4 18.9001C15.1 19.7001 13.6 20.2001 12 20.2001C10.5 20.2001 9.1 19.8001 7.8 19.1001L7.5 18.9001L4.4 19.7001L5.2 16.7001L5 16.4001C2.6 12.4001 3.8 7.4001 7.7 4.9001C11.6 2.4001 16.6 3.7001 19 7.5001C21.4 11.4001 20.3 16.5001 16.4 18.9001Z"
                    fill="white" />
                </svg>
                Fale conosco
              </a>


            </div>
          </div>


          <div class="col-b">
            <div className="form">
              <div className='form_container'>
                <div className='inputs'>
                  <input type='text' placeholder="Nome" className="input_form" required maxLength="30" />
                </div>
                <div className='inputs'>
                  <input type='email' placeholder="E-mail" className="input_form" required maxLength="30" />
                </div>
                <div className='inputs'>
                  <input type='number' placeholder="Telefone" className="input_form" required maxLength="11" />
                </div>
                <div className='inputs'>
                  <textarea className='text_area' placeholder='digite algo' rows="4" cols="50" maxLength="50"></textarea>
                </div>
                <div className='inputs'>
                  <button className='button_form'>Enviar</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      <a id="backToTopButton" href="#home">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#00856F" />
          <path d="M20 27V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13 20L20 13L27 20" stroke="white" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

      </a>

      <Footer />
    </div>
  );
}

export default App;
