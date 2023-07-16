import React, { useState } from 'react';

// function startValue() {
// 	console.log('test');
// 	return 4;
// }

function UseState() {
	// this will be executed every time the state changes
	// const [count, setCount] = useState(startValue());

	// this will only call once in the application
	// const [count, setCount] = useState(() => 4) || useState(() => startValue());

	const [state, setState] = useState({ count: 4, theme: 'blue' });
	const count = state.count;
	const theme = state.theme;

	function decrementCount() {
		// setCount(prevCount => prevCount - 1);

		// it can't change two times in the same render, the value wont update
		// setCount(count - 1)

		// when dealing with object states it wil always overwirte the object, so it have to pass all the previous values plus the value you want to change
		setState(prevState => {
			return { ...prevState, count: prevState.count - 1 };
		});
	}

	function incrementCount() {
		// setCount(prevCount => prevCount + 1);
		setState(prevState => {
			return { ...prevState, count: prevState.count + 1 };
		});
	}
	return (
		<>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<span>{theme}</span>
			<button onClick={incrementCount}>+</button>
		</>
	);
}

export default UseState;
