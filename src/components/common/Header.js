import { faEnvira } from '@fortawesome/free-brands-svg-icons';
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
					<Link to='/'>
						<FontAwesomeIcon icon={faEnvira} />
					</Link>
				</h1>

				<nav>
					<ul id='gnb'>
						<li>
							<NavLink to='/department' activeClassName={active}>
								Department
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeClassName={active}>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeClassName={active}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/members' activeClassName={active}>
								Members
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' activeClassName={active}>
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink to='/community' activeClassName={active}>
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
