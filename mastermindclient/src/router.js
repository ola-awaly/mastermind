import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Connexion from './pages/Connexion/Connexion';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: 'error element',
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: 'senregistrer',
				element: <Connexion />,
			},
			{
				path: 'connexion',
				errorElement: 'error element',
				element: <Connexion />,
			},
		],
	},
]);
