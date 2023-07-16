import { Outlet, Link } from 'react-router-dom';
import './layout.css';
const Layout = () => {
	return (
		<>
			<nav>
				<ul
					style={{
						display: 'flex',
						flexDirection: 'row',
						listStyleType: 'none',
					}}
				>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/useState">UseState</Link>
					</li>
					<li>
						<Link to="/useEffect">UseEffect</Link>
					</li>
				</ul>
			</nav>

			<div style={{ margin: 20 }}>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
