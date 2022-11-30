import React from "react"

import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faCode,faHouse, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {


    return (
        <nav id="navigation" class="scroll">
            <ul>
                <li><a href="#home"><FontAwesomeIcon icon={faHouse} /></a></li>
                <li><a href="#about"><FontAwesomeIcon icon={faUser} /></a></li>
                <li><a href="#services"><FontAwesomeIcon icon={faBrain}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCode}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faPhone}/></a></li>
            </ul>
        </nav>

    )

}

