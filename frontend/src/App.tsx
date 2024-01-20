import React from 'react';
import SchoolIcon from './img/logo';
import { ReactComponent as TestIcon } from './img/test.svg';
import { ReactComponent as GmailIcon } from './img/gmail.svg';
import { ReactComponent as GithubIcon } from './img/github.svg';
import { ReactComponent as LinkedinIcon } from './img/linkedin.svg';
import DynamicDiv from './DynamicDiv';
import  { useState, useEffect, useRef } from 'react';
import { ContactUs } from './contact_us';
import './style/App.css';
import './style/contact_us.css';
import BackgroundDynamic from './BackgroundDynamic';
import {motion} from 'framer-motion';
import { MenuButton } from "./MenuButton";
import { StringLiteral } from 'typescript';

interface PTech {
	tech: string;
}

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
	Owner: string;
	FooterJump: string;
	FooterLinks: string;
}
interface DivData {
	title: string;
	techUsed: string;
	description: string;
  }

function App() {
	const [modeDark, setModeDark] = useState(false);
	const [langChoice, setLangChoice] = useState(0);
	const [isOpen, setOpen] = React.useState(false);
	const [colorFrom, setColorFrom] = useState("#d9d9d9");

	const textInput: TextInput[] = [
		{
			contactTitle: 'Contactez-moi',
			competenceTitle: 'Compétence',
			projectTitle: 'Projets',
			aboutme: "Étudiante en informatique à 42 depuis 2021, je suis passionnée par le développement web et l'intelligence artificielle. Actuellement à la recherche d'un stage, je mets ma créativité et ma passion au service de projets innovants. Intéressée par une opportunité excitante ? Contactez-moi pour discuter de notre collaboration potentielle !",
			greeting: 'Bonjour,',
			presentation: 'je suis Leina Corporan ',
			contactName: "Ton Nom",
			contactNameInput: "Entrez votre nom",
			contactEmail: "Ton Email",
			contactEmailInput: "Entrez votre adresse e-mail",
			contactMsg: "Message",
			contactMsginput: "Exprimez-vous ici...",
			contactSend: "Envoyer",
			projectDescription: 'Description du projet ici',
			Owner: "© 2024 leinaCorporanMiath",
			FooterJump: "Sauter vers",
			FooterLinks: "Liens Utiles",

		},
		{
			contactTitle: 'Contact Me',
			competenceTitle: 'Skills',
			projectTitle: 'Projects',
			aboutme:
			  "I have been a computer science student at 42 since 2021, passionate about web development and artificial intelligence. Currently seeking an internship, I apply my creativity and passion to innovative projects. Interested in an exciting opportunity? Contact me to discuss our potential collaboration!",
			greeting: 'Hello,',
			presentation: 'I am Leina Corporan ',
			contactName: 'Your Name',
			contactNameInput: 'Enter your name',
			contactEmail: 'Your Email',
			contactEmailInput: 'Enter your email address',
			contactMsg: 'Message',
			contactMsginput: 'Express yourself here...',
			contactSend: 'Send',
			projectDescription: 'Project description here',
			Owner: "© 2024 leinaCorporanMiath",
			FooterJump: "Jump to",
			FooterLinks: "Useful links",
		  },
	  ];

	const divData: DivData[] = [
		{ title: 'transcendance', techUsed: "Reactjs - Nestjs - Docker - Postgres", description: textInput[langChoice].projectDescription },
		{ title: 'inception', techUsed: 'Docker', description: textInput[langChoice].projectDescription},
		{ title: 'ft-irc', techUsed: 'C++', description: textInput[langChoice].projectDescription },
	  ];
	  const pTech: PTech[] = [
	{tech: 'C' },
	{tech: 'C++' },
	{tech: 'javascript' },
	{tech: 'typescript' },
	{tech: 'docker' },
	{tech: 'reactJS' },
	{tech: 'vueJS' },
	{tech: 'nestJS' },
	{tech: 'postgreSQL' },
	{tech: 'shell' },
	{tech: 'nodeJS' },
	{tech: 'css' },
	{tech: 'html' },
	{tech: 'git' },
	  ];

	useEffect(() =>{
		const projectBlock = document.querySelectorAll('.projectBlock');
		projectBlock.forEach((block, index) =>{
			if(index % 2)
			{
				block.classList.add('alternate');
			}
		});
	},[]);
		const scrollToSection = (id: string) => {
		  const element = document.getElementById(id);
		  if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setOpen(!isOpen);
		  }
		};

	const modeChange = () => {
		setModeDark(!modeDark);
		console.log(modeDark);

			const root = document.documentElement;
			root.style.setProperty('--dark-Mode', modeDark ? '#010232' : '#F7F4FF');
			root.style.setProperty('--text-color', modeDark ? '#d9d9d9' : '#010232');
			root.style.setProperty('--box-color', modeDark ? 'rgba(255, 255, 255, 0.16)' : '#01023255');
			root.style.setProperty('--tech-color', modeDark ? '#FDCFFE' : '#010232');
			root.style.setProperty('--first-shape', modeDark ? 'linear-gradient(180deg, #9BFAFF 0%, var(--dark-Mode) 80.73%)' : 'linear-gradient(180deg, #3FF0FA 0%, #F7F4FF 80.73%)');
			root.style.setProperty('--second-shape', modeDark ? 'linear-gradient(180deg, #92539F 0%, var(--dark-Mode) 99.48%);' : 'linear-gradient(180deg, #9232A6 0%, #C8A9D2 73.44%, #F7F4FF 99.48%)');
			root.style.setProperty('--third-shape', modeDark ? 'linear-gradient(180deg, #FDCFFE 0%, var(--dark-Mode) 100%)' : 'linear-gradient(180deg, #FC80FF 0%, #F7F4FF 100%)');
			root.style.setProperty('--fourth-shape', modeDark ? 'linear-gradient(180deg,#FFC5AF  0%, var(--dark-Mode) 100%)' : 'linear-gradient(180deg, #FCC5B0 0%, rgba(253, 213, 199, 0.71) 28.5%, rgba(253, 212, 197, 0.73) 58.5%, rgba(255, 255, 255, 0.00) 99.48%)');
			setColorFrom(modeDark ? '#F7F4FF' : '#010232');
	};

	const openMenu = () =>{
		setOpen(!isOpen);
	}

	const changeLang = (choice: number) =>{
		setLangChoice(choice);
	}

	const show = {
		// transition:{duration :0.4, ease: 'linear' , delay: 0},
		// opacity: 1,

		initial:{ opacity: 0, scale: 0.5 },
		animate:{ opacity: 1, scale: 1 },
		transition:{
		  duration: 0.3,
		  ease: [0, 0.71, 0.2, 1.01],
		  scale: {
			type: "spring",
			damping: 5,
			stiffness: 100,
			restDelta: 0.001
		  }},
		  transitionEnd:{display: "block"}
	}

	const hide = {
		transition:{duration :0.4, ease: 'linear' , delay: 0},
		opacity: 0,
		transitionEnd:{display: "none"}
	}
  return (
	<>
	<div className='move'>
		{/* <BackgroundDynamic/> */}
	{/* <div className="Shape Shape1"></div>
	<div className="Shape Shape2"></div>
	<div className="Shape Shape3"></div>
	<div className="Shape Shape4"></div> */}
	</div>

< div className="block">
	<motion.div
		className="smallMenu"
		initial={{display:"none"}}
		animate={isOpen ? show : hide}
		>
		<div className="menuLinks">
	<a onClick={() => scrollToSection('competence')}>{textInput[langChoice].competenceTitle}</a>
	<a onClick={() => scrollToSection('projectList')}>{textInput[langChoice].projectTitle}</a>
	<a onClick={() => scrollToSection('contactMe')}>{textInput[langChoice].contactTitle}</a>
	<div className="lang"><button className="langEng" onClick={() => changeLang(1)}>ENG</button>
	<button className="langFr" onClick={() => changeLang(0)}>FR</button> </div>
	<div className="mode"><motion.button className='modeActivator' onClick={modeChange} animate={{x: modeDark ? -34 : -2 }}  transition={{duration :0.4, ease: 'easeIn' , delay: 0}}></motion.button></div>
	</div>

        </motion.div>
		<MenuButton
        isOpen={isOpen}
		color= {colorFrom}
        onClick={() => openMenu()}
		className="MenuButton"
      />
	<div className='menuContent' >

	<div className='left'>
	<a onClick={() => scrollToSection('competence')}>{textInput[langChoice].competenceTitle}</a>
	<a onClick={() => scrollToSection('projectList')}>{textInput[langChoice].projectTitle}</a>
	<a onClick={() => scrollToSection('contactMe')}>{textInput[langChoice].contactTitle}</a>
	</div>
	<div className='right'>
<div className="lang"><button className="langEng" onClick={() => changeLang(1)}>ENG</button>
	<button className="langFr" onClick={() => changeLang(0)}>FR</button> </div>
	<div className="mode"><motion.button className='modeActivator' onClick={modeChange} animate={{x: modeDark ? -34 : -2 }}  transition={{duration :0.4, ease: 'easeIn' , delay: 0}}></motion.button></div>
	</div></div>
		{/* </div> */}
	<div className='top'>
		<div className="presentation">
			<h1>{textInput[langChoice].greeting}<br />{textInput[langChoice].presentation}<br/>Miath</h1>
 <p className="aboutme"> {textInput[langChoice].aboutme}</p>
 <div className="links">
	<a href="www.linkedin.com/in/leina-corporan-miath-4b71721ab">
		<><LinkedinIcon /></>
	</a>

	<a href="https://github.com/LeinaCorporan1">
		<GithubIcon className='svg'/>
		</a>
	<a href="Gmail">
		 <GmailIcon />
		  </a>
 </div>
	</div>
	<div className='logoSchool'>
	<SchoolIcon color={colorFrom} /></div>
</div>
	<div className='center'>
	<h1 className='competence' id='competence'>{textInput[langChoice].competenceTitle}</h1>
	<div className='language'>
{pTech.map((p, index) => (
	<p>{p.tech}</p>
	))}
	</div></div>
	<div className='bottom'>
		<h1 id='projectList'>{textInput[langChoice].projectTitle}</h1>
		<div className='projectList' >
		{divData.map((div, index) =>(
		 <div key={index} className='projectBlock'>
		 <TestIcon />
		 <DynamicDiv
		   key={index}
		   title={div.title}
		   techUsed={div.techUsed}
		   description={div.description}
		 />
	   </div>))}

		</div>

	</div>
			<h1 className='contactMe' id='contactMe'>{textInput[langChoice].contactTitle}</h1>
		<ContactUs
		textInput={textInput}
		langChoice={langChoice}
		 />

		 <div className="footer">
			<div className='owner'>
				<p>{textInput[langChoice].Owner}</p>
			</div>
			<div className='Info'>
				<div className="jumpTo">
				<div className='Frame'>
				<h3>{textInput[langChoice].FooterJump}</h3>
				<a onClick={() => scrollToSection('competence')}>{textInput[langChoice].competenceTitle}</a>
				<a onClick={() => scrollToSection('presentation')}>Presentation</a>
				<a onClick={() => scrollToSection('projectList')}>{textInput[langChoice].projectTitle}</a>
				<a onClick={() => scrollToSection('contactMe')}>{textInput[langChoice].contactTitle}</a>
				</div></div>
				<div className="FooterLinks">
				<div className='Frame'>
				<h3>{textInput[langChoice].FooterLinks}</h3>
				<a href="www.linkedin.com/in/leina-corporan-miath-4b71721ab">Linkedin</a>
				<a href="https://github.com/LeinaCorporan1">Github</a>
				<a href="Gmail">Email</a>
				</div></div>
			</div>
		 </div>
</div>
	</>
  );
}

export default App;

