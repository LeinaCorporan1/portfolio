import React from 'react';

interface ArrowSendProps {
	color: string;
  }

  const ArrowSend: React.FC<ArrowSendProps> = ({ color }) => {
  return (

<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style={{ fill: color }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
 );
};

export default ArrowSend;
