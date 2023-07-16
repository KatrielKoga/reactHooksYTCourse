import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UseState from './hooks/mustKnow/useState';
import UseEffect from './hooks/mustKnow/useEffect';
import UseContext from './hooks/mustKnow/useContext';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/useState" element={<UseState />} />
					<Route path="/useEffect" element={<UseEffect />} />
					<Route path="/useContext" element={<UseContext />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
