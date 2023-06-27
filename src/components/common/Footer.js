import { faEnvira, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
	return (
		<footer>
			<div className='footer_inner'>
				<div className='upper'>
					<h1 className='logo'>
						<FontAwesomeIcon icon={faEnvira} />
					</h1>
					<ul className='list'>
						<li>
							<Link>Catalog</Link>
							<ul>
								<li>
									<Link>Speakers</Link>
								</li>
								<li>
									<Link>Headphones</Link>
								</li>
								<li>
									<Link>Televisions</Link>
								</li>
								<li>
									<Link>Accessories</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link>Catalog</Link>
							<ul>
								<li>
									<Link>Speakers</Link>
								</li>
								<li>
									<Link>Headphones</Link>
								</li>
								<li>
									<Link>Televisions</Link>
								</li>
								<li>
									<Link>Accessories</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link>Catalog</Link>
							<ul>
								<li>
									<Link>Speakers</Link>
								</li>
								<li>
									<Link>Headphones</Link>
								</li>
								<li>
									<Link>Televisions</Link>
								</li>
								<li>
									<Link>Accessories</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link>Catalog</Link>
							<ul>
								<li>
									<Link>Speakers</Link>
								</li>
								<li>
									<Link>Headphones</Link>
								</li>
								<li>
									<Link>Televisions</Link>
								</li>
								<li>
									<Link>Accessories</Link>
								</li>
							</ul>
						</li>
					</ul>

					<div className='util_wrap'>
						<div className='util'>
							{/* <div className="input_wrap">
                <label for="join">Join us</label>
                <input type="text" id="join" placeholder="Your e-mail">
              </div>
              <div className="chk_wrap">
                <input type="checkbox" id="chk">
                <label for="chk">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</label>
              </div> */}
						</div>
						<ul className='sns_list'>
							<li>
								<Link>
									<FontAwesomeIcon icon={faYoutube} />
								</Link>
							</li>
							<li>
								<Link>
									<FontAwesomeIcon icon={faFacebook} />
								</Link>
							</li>
							<li>
								<Link>
									<FontAwesomeIcon icon={faYoutube} />
								</Link>
							</li>
							<li>
								<Link>
									<FontAwesomeIcon icon={faFacebook} />
								</Link>
							</li>
							<li>
								<Link>
									<FontAwesomeIcon icon={faFacebook} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='lower'>
					<p>© Lorem ipsum 2023</p>
					<address>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</address>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
