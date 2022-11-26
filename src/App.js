
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDumbbell, faFutbol, faHammer, faMicrophone, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import 'keen-slider/keen-slider.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
