import { faEnvira, faFacebook, faFacebookF, faInstagram, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
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
							<Link to='#'>Catalog</Link>
							<ul>
								<li>
									<Link to='#'>Speakers</Link>
								</li>
								<li>
									<Link to='#'>Headphones</Link>
								</li>
								<li>
									<Link to='#'>Televisions</Link>
								</li>
								<li>
									<Link to='#'>Accessories</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to='#'>Catalog</Link>
							<ul>
								<li>
									<Link to='#'>Speakers</Link>
								</li>
								<li>
									<Link to='#'>Headphones</Link>
								</li>
								<li>
									<Link to='#'>Televisions</Link>
								</li>
								<li>
									<Link to='#'>Accessories</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to='#'>Catalog</Link>
							<ul>
								<li>
									<Link to='#'>Speakers</Link>
								</li>
								<li>
									<Link to='#'>Headphones</Link>
								</li>
								<li>
									<Link to='#'>Televisions</Link>
								</li>
								<li>
									<Link to='#'>Accessories</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to='#'>Catalog</Link>
							<ul>
								<li>
									<Link to='#'>Speakers</Link>
								</li>
								<li>
									<Link to='#'>Headphones</Link>
								</li>
								<li>
									<Link to='#'>Televisions</Link>
								</li>
								<li>
									<Link to='#'>Accessories</Link>
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
								<Link to='#'>
									<FontAwesomeIcon icon={faInstagram} />
								</Link>
							</li>
							<li>
								<Link to='#'>
									<FontAwesomeIcon icon={faFacebookF} />
								</Link>
							</li>
							<li>
								<Link to='#'>
									<FontAwesomeIcon icon={faTwitter} />
								</Link>
							</li>
							<li>
								<Link to='#'>
									<FontAwesomeIcon icon={faFacebookF} />
								</Link>
							</li>
							<li>
								<Link to='#'>
									<FontAwesomeIcon icon={faBlog} />
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
