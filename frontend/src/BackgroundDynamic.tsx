
import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
type Shape = {
  id: string;
  posX: number;
  posY: number;
  heightLimit: number;
  widthLimit: number;
};



const BackgroundDynamic = ({fullHeight} :{fullHeight:number}) => {


	// console.log("fullheight in background Dynamic  = ", fullHeight );
	// fullHeight = document.body.scrollHeight;
	// console.log(fullHeight);
	const ShapeData: Shape[] = [
  { id: 'shape1', posX: 0, posY: (200), heightLimit: 872, widthLimit: 837 },
    { id: 'shape2', posX: 70, posY: (872), heightLimit: 506, widthLimit: 488 },
    { id: 'shape3', posX: 5, posY:(872+506+200), heightLimit: 952, widthLimit: 911 },
    { id: 'shape4', posX: 70, posY: (fullHeight-506), heightLimit: 506, widthLimit: 488 },
];
// console.log(ShapeData[3].posY);
  const [ballPosition, setBallPosition] = useState(ShapeData);
// Empty dependency array to run the effect only once when the component mounts
function pxToVh(px: number): number {
	return (px / window.innerHeight) * 100;
  }
  // Convertir de pixels à vue en largeur (vw)
  function pxToVw(px: number): number {
	return (px / window.innerWidth) * 100;
  }



  const onAnimationComplete = () => {
    const updateShapePosition = ballPosition.map((shape, index) => {
		var newPosX: number;
		var newPosY: number;
	if (shape.posX < 50)
		newPosX = ((Math.random() * 150) + 30);
	else
		newPosX = ((Math.random() * 40) - 30);
	if ( (shape.posY <= 0  && (shape.posY <= (fullHeight/2))) || ((shape.posY - shape.heightLimit) <= (fullHeight/2))) //va vers le haut
		newPosY = (fullHeight - shape.heightLimit);
	else//va vers le bas
		newPosY = (0 - shape.heightLimit) ;
      return {
        ...shape,
        posX: newPosX,
        posY: newPosY,
      };
    });

    setBallPosition(updateShapePosition);
  };

  return (
    <>
       {ballPosition.map((shape, index) => (
        <motion.div
          key={shape.id}
          className={`Shape Shape${index + 1}`}
		  initial={{ y: `${shape.posY}px`, left: `${shape.posX}vw` }}
		  transition={{duration :5.0, ease: 'linear' , delay: 0}}
          animate={{ y: `${shape.posY}px`, left: `${shape.posX}vw` }}
		  onAnimationComplete={onAnimationComplete}
        //   style={{ top: shape.posY, left: shape.posX}}
        //   onClick={() => positionChange(index)}
        ></motion.div>
      ))}
    </>
  );
}

export default BackgroundDynamic;
