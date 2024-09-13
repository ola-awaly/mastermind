import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {
	return (
		<div className="flex  items-center min-h-screen bg-clouds bg-clouds-100 flex-col">
			<Header />
			{/* <Plateau /> */}
			<div className="flex-auto flex items-center">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
}

export default App;
