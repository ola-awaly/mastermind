import React from 'react';
const ChoixCouleurs = ({ setChoix, setChoixbool, setProp, pos }) => {
	const handleClick = (coul) => {
		setChoix(coul);
		setChoixbool(false);
		setProp((prevprop) =>
			prevprop.map((element) =>
				element.pos === pos ? { ...element, couleur: coul } : element
			)
		);
	};
	return (
		<div className="absolute size-28 right-[-35px] bottom-10 bg-slate-400 grid grid-cols-2 border-2 justify-center items-center shadow-inner rounded-md">
			<div
				data-testid="boule-yellow"
				className={` p-2 size-11 rounded-full m-1 bg-gradient-to-b from-yellow-500 to-yellow-800 shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out`}
				onClick={() => handleClick('bg-yellow-800')}
			></div>
			<div
				data-testid="boule-blue"
				className={` p-2 size-11 rounded-full m-1 bg-gradient-to-b from-blue-500 to-blue-800 shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out`}
				onClick={() => handleClick('bg-blue-800')}
			></div>
			<div
				data-testid="boule-red"
				className={` p-2 size-11 rounded-full m-1 bg-gradient-to-b from-red-500 to-red-800 shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out`}
				onClick={() => handleClick('bg-red-800')}
			></div>
			<div
				data-testid="boule-green"
				className={` p-2 size-11 rounded-full m-1 bg-gradient-to-b from-green-500 to-green-800 shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out`}
				onClick={() => handleClick('bg-green-800')}
			></div>
			<div className="w-24 h-24 hidden rounded-full bg-gradient-to-b from-slate-500 to-slate-800 shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"></div>
		</div>
	);
};

export default ChoixCouleurs;
