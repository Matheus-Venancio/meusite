
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faMicrochip, faWifi, faBook, faDumbbell, faFutbol, faHammer, faMicrophone, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">

      <nav id="navigation" class="scroll">
        <div class="wrapper">
          <a href="#" class="logo" id="#home">
            <img className="logo_mv" src={require("./img/logo.png")} />
          </a>

          <div class="menu">
            <ul>
              <li><a class="active" onclick="closeMenu()" href="#home">Início</a></li>
              <li><a onclick="closeMenu()" href="#about">Sobre</a></li>
              <li><a onclick="closeMenu()" href="#services">Serviços</a></li>
              <li><a onclick="closeMenu()" href="#">Depoimentos</a></li>
            </ul>

            <ul class="social-links">
              <li><a target="_blank" href="#"></a><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 1.99997 17 1.99997Z"
                  stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z"
                  stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 6.49997H17.51" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              </li>
              <li><a target="_blank" href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 1.99997H15C13.6739 1.99997 12.4021 2.52675 11.4645 3.46444C10.5268 4.40212 10 5.67389 10 6.99997V9.99997H7V14H10V22H14V14H17L18 9.99997H14V6.99997C14 6.73475 14.1054 6.4804 14.2929 6.29286C14.4804 6.10533 14.7348 5.99997 15 5.99997H18V1.99997Z"
                  stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </a></li>
              <li><a target="_blank" href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42Z"
                  stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="#FFFAF1" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </a></li>
            </ul>
          </div>

          <button aria-expanded="false" aria-label="Abrir menu" onclick="openMenu()" class="open-menu">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20H30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M10 12H30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18 28L30 28" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>

          <button aria-expanded="true" aria-label="Fechar menu" onclick="closeMenu()" class="close-menu">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 10L10 30M10 10L30 30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </nav>

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
            <img className="photo" src={require("./img/teste.png")} />
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

      <section id="services">
        <div class="wrapper">
          <header>
            <h4>Serviços</h4>
            <h2>O que gosto de fazer</h2>
          </header>

          <div class="cards">
            <div class="card">

              <FontAwesomeIcon icon={faBook} />

              <h3>Estudar</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <FontAwesomeIcon icon={faDumbbell} />

              <h3>Academia</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <FontAwesomeIcon icon={faFutbol} />

              <h3>Construir</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <FontAwesomeIcon icon={faHammer} />

              <h3>Futebol</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <FontAwesomeIcon icon={faMicrophone} />

              <h3>Comunicação</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <FontAwesomeIcon icon={faScaleBalanced} />

              <h3>Leis</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="wrapper">

          <div class="col-a">
            <header>
              <h4>Sobre nos</h4>
              <h2>Entenda quem somos e por que existimos</h2>
            </header>

            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque exercitationem dolorum
                perferendis eaque? Dolor sit voluptate repellat, dignissimos nam dolorem ipsum, magnam ducimus
                voluptatem, mollitia excepturi explicabo odio eius.
              </p>


            </div>
          </div>


          <div class="col-b">

            <img src={require("./img/arbitro.jpeg")} alt="Informações" />

          </div>

        </div>
      </section>

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
                <li><h2>Outors meios:</h2></li>
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

      <footer>
        <div class="wrapper">

          <div class="col-a">
            <a href="#" class="logo_footer" id="#home">
              <img src={require("./img/logo.png")} />
            </a>

            <p>
              &copy;2022 DoctorCare.
              Todos os direitos reservados.
            </p>
          </div>


          <div class="col-b">
            <ul class="social-links">
              <li><a target="_blank" href="#"></a><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 1.99997 17 1.99997Z"
                  stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z"
                  stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 6.49997H17.51" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              </li>
              <li><a target="_blank" href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 1.99997H15C13.6739 1.99997 12.4021 2.52675 11.4645 3.46444C10.5268 4.40212 10 5.67389 10 6.99997V9.99997H7V14H10V22H14V14H17L18 9.99997H14V6.99997C14 6.73475 14.1054 6.4804 14.2929 6.29286C14.4804 6.10533 14.7348 5.99997 15 5.99997H18V1.99997Z"
                  stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </a></li>
              <li><a target="_blank" href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42Z"
                  stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="#FFFAF1" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </a></li>
            </ul>
          </div>

        </div>
      </footer>

      <a id="backToTopButton" href="#home">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#00856F" />
          <path d="M20 27V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13 20L20 13L27 20" stroke="white" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

      </a>

    </div>
  );
}

export default App;
