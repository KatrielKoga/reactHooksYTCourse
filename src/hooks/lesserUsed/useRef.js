import React, { useEffect, useRef, useState } from 'react';

// used to persist values between renders
export default function UseRef() {
	const [name, setName] = useState('');
	const inputRef = useRef();
	const prevName = useRef('');
	// const renderCount = useRef(1);

	// useEffect(() => {
	// 	renderCount.current = renderCount.current + 1;
	// });

	useEffect(() => {
		prevName.current = name;
	}, [name]);

	function focus() {
		inputRef.current.focus();
	}

	return (
		<>
			<input
				ref={inputRef}
				type="text"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<div>
				My name is <b>{name}</b> and it used to be <b>{prevName.current}</b>
			</div>
			<button onClick={focus}>Focus</button>
			{/* <div>I rendered {renderCount.current} times</div> */}
		</>
	);
}
