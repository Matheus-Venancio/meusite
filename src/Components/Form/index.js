import React from "react"

import './styles.css';

export default function Form() {


    return (
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
    )

}

