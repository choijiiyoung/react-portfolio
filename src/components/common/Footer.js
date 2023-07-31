import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useScheduleQuery } from '../../hooks/useScheduleQuery';

function Footer() {
	const { data: Schedules, isSuccess } = useScheduleQuery();
	return (
		<footer>
			<div className='footer_inner'>
				<div className='upper'>
					<h1 className='logo'>
						<img src={`${process.env.PUBLIC_URL}/img/common/logo.png`} alt='Bang & Olufsen' />
					</h1>
					<ul className='list'>
						{isSuccess &&
							Schedules.map((_, idx) => {
								if (idx >= 4) return null;
								return (
									<li key={idx}>
										<Link to='#'>Catalog</Link>
										<ul>
											{isSuccess &&
												Schedules.map((schedule, idx) => {
													if (idx >= 4) return null;
													return (
														<li key={idx}>
															<Link to='#'>{schedule.subj}</Link>
														</li>
													);
												})}
										</ul>
									</li>
								);
							})}
					</ul>

					<div className='util_wrap'>
						<div className='util'>
							<div className='input_wrap'>
								<label htmlFor='join'>Join us</label>
								<input type='text' id='join' placeholder='Your e-mail' />
							</div>
							<div className='chk_wrap'>
								<input type='checkbox' id='chk' />
								<label htmlFor='chk'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</label>
							</div>
						</div>
						<ul className='sns_list'>
							<li>
								<Link to='#'>
									<FontAwesomeIcon icon={faYoutube} />
								</Link>
							</li>
							<li>
								<Link to='#'>
									<FontAwesomeIcon icon={faInstagram} />
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
					<p>© Bang & Olufsen 2023</p>
					<address>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</address>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
