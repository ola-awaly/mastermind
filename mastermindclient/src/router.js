import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Connexion from './pages/Connexion/Connexion';
import Inscription from './pages/Inscription/Inscription';
import Plateau from './components/Plateau/Plateau';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: 'error element',
		children: [
			{
				index: true,
			},
			{
				path: 'inscription',
				element: <Inscription />,
			},
			{
				path: 'connexion',
				errorElement: 'error element',
				element: <Connexion />,
			},
			{
				path: 'mastermind',
				element: <Plateau />,
			},
		],
	},
]);
