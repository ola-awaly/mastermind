export const createUser = async (user) => {
	const response = await fetch('/api/users/', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});
	let res = await response.json();
	if (response.ok) return res;
	else throw new Error(res.message);
};
