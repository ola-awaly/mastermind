import { useEffect, useState } from 'react';
import ChoixCouleurs from '../ChoixCouleurs/ChoixCouleurs';

const Boule = ({ setProp, pos, couleurInitial = 'slate', actif }) => {
	const [choixbool, setChoixbool] = useState(false);
	const [couleur, setCouleur] = useState(couleurInitial);
	const handleClick = () => {
		actif && setChoixbool(true);
	};
	useEffect(() => {
		console.log(couleur);
		if (couleur.includes('blue')) setCouleur('blue');
		if (couleur.includes('green')) setCouleur('green');
		if (couleur.includes('yellow')) setCouleur('yellow');
		if (couleur.includes('red')) setCouleur('red');
	}, [couleur]);
	return (
		<div className="relative">
			<div
				className={` p-4 size-8 rounded-full m-1  bg-gradient-to-b from-${couleur}-500 to-${couleur}-800 shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out`}
				onClick={handleClick}
			></div>
			{choixbool && (
				<ChoixCouleurs
					setChoix={setCouleur}
					setChoixbool={setChoixbool}
					setProp={setProp}
					pos={pos}
				/>
			)}
		</div>
	);
};

export default Boule;
