import React, { useState, useEffect } from 'react';

function UseEffect() {
	// const [resourceType, setResourceType] = useState('posts');
	// const [items, setItems] = useState([]);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// useEffect(() => {
	// 	fetch(`http://jsonplaceholder.typicode.com/${resourceType}`)
	// 		.then(response => response.json())
	// 		.then(json => setItems(json));
	// }, [resourceType]);

	// useEffect(() => {
	// 	console.log('on mount');
	// }, [] /* is executed when the values inside the array changes, if empty only execute on mount */);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			// this will clear the listener when dismount
			// it will be executed before call the useEffect again when
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div>
			{/* <div>
				<button onClick={() => setResourceType('posts')}>Posts</button>
				<button onClick={() => setResourceType('users')}>Users</button>
				<button onClick={() => setResourceType('comments')}>Comments</button>
			</div>
			<h1>{resourceType}</h1>
			{items.map(item => {
				return <pre>{JSON.stringify(item)}</pre>;
			})} */}
			{windowWidth}
		</div>
	);
}

export default UseEffect;
