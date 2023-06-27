import { Link, NavLink } from 'react-router-dom';

function Header() {
	const active = 'on';
	return (
		<header>
			<div class='header_inner'>
				<h1 class='logo'>
					<Link to='/'>LOGO</Link>
				</h1>

				<nav>
					<ul class='gnb'>
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

				<ul class='util'>
					<li>
						<NavLink to='#'>
							<i class='fa-regular fa-heart'></i>
						</NavLink>
					</li>
					<li>
						<NavLink to='#'>
							<i class='fa-regular fa-user'></i>
						</NavLink>
					</li>
					<li>
						<NavLink to='#'>
							<i class='fa-solid fa-bag-shopping'></i>
						</NavLink>
					</li>
				</ul>

				<NavLink to='#' class='btn_mo'>
					<i class='fa-solid fa-bars'></i>
				</NavLink>
			</div>
		</header>
	);
}

export default Header;
