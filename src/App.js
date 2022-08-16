import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Contacts } from './components/Contacts/Contacts';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="*" element={<Home />} />
				{/* <Route path="/lacus-react" element={<Home />} />
				<Route path="/lacus-react/about" element={<About />} />
				<Route path="/lacus-react/contacts" element={<Contacts />} /> */}
			</Routes>

			<Footer />
		</>
	);
}

export default App;