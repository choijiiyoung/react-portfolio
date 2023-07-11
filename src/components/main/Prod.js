import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Prod() {
	return (
		<>
			<section id='prod'>
				<div class='inner'>
					<ul class='prod_list'>
						<li class='on'>
							<Link to='#'>
								<div class='cross'>
									<span class='bar row'></span>
									<span class='bar col'></span>
								</div>
								<p>Speakers</p>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
							<article class='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prod1.jpg`} alt={'img'} />
							</article>
						</li>
						<li>
							<Link to='#'>
								<div class='cross'>
									<span class='bar row'></span>
									<span class='bar col'></span>
								</div>
								<p>Headphones</p>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
							<article class='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prod1.jpg`} alt={'img'} />
							</article>
						</li>
						<li>
							<Link to='#'>
								<div class='cross'>
									<span class='bar row'></span>
									<span class='bar col'></span>
								</div>
								<p>Televisions</p>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
							<article class='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prod1.jpg`} alt={'img'} />
							</article>
						</li>
						<li>
							<Link to='#'>
								<div class='cross'>
									<span class='bar row'></span>
									<span class='bar col'></span>
								</div>
								<p>Accessories</p>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
							<article class='pic'>
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
