import React, { useRef } from "react"
import emailjs from '@emailjs/browser';
import { IMaskInput } from "react-imask";

import './styles.css';

export default function Form() {
  function clickSend(){
    alert("Enviado com sucesso");
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cl2twbj', 'template_pho7vsl', form.current, '-xY4uCricOPRCAlaS')
      .then((result) => {
        console.log(result.text);
        console.log("Message send")
      }, (error) => {
        console.log(error.text);
      });
  };


  return (

    <form ref={form} onSubmit={sendEmail}>
      <div className='form_container'>
        <div className='inputs'>
          <input type='text' placeholder="Nome" className="input_form" required maxLength="30" name="user_name" />
        </div>
        <div className='inputs'>
          <input type='email' placeholder="E-mail" className="input_form" required maxLength="30" name="user_email" />
        </div>
        <div className='inputs'>
          <IMaskInput
            mask="(00) 0000-0000"
            placeholder="Telefonei"
            className="input_form" required name="user_phone"
          />

        </div>
        <div className='inputs'>
          <textarea className='text_area' placeholder='digite algo' rows="4" cols="50" maxLength="50" name="message" required></textarea>
        </div>
        <div className='inputs'>
          <input type="submit" value="Send" className='button_form' onClick="clickSend()"></input>
        </div>
      </div>
    </form>


  )

}

