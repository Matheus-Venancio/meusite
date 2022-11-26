import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faMicrochip, faWifi } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export default function Skills() {

    return (
        <section id="home">
            <div class="rainbow">
            <img className="logo_mv" src={require("../../img/logo.png")} />
            </div>

            <div class="warning">
                <p>⚠️ Your browser does not support <a href="https://web.dev/css-individual-transform-properties/">@property</a> so the animation won’t work<br />Please use Chrome.</p>
            </div>
        </section>
    )

}

