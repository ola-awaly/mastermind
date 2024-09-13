export const login = async (credentials) => {
	const response = await fetch('/api/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});
	let res = await response.json();
	if (response.ok) return res;
	//else console.log(response);
	else throw new Error(res.message);
};

export const logout = async () => {
	await fetch('/api/users/logout', {
		method: 'delete',
	});
};
