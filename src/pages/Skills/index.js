import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export default function Skills() {

    return (
        <section id="skills">
            <div className="container">
                <div className="box-grid">
                    <h2>Front-end delevoper</h2>
                    <div className="box">
                        <div className="content">
                          <h3>  <FontAwesomeIcon icon={faStar} className='green'/> HTML</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>CSS</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='green'/>JAVASCRIPT</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>REACT JS</h3>
                        </div>

                        <div className="content">
                            <h3> <FontAwesomeIcon icon={faStar} className='green'/>BOOTSTRAP</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>SASS</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='green'/>TAILWIND</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>TYPESCRIPT</h3>
                        </div>
                    </div>
                </div>

                <div className="box-grid">
                    <h2>Back-end delevoper</h2>
                    <div className="box">
                        <div className="content">
                          <h3>  <FontAwesomeIcon icon={faStar} className='green'/> JAVA</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>C#</h3>
                        </div>

                        <div className="content">
                            <h3> <FontAwesomeIcon icon={faStar} className='green'/>NODE JS</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>LARAVEL</h3>
            
                        </div>
                    </div>
                </div>

                <div className="box-grid">
                    <h2>Mobile delevoper</h2>
                    <div className="box">
                        <div className="content">
                          <h3>  <FontAwesomeIcon icon={faStar} className='green'/> REACT NATIVE</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>KOTLIN</h3>
                        </div>

                        <div className="content">
                            <h3> <FontAwesomeIcon icon={faStar} className='green'/>JAVA</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>FLUTTER</h3>
            
                        </div>
                    </div>
                </div>

                <div className="box-grid">
                    <h2>Database</h2>
                    <div className="box">
                        <div className="content">
                          <h3>  <FontAwesomeIcon icon={faStar} className='green'/>MYSQL</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>AZURE</h3>
                        </div>

                        <div className="content">
                            <h3> <FontAwesomeIcon icon={faStar} className='green'/>AWS</h3>
                            <h3> <FontAwesomeIcon icon={faStar} className='pink'/>FIREBASE</h3>
            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

