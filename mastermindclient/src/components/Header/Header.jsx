import logo from '../../assets/images/logo.png';
const Header = () => {
	return (
		<header className="flex items-center justify-between w-full p-2 bg-clouds-950">
			<img src={logo} className="rounded h-14 " alt="logo" />
			<ul className="flex gap-5 text-lg text-slate-200 font-light">
				<li>
					<i className="fa-solid fa-right-to-bracket"></i> S'enregistrer
				</li>
				<li>
					<i className="fa-solid fa-right-to-bracket"></i> Se connecter
				</li>
				<li>
					<i className="fa-solid fa-right-from-bracket"></i> Se déconnecter
				</li>
			</ul>
		</header>
	);
};

export default Header;
