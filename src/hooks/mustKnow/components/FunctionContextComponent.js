import React from 'react';
import { useTheme, useThemeUpdate } from '../ThemeContext';

export default function FuncitonContextComponent() {
	const darkTHeme = useTheme();
	const toggleTheme = useThemeUpdate();
	const themeStyles = {
		backgroundColor: darkTHeme ? '#333' : '#CCC',
		color: darkTHeme ? '#ccc' : '#333',
		padding: '2rem',
		margin: '2rem',
	};
	return (
		<>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<div style={themeStyles}>Funtion Theme</div>
		</>
	);
}
