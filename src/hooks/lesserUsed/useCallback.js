import React, { useState, useCallback } from 'react';
import List from './components/list';

export default function UseCallBack() {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	// similar to use memo
	// use callback returns the entire function for the const
	// use memo returns the processed value to the const
	const getItems = useCallback(
		(incrementor = 0) => {
			return [
				number + incrementor,
				number + 1 + incrementor,
				number + 2 + incrementor,
			];
		},
		[number]
	);

	// when called outside use callback the function getItems is recreated every time the
	// component is rendered, so if the theme changes the function is recriated and
	// the list componet receives a new function that does not affect its funcionality

	const theme = {
		backgroundColor: dark ? '#333' : '#fff',
		color: dark ? '#fff' : '#333',
	};

	return (
		<div style={theme}>
			<input
				type="number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark(prevDark => !prevDark)}>
				Toggle theme
			</button>
			<List getItems={getItems} />
		</div>
	);
}
