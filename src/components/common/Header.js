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
							<NavLink to='/member' activeClassName={active}>
								Member
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
						<Link to='#'>
							<FontAwesomeIcon icon={faHeart} />
						</Link>
					</li>
					<li>
						<Link to='#'>
							<FontAwesomeIcon icon={faUser} />
						</Link>
					</li>
					<li>
						<Link to='#'>
							<FontAwesomeIcon icon={faBagShopping} />
						</Link>
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
