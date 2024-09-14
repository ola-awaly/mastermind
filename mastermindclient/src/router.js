import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Connexion from './pages/Connexion/Connexion';
import Inscription from './pages/Inscription/Inscription';
import Plateau from './components/Plateau/Plateau';
import { appLoader } from './loaders/appLoader';
import { mastermindLoader } from './loaders/mastermindLoader';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		loader: appLoader,
		errorElement: 'error element',
		children: [
			{
				index: true,
			},
			{
				path: 'inscription',
				errorElement: 'error element',
				element: <Inscription />,
			},
			{
				path: 'connexion',
				errorElement: 'error element',
				element: <Connexion />,
			},
			{
				path: 'mastermind',
				loader: mastermindLoader,
				errorElement: 'error element',
				element: <Plateau />,
			},
		],
	},
]);
