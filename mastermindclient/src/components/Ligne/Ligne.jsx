import React from 'react';
import Boule from '../Boule/Boule';

const Ligne = ({ setProp, actif }) => {
	return (
		<div className="flex ">
			<Boule setProp={setProp} pos={1} actif={actif} />
			<Boule setProp={setProp} pos={2} actif={actif} />
			<Boule setProp={setProp} pos={3} actif={actif} />
			<Boule setProp={setProp} pos={4} actif={actif} />
		</div>
	);
};

export default Ligne;
