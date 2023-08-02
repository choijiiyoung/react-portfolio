import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalContext';

function Header({ type }) {
	const { MenuOpen, setMenuOpen } = useGlobalData();
	const active = 'on';
	return (
		<>
			{/* props로 전달되는 type값을 header의 class명으로 지정해서 스타일 분기처리 */}
			<header className={type}>
				<div className='header_inner'>
					<h1 className='logo'>
						<Link to='/'>
							<img src={`${process.env.PUBLIC_URL}/img/common/logo.png`} alt='Bang & Olufsen' />
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
							<Link to='/gallery'>
								<FontAwesomeIcon icon={faHeart} />
							</Link>
						</li>
						<li>
							<Link to='/member'>
								<FontAwesomeIcon icon={faUser} />
							</Link>
						</li>
						<li>
							<Link to='/community'>
								<FontAwesomeIcon icon={faBagShopping} />
							</Link>
						</li>
					</ul>

					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							setMenuOpen(!MenuOpen);
						}}
					/>
				</div>
			</header>
		</>
	);
}

export default memo(Header);
