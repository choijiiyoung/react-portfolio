import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import Menu from './Menu';
import { useRef } from 'react';

function Header({ type }) {
	const toggleMenu = useRef(null);
	const active = 'on';
	return (
		<>
			{/* props로 전달되는 type값을 header의 class명으로 지정해서 스타일 분기처리 */}
			<header className={type}>
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
							<Link to='/etc'>
								<FontAwesomeIcon icon={faHeart} />
							</Link>
						</li>
						<li>
							<Link to='/etc2'>
								<FontAwesomeIcon icon={faUser} />
							</Link>
						</li>
						<li>
							<Link to='/etc3'>
								<FontAwesomeIcon icon={faBagShopping} />
							</Link>
						</li>
					</ul>

					<NavLink to='#' className='btn_mo'>
						<FontAwesomeIcon icon={faBars} onClick={() => toggleMenu.current.toggle()} />
					</NavLink>
				</div>
			</header>
			<Menu ref={toggleMenu} />
		</>
	);
}

export default Header;
