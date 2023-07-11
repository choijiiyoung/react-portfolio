import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Prod() {
	return (
		<>
			<section id='prod'>
				<div className='inner'>
					<ul className='prod_list'>
						<li className='on'>
							<Link to='#'>
								<div className='cross'>
									<span className='bar row'></span>
									<span className='bar col'></span>
								</div>
								<p>Speakers</p>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
							<article className='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prod1.jpg`} alt={'img'} />
							</article>
						</li>
						<li>
							<Link to='#'>
								<div className='cross'>
									<span className='bar row'></span>
									<span className='bar col'></span>
								</div>
								<p>Headphones</p>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
							<article className='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prod1.jpg`} alt={'img'} />
							</article>
						</li>
						<li>
							<Link to='#'>
								<div className='cross'>
									<span className='bar row'></span>
									<span className='bar col'></span>
								</div>
								<p>Televisions</p>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
							<article className='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prod1.jpg`} alt={'img'} />
							</article>
						</li>
						<li>
							<Link to='#'>
								<div className='cross'>
									<span className='bar row'></span>
									<span className='bar col'></span>
								</div>
								<p>Accessories</p>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
							<article className='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prod1.jpg`} alt={'img'} />
							</article>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Prod;
