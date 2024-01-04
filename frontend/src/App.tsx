import React from 'react';
// import logo from './logo.svg';
import { ReactComponent as LogoIcon } from './42.svg';
import { ReactComponent as GmailIcon } from './gmail.svg';
import { ReactComponent as GithubIcon } from './github.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import './App.css';

function App() {
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

	<p>c</p>
	<p>c++</p>
	<p>javascript</p>
	<p>typescript</p>
	<p>docker</p>
	<p>reactjs</p>
	<p>vuejs</p>
	<p>nestjs</p>
	<p>postgreSQL</p>
	<p>shell</p>
	<p>docker</p>
	<p>css</p>
	<p>html</p>
	<p>git</p></div></div>
	<div className='bottom'></div>
</div>
	</>
  );
}

export default App;
