import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
function App() {
	return (
		<div className="flex  items-center min-h-screen bg-clouds bg-clouds-100 flex-col">
			<AuthProvider>
				<Header />

				<div className="flex-auto flex items-center">
					<Outlet />
				</div>

				<Footer />
			</AuthProvider>
		</div>
	);
}

export default App;
