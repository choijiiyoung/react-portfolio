import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

function Header() {
	const active = 'on';
	return (
		<header>
			<div className='header_inner'>
				<h1 className='logo'>
					<Link to='/'>LOGO</Link>
				</h1>

				<nav>
					<ul className='gnb'>
						<li>
							<NavLink to='/department' activeclass={active}>
								Department
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeclass={active}>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeclass={active}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/members' activeclass={active}>
								Members
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' activeclass={active}>
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink to='/community' activeclass={active}>
								Community
							</NavLink>
						</li>
					</ul>
				</nav>

				<ul className='util'>
					<li>
						<NavLink to='#'>
							<FontAwesomeIcon icon={faHeart} />
						</NavLink>
					</li>
					<li>
						<NavLink to='#'>
							<FontAwesomeIcon icon={faUser} />
						</NavLink>
					</li>
					<li>
						<NavLink to='#'>
							<FontAwesomeIcon icon={faBagShopping} />
						</NavLink>
					</li>
				</ul>

				<NavLink to='#' className='btn_mo'>
					<FontAwesomeIcon icon={faBars} />
				</NavLink>
			</div>
		</header>
	);
}

export default Header;
