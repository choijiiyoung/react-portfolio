import { memo } from 'react';
import { Link } from 'react-router-dom';

function Collabo() {
	return (
		<>
			<section id='collabo' className='my_scroll'>
				<div className='inner'>
					<h1>Collaborations</h1>
					<div className='collabo_wrap'>
						<ul className='collabo_list'>
							<li>
								<Link to='#'>
									<span className='name'>Lorem</span>
								</Link>
								<div className='box'>
									<div className='txt_area'>
										<span className='name'>Lorem</span>
										<div className='cross'>
											<span className='bar row'></span>
											<span className='bar col'></span>
										</div>
									</div>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/collab1.jpg`} alt={'collabo'} />
									</article>
								</div>
							</li>
							<li className='on'>
								<Link to='#'>
									<span className='name'>Lorem</span>
								</Link>
								<div className='box'>
									<div className='txt_area'>
										<span className='name'>Lorem</span>
										<div className='cross'>
											<span className='bar row'></span>
											<span className='bar col'></span>
										</div>
									</div>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/collab1.jpg`} alt={'collabo'} />
									</article>
								</div>
							</li>
							<li>
								<Link to='#'>
									<span className='name'>Lorem</span>
								</Link>
								<div className='box'>
									<div className='txt_area'>
										<span className='name'>Lorem</span>
										<div className='cross'>
											<span className='bar row'></span>
											<span className='bar col'></span>
										</div>
									</div>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/collab1.jpg`} alt={'collabo'} />
									</article>
								</div>
							</li>
							<li>
								<Link to='#'>
									<span className='name'>Lorem</span>
								</Link>
								<div className='box'>
									<div className='txt_area'>
										<span className='name'>Lorem</span>
										<div className='cross'>
											<span className='bar row'></span>
											<span className='bar col'></span>
										</div>
									</div>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/collab1.jpg`} alt={'collabo'} />
									</article>
								</div>
							</li>
							<li>
								<Link to='#'>
									<span className='name'>Lorem</span>
								</Link>
								<div className='box'>
									<div className='txt_area'>
										<span className='name'>Lorem</span>
										<div className='cross'>
											<span className='bar row'></span>
											<span className='bar col'></span>
										</div>
									</div>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/collab1.jpg`} alt={'collabo'} />
									</article>
								</div>
							</li>
							<li>
								<Link to='#'>
									<span className='name'>Lorem</span>
								</Link>
								<div className='box'>
									<div className='txt_area'>
										<span className='name'>Lorem</span>
										<div className='cross'>
											<span className='bar row'></span>
											<span className='bar col'></span>
										</div>
									</div>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/collab1.jpg`} alt={'collabo'} />
									</article>
								</div>
							</li>
							<li>
								<Link to='#'>
									<span className='name'>Lorem</span>
								</Link>
								<div className='box'>
									<div className='txt_area'>
										<span className='name'>Lorem</span>
										<div className='cross'>
											<span className='bar row'></span>
											<span className='bar col'></span>
										</div>
									</div>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/collab1.jpg`} alt={'collabo'} />
									</article>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default memo(Collabo);
