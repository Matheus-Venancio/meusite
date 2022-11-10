
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faMicrochip, faWifi } from '@fortawesome/free-solid-svg-icons';

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
            <h2>Como pode ajuda-lo a se sentir melhor?</h2>
          </header>

          <div class="cards">
            <div class="card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h3>Problemas digestivos</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h3>Problemas com a respiração</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h3>Saúde Hormonal</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h3>Bem estar mental</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h3>Cuidados pediatricos</h3>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolorum nemo tenetur asperiores
                expedita ipsam ducimus, nam a pariatur. Minus accusamus earum consectetur praesentium facere
                esse nobis soluta molestiae itaque!</p>
            </div>

            <div class="card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h3>Saude do coração</h3>

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
            <img src="./img/doutor.png" alt="doutor feliz segurando pranchetas com pacientes" />

          </div>

        </div>
      </section>

      <section id="contact">
        <div class="wrapper">

          <div class="col-a">
            <header>

              <h2>Entre em contato com a gente</h2>
            </header>

            <div class="content">

              <ul>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                  Campinas-SP</li>
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
            <img src="img/imagehomemcelular.png" alt="Homem celular sorrindo" />
          </div>

        </div>
      </section>

      <footer>
        <div class="wrapper">

          <div class="col-a">
            <a href="#" class="logo" id="#home">
              <svg width="134" height="19" viewBox="0 0 134 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.775879 18V1.19999H5.93588C8.89588 1.19999 11.0719 1.95199 12.4639 3.45599C13.8719 4.95999 14.5759 7.02399 14.5759 9.64799C14.5759 12.224 13.8719 14.264 12.4639 15.768C11.0719 17.256 8.89588 18 5.93588 18H0.775879ZM2.79188 16.32H5.88788C7.51988 16.32 8.81588 16.056 9.77588 15.528C10.7519 14.984 11.4479 14.216 11.8639 13.224C12.2799 12.216 12.4879 11.024 12.4879 9.64799C12.4879 8.23999 12.2799 7.03199 11.8639 6.02399C11.4479 5.01599 10.7519 4.23999 9.77588 3.69599C8.81588 3.15199 7.51988 2.87999 5.88788 2.87999H2.79188V16.32Z"
                  fill="#212529" />
                <path
                  d="M23.2708 18.288C22.1508 18.288 21.1428 18.032 20.2468 17.52C19.3508 17.008 18.6388 16.288 18.1108 15.36C17.5988 14.416 17.3428 13.312 17.3428 12.048C17.3428 10.784 17.6068 9.68799 18.1348 8.75999C18.6628 7.81599 19.3748 7.08799 20.2708 6.57599C21.1828 6.06399 22.1988 5.80799 23.3188 5.80799C24.4388 5.80799 25.4468 6.06399 26.3428 6.57599C27.2388 7.08799 27.9428 7.81599 28.4548 8.75999C28.9828 9.68799 29.2468 10.784 29.2468 12.048C29.2468 13.312 28.9828 14.416 28.4548 15.36C27.9268 16.288 27.2068 17.008 26.2948 17.52C25.3988 18.032 24.3908 18.288 23.2708 18.288ZM23.2708 16.56C23.9588 16.56 24.5988 16.392 25.1908 16.056C25.7828 15.72 26.2628 15.216 26.6308 14.544C26.9988 13.872 27.1828 13.04 27.1828 12.048C27.1828 11.056 26.9988 10.224 26.6308 9.55199C26.2788 8.87999 25.8068 8.37599 25.2148 8.03999C24.6228 7.70399 23.9908 7.53599 23.3188 7.53599C22.6308 7.53599 21.9908 7.70399 21.3988 8.03999C20.8068 8.37599 20.3268 8.87999 19.9588 9.55199C19.5908 10.224 19.4068 11.056 19.4068 12.048C19.4068 13.04 19.5908 13.872 19.9588 14.544C20.3268 15.216 20.7988 15.72 21.3748 16.056C21.9668 16.392 22.5988 16.56 23.2708 16.56Z"
                  fill="#212529" />
                <path
                  d="M38.0019 18.288C36.8659 18.288 35.8419 18.032 34.9299 17.52C34.0339 16.992 33.3219 16.264 32.7939 15.336C32.2819 14.392 32.0259 13.296 32.0259 12.048C32.0259 10.8 32.2819 9.71199 32.7939 8.78399C33.3219 7.83999 34.0339 7.11199 34.9299 6.59999C35.8419 6.07199 36.8659 5.80799 38.0019 5.80799C39.4099 5.80799 40.5939 6.17599 41.5539 6.91199C42.5299 7.64799 43.1459 8.63199 43.4019 9.86399H41.3379C41.1779 9.12799 40.7859 8.55999 40.1619 8.15999C39.5379 7.74399 38.8099 7.53599 37.9779 7.53599C37.3059 7.53599 36.6739 7.70399 36.0819 8.03999C35.4899 8.37599 35.0099 8.87999 34.6419 9.55199C34.2739 10.224 34.0899 11.056 34.0899 12.048C34.0899 13.04 34.2739 13.872 34.6419 14.544C35.0099 15.216 35.4899 15.728 36.0819 16.08C36.6739 16.416 37.3059 16.584 37.9779 16.584C38.8099 16.584 39.5379 16.384 40.1619 15.984C40.7859 15.568 41.1779 14.984 41.3379 14.232H43.4019C43.1619 15.432 42.5539 16.408 41.5779 17.16C40.6019 17.912 39.4099 18.288 38.0019 18.288Z"
                  fill="#212529" />
                <path
                  d="M51.0733 18C49.9853 18 49.1293 17.736 48.5053 17.208C47.8813 16.68 47.5693 15.728 47.5693 14.352V7.79999H45.5053V6.09599H47.5693L47.8333 3.23999H49.5853V6.09599H53.0893V7.79999H49.5853V14.352C49.5853 15.104 49.7373 15.616 50.0413 15.888C50.3453 16.144 50.8813 16.272 51.6493 16.272H52.8973V18H51.0733Z"
                  fill="#212529" />
                <path
                  d="M61.2264 18.288C60.1064 18.288 59.0984 18.032 58.2024 17.52C57.3064 17.008 56.5944 16.288 56.0664 15.36C55.5544 14.416 55.2984 13.312 55.2984 12.048C55.2984 10.784 55.5624 9.68799 56.0904 8.75999C56.6184 7.81599 57.3304 7.08799 58.2264 6.57599C59.1384 6.06399 60.1544 5.80799 61.2744 5.80799C62.3944 5.80799 63.4024 6.06399 64.2984 6.57599C65.1944 7.08799 65.8984 7.81599 66.4104 8.75999C66.9384 9.68799 67.2024 10.784 67.2024 12.048C67.2024 13.312 66.9384 14.416 66.4104 15.36C65.8824 16.288 65.1624 17.008 64.2504 17.52C63.3544 18.032 62.3464 18.288 61.2264 18.288ZM61.2264 16.56C61.9144 16.56 62.5544 16.392 63.1464 16.056C63.7384 15.72 64.2184 15.216 64.5864 14.544C64.9544 13.872 65.1384 13.04 65.1384 12.048C65.1384 11.056 64.9544 10.224 64.5864 9.55199C64.2344 8.87999 63.7624 8.37599 63.1704 8.03999C62.5784 7.70399 61.9464 7.53599 61.2744 7.53599C60.5864 7.53599 59.9464 7.70399 59.3544 8.03999C58.7624 8.37599 58.2824 8.87999 57.9144 9.55199C57.5464 10.224 57.3624 11.056 57.3624 12.048C57.3624 13.04 57.5464 13.872 57.9144 14.544C58.2824 15.216 58.7544 15.72 59.3304 16.056C59.9224 16.392 60.5544 16.56 61.2264 16.56Z"
                  fill="#212529" />
                <path
                  d="M70.4856 18V6.09599H72.3096L72.4776 8.37599C72.8456 7.59199 73.4056 6.96799 74.1576 6.50399C74.9096 6.03999 75.8376 5.80799 76.9416 5.80799V7.91999H76.3896C75.6856 7.91999 75.0376 8.04799 74.4456 8.30399C73.8536 8.54399 73.3816 8.95999 73.0296 9.55199C72.6776 10.144 72.5016 10.96 72.5016 12V18H70.4856Z"
                  fill="#212529" />
                <path
                  d="M87.2683 18.288C85.5723 18.288 84.1163 17.928 82.9003 17.208C81.6843 16.472 80.7483 15.456 80.0923 14.16C79.4363 12.848 79.1083 11.336 79.1083 9.62399C79.1083 7.91199 79.4363 6.39999 80.0923 5.08799C80.7483 3.77599 81.6843 2.75199 82.9003 2.01599C84.1163 1.27999 85.5723 0.911987 87.2683 0.911987C89.2843 0.911987 90.9323 1.41599 92.2123 2.42399C93.5083 3.41599 94.3163 4.81599 94.6363 6.62399H91.2523C91.0443 5.71199 90.5963 4.99999 89.9083 4.48799C89.2363 3.95999 88.3403 3.69599 87.2203 3.69599C85.6683 3.69599 84.4523 4.22399 83.5723 5.27999C82.6923 6.33599 82.2523 7.78399 82.2523 9.62399C82.2523 11.464 82.6923 12.912 83.5723 13.968C84.4523 15.008 85.6683 15.528 87.2203 15.528C88.3403 15.528 89.2363 15.288 89.9083 14.808C90.5963 14.312 91.0443 13.632 91.2523 12.768H94.6363C94.3163 14.496 93.5083 15.848 92.2123 16.824C90.9323 17.8 89.2843 18.288 87.2683 18.288Z"
                  fill="#00856F" />
                <path
                  d="M101.868 18.288C100.844 18.288 100.004 18.128 99.3476 17.808C98.6916 17.472 98.2036 17.032 97.8836 16.488C97.5636 15.944 97.4036 15.344 97.4036 14.688C97.4036 13.584 97.8356 12.688 98.6996 12C99.5636 11.312 100.86 10.968 102.588 10.968H105.612V10.68C105.612 9.86399 105.38 9.26399 104.916 8.87999C104.452 8.49599 103.876 8.30399 103.188 8.30399C102.564 8.30399 102.02 8.45599 101.556 8.75999C101.092 9.04799 100.804 9.47999 100.692 10.056H97.6916C97.7716 9.19199 98.0596 8.43999 98.5556 7.79999C99.0676 7.15999 99.7236 6.67199 100.524 6.33599C101.324 5.98399 102.22 5.80799 103.212 5.80799C104.908 5.80799 106.244 6.23199 107.22 7.07999C108.196 7.92799 108.684 9.12799 108.684 10.68V18H106.068L105.78 16.08C105.428 16.72 104.932 17.248 104.292 17.664C103.668 18.08 102.86 18.288 101.868 18.288ZM102.564 15.888C103.444 15.888 104.124 15.6 104.604 15.024C105.1 14.448 105.412 13.736 105.54 12.888H102.924C102.108 12.888 101.524 13.04 101.172 13.344C100.82 13.632 100.644 13.992 100.644 14.424C100.644 14.888 100.82 15.248 101.172 15.504C101.524 15.76 101.988 15.888 102.564 15.888Z"
                  fill="#00856F" />
                <path
                  d="M112.095 18V6.09599H114.831L115.119 8.32799C115.551 7.55999 116.135 6.95199 116.871 6.50399C117.623 6.03999 118.503 5.80799 119.511 5.80799V9.04799H118.647C117.975 9.04799 117.375 9.15199 116.847 9.35999C116.319 9.56799 115.903 9.92799 115.599 10.44C115.311 10.952 115.167 11.664 115.167 12.576V18H112.095Z"
                  fill="#00856F" />
                <path
                  d="M127.664 18.288C126.464 18.288 125.4 18.032 124.472 17.52C123.544 17.008 122.816 16.288 122.288 15.36C121.76 14.432 121.496 13.36 121.496 12.144C121.496 10.912 121.752 9.81599 122.264 8.85599C122.792 7.89599 123.512 7.15199 124.424 6.62399C125.352 6.07999 126.44 5.80799 127.688 5.80799C128.856 5.80799 129.888 6.06399 130.784 6.57599C131.68 7.08799 132.376 7.79199 132.872 8.68799C133.384 9.56799 133.64 10.552 133.64 11.64C133.64 11.816 133.632 12 133.616 12.192C133.616 12.384 133.608 12.584 133.592 12.792H124.544C124.608 13.72 124.928 14.448 125.504 14.976C126.096 15.504 126.808 15.768 127.64 15.768C128.264 15.768 128.784 15.632 129.2 15.36C129.632 15.072 129.952 14.704 130.16 14.256H133.28C133.056 15.008 132.68 15.696 132.152 16.32C131.64 16.928 131 17.408 130.232 17.76C129.48 18.112 128.624 18.288 127.664 18.288ZM127.688 8.30399C126.936 8.30399 126.272 8.51999 125.696 8.95199C125.12 9.36799 124.752 10.008 124.592 10.872H130.52C130.472 10.088 130.184 9.46399 129.656 8.99999C129.128 8.53599 128.472 8.30399 127.688 8.30399Z"
                  fill="#00856F" />
              </svg>
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
