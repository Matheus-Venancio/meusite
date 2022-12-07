import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faMicrochip, faWifi } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "../../Components/Cards";

export default function Skills() {

    return (
        <section id="skills">
           <Cards />
        </section>
    )

}

