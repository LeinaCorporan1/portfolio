import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
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

export const ContactUs = ({ textInput, langChoice }: { textInput: TextInput[]; langChoice: number }) => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleInputFocus = (e) => {
//     const { name } = e.target;
//     if (formValues[name] === '') {
//       setFormValues({ ...formValues, [name]: e.target.placeholder });
//     }
//   };

//   const handleInputBlur = (e) => {
//     const { name } = e.target;
//     if (formValues[name] === e.target.placeholder) {
//       setFormValues({ ...formValues, [name]: '' });
//     }
//   };

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
      <label>{textInput[langChoice].contactName}</label>
	<input type="text" name="user_name" placeholder={textInput[langChoice].contactNameInput}/>
      <label>{textInput[langChoice].contactEmail}</label>
      <input type="email" name="user_email" placeholder={textInput[langChoice].contactEmailInput} />
      <label>{textInput[langChoice].contactMsg}</label>
      <textarea name="message" placeholder={textInput[langChoice].contactMsginput}/>
	<input type="submit" value={textInput[langChoice].contactSend}/>
    </form>
  );
};
