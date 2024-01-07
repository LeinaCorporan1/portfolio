import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact_us.css'

export const ContactUs = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleInputFocus = (e) => {
    const { name } = e.target;
    if (formValues[name] === '') {
      setFormValues({ ...formValues, [name]: e.target.placeholder });
    }
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    if (formValues[name] === e.target.placeholder) {
      setFormValues({ ...formValues, [name]: '' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
		'service_4yjgs28',
		 'template_hyyo8l9',
		  form.current,
		   'Yq0mhmrsRx_P1ur9D')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Ton Nom</label>
      <input type="text" name="user_name" placeholder="Entrez votre nom"  />
      <label>Ton Email</label>
      <input type="email" name="user_email" placeholder="Entrez votre adresse e-mail" />
      <label>Message</label>
      <textarea name="message" placeholder="Exprimez-vous ici..."/>
      <input type="submit" value="send message" />
    </form>
  );
};
