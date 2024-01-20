
import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
type Shape = {
  id: string;
  posX: number;
  posY: number;
  heightLimit: number;
  widthLimit: number;
};

const ShapeData: Shape[] = [
  { id: 'shape1', posX: 0, posY: 30, heightLimit: 872, widthLimit: 837 },
    { id: 'shape2', posX: 70, posY: 110, heightLimit: 506, widthLimit: 488 },
    { id: 'shape3', posX: 5, posY: 200, heightLimit: 952, widthLimit: 911 },
    { id: 'shape4', posX: 70, posY: 350, heightLimit: 506, widthLimit: 488 },
];

function BackgroundDynamic() {
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
	if (shape.posY <= 175)
		newPosY = 310;
		// newPosY = ((Math.random() * 175) + 100);
	else
		newPosY = ((Math.random() * 50) - 100);
	// console.log("move");
      return {
        ...shape,
        posX: newPosX,
        posY: newPosY,
      };
    });

    setBallPosition(updateShapePosition);
  };
// const positionOne = {
// 	left: {x: }
// }
  return (
    <>
       {ballPosition.map((shape, index) => (
        <motion.div
          key={shape.id}
          className={`Shape Shape${index + 1}`}
		  transition={{duration :5.0, ease: 'linear' , delay: 0}}
          animate={{ y: `${shape.posY}vh`, left: `${shape.posX}vw` }}
		  onAnimationComplete={onAnimationComplete}
        //   style={{ top: shape.posY, left: shape.posX}}
        //   onClick={() => positionChange(index)}
        ></motion.div>
      ))}
    </>
  );
}

export default BackgroundDynamic;
