export const login = async (credentials) => {
	const response = await fetch('/api/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});
	let res = await response.json();
	if (response.ok) {
		localStorage.setItem('userid', res._id);
		return res;
	}
	//else console.log(response);
	else throw new Error(res.message);
};

export const logout = async () => {
	localStorage.removeItem('userid');
	await fetch('/api/users/logout', {
		method: 'delete',
	});
};

export const getCurrentUser = async () => {
	const response = await fetch('/api/users/current');
	if (response.ok) {
		let user = await response.json();
		localStorage.setItem('userid', user._id);
		return user;
	} else return null;
};
