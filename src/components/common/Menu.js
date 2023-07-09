import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	const active = { color: 'aqua' };

	//윈도우 리사이즈 이벤트
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1000) setOpen(false);
		});
	}, []);

	useImperativeHandle(ref, () => {
		return { toggle: () => setOpen(!Open) };
	});

	return (
		<>
			{Open && (
				<nav id='mobilePanel' onClick={() => setOpen(false)}>
					<h1>
						<Link to='/'>LOGO</Link>
					</h1>

					<ul id='gnb'>
						<li>
							<NavLink to='/department' activeStyle={active}>
								Department
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeStyle={active}>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeStyle={active}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/member' activeStyle={active}>
								Member
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' activeStyle={active}>
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink to='/community' activeStyle={active}>
								Community
							</NavLink>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
});

export default Menu;
