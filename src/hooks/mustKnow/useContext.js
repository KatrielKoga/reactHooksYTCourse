import React from 'react';
import { ThemeProvider } from './ThemeContext';
import FuncitonContextComponent from './components/FunctionContextComponent';

export default function UseContext() {
	return (
		<ThemeProvider>
			<FuncitonContextComponent />
		</ThemeProvider>
	);
}
