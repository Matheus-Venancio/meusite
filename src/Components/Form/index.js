import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { IMaskInput } from "react-imask";

import './styles.css';


export default function Form() {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [text,setText] = useState();

  const handleChange = (e, setter) => {
    setter(e.target.value);
  }
  const clickSend = (e) => {
    e.preventDefault();
    const myphone = "+5519989145453";
    const url = `https://wa.me/${myphone}?text=*Nome:* ${name} %0A*Email:* ${email} %0A*Telefone:* ${phone} %0A*Mensagem:* ${text}`;
    window.open(url, "_blank");
  };

  const form = useRef();

  return (

    <form ref={form} onSubmit={clickSend} data-aos="fade-right">
      <div className='form_container'>
        <div className='inputs'>
          <input type='text' placeholder="Nome" className="input_form" value={name} onChange={(e) => handleChange(e, setName)} required maxLength="30" name="user_name" />
        </div>
        <div className='inputs'>
          <input type='email' placeholder="E-mail" className="input_form" value={email} onChange={(e) => handleChange(e, setEmail)} required maxLength="30" name="user_email" />
        </div>
        <div className='inputs'>
          <IMaskInput
            mask="(00) 00000-0000"
            placeholder="Telefone"
            value={phone}
            onAccept={(value) => setPhone(value)}
            className="input_form" required name="user_phone"
          />

        </div>
        <div className='inputs'>
          <textarea className='text_area' placeholder='digite algo' value={text} onChange={(e) => handleChange(e, setText)} rows="4" cols="50" maxLength="50" name="message" required ></textarea>
        </div>
        <div className='inputs'>
          <input type="submit" value="ENVIAR" className='button_form' text=""></input>
        </div>
      </div>
    </form>


  )

}

