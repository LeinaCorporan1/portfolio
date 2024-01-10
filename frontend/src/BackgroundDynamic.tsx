import React from 'react';
import {useState} from 'react';

const ShapeData = [
{id:'shape1', posX:0 , posY:30 ,heightLimit:872,widthLimit:837},
{id:'shape2',posX:70, posY:110 ,heightLimit:506,widthLimit:488,},
{id:'shape3',posX:5,posY:200,heightLimit:952,widthLimit:911,},
{id:'shape4',posX:70,posY:350,heightLimit:506,widthLimit:488,},
]

function BackgroundDynamic (){
	const [BallPosition, setBallPosition] = useState(ShapeData);

	const move = () =>{

		for( let i = 0; i < 4; i++)
		{

			if (ShapeData[i].heightLimit == (outerHeight + ShapeData[i].heightLimit) ||
			ShapeData[i].heightLimit == (0 - ShapeData[i].heightLimit))
			{
				console.log("its at 0 height");
			}
			if (ShapeData[i].widthLimit == (outerWidth + ShapeData[i].widthLimit) ||
			ShapeData[i].widthLimit == (0 - ShapeData[i].widthLimit))
			{
				console.log("its at 0 width");
			}
		}
	}
}

export default BackgroundDynamic;

