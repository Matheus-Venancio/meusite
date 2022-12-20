import React from "react"
import Slider from "../../Components/Slider";
import './styles.css';

export default function Projects() {


    return (
        <section id="projects">
            <div class="wrapper">
                <header data-aos="fade-up">
                    <h4>Meus</h4>
                    <h2>Projetos</h2>
                </header>
                <Slider />
            </div>
        </section>
    )
}