export const getStats = async () => {
	const userid = localStorage.getItem('userid');
	let response = null;
	if (userid) {
		response = await fetch(`/api/stats/${userid}`);
		let res = await response.json();
		if (response.ok) {
			console.log('return' + res);
			return res;
		} else {
			console.log('return message' + res.message);
			return res.message;
		}
	}
	return {};
};

export const setStats = async (stats) => {
	const userid = localStorage.getItem('userid');
	let response = null;
	if (userid) {
		response = await fetch(`/api/stats/${userid}`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: stats.name,
				tentatives: stats.tentatives,
			}),
		});
		let res = await response.json();
		if (response.ok) {
			console.log('return' + res);
			return res;
		} else {
			console.log('return message' + res.message);
			return res.message;
		}
	}
};
