import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { login, logout } from '../apis/security';

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const signin = async (credentials) => {
		let res = await login(credentials);
		if (res) setCurrentUser(res);
	};
	const signout = () => {
		logout();
		setCurrentUser(null);
	};
	return (
		<AuthContext.Provider value={{ signin, signout, currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
