import React from 'react';
// import logo from './logo.svg';
import { ReactComponent as LogoIcon } from './42.svg';
import { ReactComponent as TestIcon } from './test.svg';
import { ReactComponent as GmailIcon } from './gmail.svg';
import { ReactComponent as GithubIcon } from './github.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import DynamicDiv from './DynamicDiv';
import  { useState, useEffect } from 'react';
import { ContactUs } from './contact_us';
import './App.css';


interface DivData {
	title: string;
	techUsed: string;
	description: string;
  }
interface PTech {
	tech: string;
}
function App() {

	const divData: DivData[] = [
		{ title: 'transcendance', techUsed: "Reactjs - Nestjs - Docker - Postgres", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
		{ title: 'inception', techUsed: 'Docker', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
		{ title: 'ft-irc', techUsed: 'C++', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
	  ];
	  const pTech: PTech[] = [
	{tech: 'c' },
	{tech: 'c++' },
	{tech: 'javascript' },
	{tech: 'typescript' },
	{tech: 'docker' },
	{tech: 'reactjs' },
	{tech: 'vuejs' },
	{tech: 'nestjs' },
	{tech: 'postgreSQL' },
	{tech: 'shell' },
	{tech: 'docker' },
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
  return (
	<>
	<div className='move'>
	<div className="Shape Shape1"></div>
	<div className="Shape Shape2"></div>
	<div className="Shape Shape3"></div>
	</div>


< div className="block">
	<div className='menu'>
	<div className='left'>
	<button>competence</button>
	<button>project</button>
	<button>contact me</button>
	</div>
	<div className='right'>
<div className="lang"><button className="langEng">ENG</button>
	<button className="langFr">FR</button> </div>
	<div className="mode"><button className='modeActivator'></button></div>

	</div></div>
	<div className='top'>
		<div className="presentation">
			<h1>Bonjour,<br />je suis Leina Corporan Miath</h1>
 <p className="aboutme"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 <div className="links">
	<a href="www.linkedin.com/in/leina-corporan-miath-4b71721ab">
		<LinkedinIcon />
	</a>
	<a href="Gmail">
		 <GmailIcon />
		  </a>
	<a href="https://github.com/LeinaCorporan1">
		<GithubIcon />
		</a>
 </div>
	</div>
	<LogoIcon />
</div>
	<div className='center'>
	<h1 className='competence'>competence</h1>
	<div className='language'>
{pTech.map((p, index) => (
	<p>{p.tech}</p>
	))}
	</div></div>
	<div className='bottom'>
		<h1>project</h1>
		<div className='projectList'>
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
			<h1>contact me</h1>
		<ContactUs />
</div>
	</>
  );
}

export default App;


// import React from 'react';
// import DynamicDiv from './DynamicDiv'; // Path to your DynamicDiv component

// const App = () => {
//   // Sample data array with div information
//   const divData = [
//     { text: 'First Div', backgroundColor: 'lightblue', textColor: 'black' },
//     { text: 'Second Div', backgroundColor: 'lightgreen', textColor: 'black' },
//     // Add more objects with different data for more divs
//   ];

//   return (
//     <div>
//       {divData.map((div, index) => (
//         <DynamicDiv
//           key={index} // Assign a unique key when rendering a list of components
//           text={div.text}
//           backgroundColor={div.backgroundColor}
//           textColor={div.textColor}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
