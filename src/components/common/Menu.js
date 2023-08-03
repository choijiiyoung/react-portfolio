import { useSelector, useDispatch } from 'react-redux';
import { close } from '../../redux/menuSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';

function Menu() {
	const active = { color: 'aqua' };
	const dispatch = useDispatch();
	const menu = useSelector((store) => store.menu.open);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1200) dispatch(close());
		});
	}, [dispatch]);

	return (
		<AnimatePresence>
			{menu && (
				<motion.nav
					id='mobilePanel'
					initial={{ opacity: 0, x: -280 }}
					animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, x: -280, transition: { duration: 0.5 } }}
					onClick={() => dispatch(close())}
				>
					<h1>
						<Link to='/'>
							<img src={`${process.env.PUBLIC_URL}/img/common/logo_mo.jpg`} alt='Bang & Olufsen' />
						</Link>
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
				</motion.nav>
			)}
		</AnimatePresence>
	);
}

export default Menu;
