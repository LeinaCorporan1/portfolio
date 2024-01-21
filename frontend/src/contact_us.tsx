import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import ArrowSend from './img/arrowSend';
import './style/contact_us.css'

interface TextInput{
	contactTitle: string;
	competenceTitle: string;
	projectTitle: string;
	aboutme: string;
	greeting: string;
	presentation: string;
	contactName: string;
	contactNameInput: string;
	contactEmail: string;
	contactEmailInput: string;
	contactMsg: string;
	contactMsginput: string;
	contactSend: string;
	projectDescription: string;
}

export const ContactUs = ({ textInput, langChoice, color }: { textInput: TextInput[]; langChoice: number; color: string }) => {
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
		setFormValues({ ...formValues, [name]: '' });
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
	   setFormValues({
			user_name: '',
			user_email: '',
			message: '',
		  });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>{textInput[langChoice].contactName}</label>
	<input type="text" name="user_name" placeholder={textInput[langChoice].contactNameInput} value={formValues.user_name}   onChange={handleInputChange}
  onFocus={handleInputFocus}
  onBlur={handleInputBlur}/>
      <label>{textInput[langChoice].contactEmail}</label>
      <input type="email" name="user_email" placeholder={textInput[langChoice].contactEmailInput} value={formValues.user_email}   onChange={handleInputChange}
  onFocus={handleInputFocus}
  onBlur={handleInputBlur}/>
      <label>{textInput[langChoice].contactMsg}</label>
      <textarea name="message" placeholder={textInput[langChoice].contactMsginput} value={formValues.message}  onChange={handleInputChange}
  onFocus={handleInputFocus}
  onBlur={handleInputBlur}/>
	  <button type="submit" className='send'>
		<ArrowSend color={color}/>
	  </button>

    </form>
  );
};
