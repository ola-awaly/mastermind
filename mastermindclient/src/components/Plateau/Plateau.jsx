import React from 'react';
import { useEffect, useState } from 'react';
import Boule from '../Boule/Boule';
import Tentative from '../Tentative/Tentative';
import { useLoaderData } from 'react-router';
const Plateau = ({
	sol = [
		{ couleur: 'bg-green-800', pos: 1 },
		{ couleur: 'bg-blue-800', pos: 2 },
		{ couleur: 'bg-red-800', pos: 3 },
		{ couleur: 'bg-yellow-800', pos: 4 },
	],
}) => {
	const stats = useLoaderData();

	const [win, setWin] = useState(false);
	const [tentatives, setTentatives] = useState([{ id: 1, actif: true }]);
	console.log(win, tentatives);

	useEffect(() => {
		if (win) {
			console.log(win);

			setTentatives((prev) => {
				const updatedTentatives = [...prev]; // Crée une copie du tableau
				updatedTentatives.pop(); // Retire le dernier élément
				return updatedTentatives; // Retourne le tableau mis à jour
			});
		}
	}, [win]);
	return (
		<div className="flex flex-col items-center gap-2  justify-center mb-3 bg-clouds mt-2 flex-auto">
			{/* <h1 className="text-3xl text-blue-600 p-3">MastermindOla</h1>
			<p className="text-justify w-1/2 text-slate-500 text-xs font-thin">
				Tu as 8 tentatives pour trouver la bonne combinaison de boules,
				clique sur une boule pour changer sa couleur. Quand tu as fini
				clique sur check
			</p> */}
			{stats && stats.tentatives && (
				<p className="border border-slate-700 shadow text-sm rounded p-2 text-slate-800">
					Record : {stats.tentatives} tentatives
				</p>
			)}
			{(tentatives.length > 8 || win) && (
				<div className="border shadow bg-slate-200 p-2 rounded">
					{win && (
						<h1 className="text-red-800">
							Bravo <i className="fa-regular fa-handshake"></i>
						</h1>
					)}
					{!win && <h1 className="text-red-800">Hard luck !</h1>}
					<h2 className="font-bold">Solution</h2>
					<div className="flex">
						{sol.map((el, index) => (
							<Boule couleurInitial={el.couleur} key={index}></Boule>
						))}
					</div>
				</div>
			)}
			<ul className=" flex-auto flex  justify-start flex-col-reverse shadow-2xl  rounded">
				{tentatives.map(
					(el) =>
						el.id < 9 && (
							<Tentative
								sol={sol}
								setwin={setWin}
								win={win}
								id={el.id}
								key={el.id}
								setTentatives={setTentatives}
								tentatives={tentatives}
							></Tentative>
						)
				)}
			</ul>
		</div>
	);
};

export default Plateau;
