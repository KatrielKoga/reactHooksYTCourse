import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UseState from './hooks/mustKnow/useState';
import UseEffect from './hooks/mustKnow/useEffect';
import UseContext from './hooks/mustKnow/useContext';
import UseRef from './hooks/lesserUsed/useRef';
import UseMemo from './hooks/lesserUsed/useMemo';
import UseCallBack from './hooks/lesserUsed/useCallback';
import UseReducer from './hooks/lesserUsed/useReducer';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/useState" element={<UseState />} />
					<Route path="/useEffect" element={<UseEffect />} />
					<Route path="/useContext" element={<UseContext />} />
					<Route path="/useRef" element={<UseRef />} />
					<Route path="/useMemo" element={<UseMemo />} />
					<Route path="/useCallback" element={<UseCallBack />} />
					<Route path="/useReducer" element={<UseReducer />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
