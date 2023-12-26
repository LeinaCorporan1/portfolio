import React from 'react';
import logo from './logo.svg';
// import { ReactComponent as Icon } from './42.svg';
import './App.css';

function App() {
  return (
	<>
	<div className='menu block'>
	<button>competence</button>
	<button>contact me</button>
	<button>mode</button>
	<button>lang</button></div>
<div className='move'>
	<div className="Shape Shape1"></div>
	<div className="Shape Shape2"></div>
	<div className="Shape Shape3"></div>
	<div className="Shape Shape4"></div></div>

	<div className='top block'>
		<div className="presentation">
			<h1>Bonjour,<br />je suis Leina Corporan Miath</h1>
 <p className="aboutme"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio et harum qui eum officia
 , est, perferendis dignissimos ut adipisci iste quisquam, quidem ullam cupiditate impedit placeat reiciendis minus.</p>
	</div>
</div>
	<div className='center block'>
	<div className='competence'></div>
	<div className='language'>
	<p>javascript</p>
	<p>typescript</p>
	<p>docker</p>
	<p>reactjs</p>
	<p>vuejs</p>
	<p>git</p></div></div>
	<div className='bottom block'></div>

	</>
  );
}

export default App;
