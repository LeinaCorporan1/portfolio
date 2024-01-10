import './style/DynamicDiv.css'
const DynamicDiv = ({ title, techUsed, description }: { title: string; techUsed: string; description: string }) => {
	return (
	  <div className="dynamic-div">
		<h2 className="title">{title}</h2>
		<p className="tech-used">{techUsed}</p>
		<p className="description">{description}</p>
	  </div>
	);
  };

  export default DynamicDiv;
