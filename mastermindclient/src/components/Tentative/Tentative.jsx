import Ligne from '../Ligne/Ligne';
import { useState, useEffect } from 'react';
import PropSol from './PropSol';
import { setStats } from '../../apis/gameStats';
const Tentative = ({
	sol,
	setwin,
	win,
	id,

	setTentatives,
	tentatives,
}) => {
	const [active, setActive] = useState(true);
	const [prop, setProp] = useState([
		{ couleur: 'bg-black', pos: 1 },
		{ couleur: 'bg-black', pos: 2 },
		{ couleur: 'bg-black', pos: 3 },
		{ couleur: 'bg-black', pos: 4 },
	]);
	const [pionsVerts, setPionsVerts] = useState([]);
	const [pionsOranges, setPionsOranges] = useState([]);
	const [pionsBlancs, setPionsBlancs] = useState([]);
	const handleCheck = () => {
		let g = false;

		setPionsBlancs([]);
		setPionsOranges([]);
		setPionsVerts([]);
		prop.forEach((element) => {
			console.log(element);
			const corres = sol.find(
				(elemsol) => elemsol.couleur === element.couleur
			);
			if (corres && corres.pos === element.pos) {
				setPionsVerts((prev) => {
					if (prev.length === 3) g = true;
					return [...prev, 1];
				});
			} else if (corres) setPionsOranges((prev) => [...prev, 1]);
			else setPionsBlancs((prev) => [...prev, 1]);
		});
		setActive(false);
		if (g === false) {
			console.log({ g });
			setTentatives((prev) => {
				if (prev.length < 9)
					return [...prev, { id: prev.length + 1, actif: true }];
			});
		}
	};
	useEffect(() => {
		const setRecord = async (nbreTentatives) => {
			await setStats({ tentatives: nbreTentatives, name: 'mastermind' });
		};
		if (pionsVerts.length >= 3) {
			setwin(true);
			setRecord(tentatives.length);
		}
	}, [pionsVerts.length, setwin, active, tentatives.length]);

	return active ? (
		<li className="relative flex gap-2 border p-2 border-blue-800 rounded bg-blue-200 items-center justify-end shadow-2xl">
			<div className="absolute top-0 left-1 text-xs  text-slate-500 ">
				{id}
			</div>
			<PropSol
				pionsBlancs={pionsBlancs}
				pionsOranges={pionsOranges}
				pionsVerts={pionsVerts}
			></PropSol>
			<Ligne setProp={setProp} actif={active}></Ligne>
			<button
				className="bg-blue-600 px-4 py-1 rounded-md text-sm text-white"
				onClick={handleCheck}
			>
				Check
			</button>
		</li>
	) : (
		<li className="relative flex gap-2 border p-2 border-gray-800 rounded bg-gray-200 items-center shadow-2xl">
			<div className="absolute top-0 left-1 text-xs  text-slate-500 ">
				{id}
			</div>
			<PropSol
				pionsBlancs={pionsBlancs}
				pionsOranges={pionsOranges}
				pionsVerts={pionsVerts}
			></PropSol>
			<Ligne actif={active}></Ligne>
			<button
				className="bg-gray-600 px-4 py-1 rounded-md text-sm text-white"
				disabled
			>
				Check
			</button>
		</li>
	);
};

export default Tentative;
