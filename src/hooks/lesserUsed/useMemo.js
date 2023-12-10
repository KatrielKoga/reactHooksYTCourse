import React, { useState, useMemo, useEffect } from 'react';

// used like a cache
export default function UseMemo() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	const doubleNumber = useMemo(() => slowFunction(number), [number]);
	const themeStyles = useMemo(
		() => ({
			backgroundColor: dark ? 'black' : 'white',
			color: dark ? 'white' : 'black',
		}),
		[dark]
	);

	useEffect(() => console.log('theme changed'), [themeStyles]);

	return (
		<>
			<input
				type="number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark(prevDark => !prevDark)}>
				Change theme
			</button>
			<div style={themeStyles}>{doubleNumber}</div>
		</>
	);
}

function slowFunction(num) {
	console.log('Calling slow function');
	for (let i = 0; i < 1000000000; i++) {}
	return num * 2;
}
