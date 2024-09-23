import React from 'react';
import { useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
	const { currentUser, signout } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<header className="flex items-center justify-between w-full p-2 bg-clouds-950 text-slate-200 text-md  font-light">
			<img src={logo} className="rounded h-14 " alt="logo" />
			{currentUser && (
				<span className="flex-auto ml-4 text-sm">
					Bonjour {currentUser.username}, <br />
					rappelle-toi que Dieu n'oublie jamais rien
				</span>
			)}
			<ul className="flex gap-5 ">
				{!currentUser ? (
					<>
						<li>
							<Link to="/inscription">
								<i className="fa-solid fa-right-to-bracket"></i>{' '}
								S'enregistrer
							</Link>
						</li>
						<li>
							<Link to="/connexion">
								<i className="fa-solid fa-right-to-bracket"></i> Se
								connecter
							</Link>
						</li>
					</>
				) : (
					<li>
						<Link
							onClick={async () => {
								await signout();
								navigate('/connexion');
							}}
						>
							<i className="fa-solid fa-right-from-bracket"></i> Se
							déconnecter
						</Link>
					</li>
				)}
			</ul>
		</header>
	);
};

export default Header;
