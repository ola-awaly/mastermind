const PropSol = ({ pionsBlancs, pionsOranges, pionsVerts }) => {
	return (
		<div className="flex">
			{pionsVerts &&
				pionsVerts.map((e, index) => (
					<div
						className="bg-green-400 border size-2 m-1 rounded-full"
						key={index}
					></div>
				))}
			{pionsOranges &&
				pionsOranges.map((e, index) => (
					<div
						className="bg-orange-400 border size-2 m-1 rounded-full"
						key={index}
					></div>
				))}
			{pionsBlancs &&
				pionsBlancs.map((e, index) => (
					<div
						className="bg-white border size-2 m-1 rounded-full"
						key={index}
					></div>
				))}
		</div>
	);
};
export default PropSol;
