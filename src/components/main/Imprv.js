import { memo } from 'react';
import { Link } from 'react-router-dom';

function Imprv() {
	return (
		<>
			<section id='imprv' className='my_scroll'>
				<div className='inner'>
					<div className='content'>
						<div className='title_area'>
							<h1>Always Improving</h1>
						</div>
						<div className='txt_area'>
							<p>
								<b>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate magnam deleniti quas harum alias,
									corporis ipsum
								</b>
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore explicabo sequi tenetur debitis esse
								blanditiis accusantium quibusdam. Ducimus, necessitatibus aspernatur.
							</p>
						</div>
					</div>
					<div className='acco_wrap'>
						<ul className='list'>
							<li className='on'>
								<Link to='#'>
									<span className='num'>01</span>
									<p>Lorem ipsum, dolor sit amet consectetur</p>
									<div className='cross'>
										<span className='bar row'></span>
										<span className='bar col'></span>
									</div>
								</Link>
								<div className='box'>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/imprv1.jpg`} alt={'img'} />
									</article>
									<div className='txt'>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi distinctio porro nihil. Debitis
											dicta minus maxime ratione iusto facilis dignissimos.adipisicing elit. Nisi distinctio porro
											nihil. Debitis dicta minus maxime ratione iusto facilis dignissimos
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi distinctio porro nihil. Debitis
											dicta minus maxime ratione iusto facilis dignissimos.
										</p>
									</div>
								</div>
							</li>
							<li>
								<Link to='#'>
									<span className='num'>02</span>
									<p>Lorem ipsum, dolor sit amet consectetur</p>
									<div className='cross'>
										<span className='bar row'></span>
										<span className='bar col'></span>
									</div>
								</Link>
								<div className='box'>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/imprv1.jpg`} alt={'img'} />
									</article>
									<div className='txt'>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi distinctio porro nihil. Debitis
											dicta minus maxime ratione iusto facilis dignissimos.
										</p>
									</div>
								</div>
							</li>
							<li>
								<Link to='#'>
									<span className='num'>03</span>
									<p>Lorem ipsum, dolor sit amet consectetur</p>
									<div className='cross'>
										<span className='bar row'></span>
										<span className='bar col'></span>
									</div>
								</Link>
								<div className='box'>
									<article className='img_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/imprv1.jpg`} alt={'img'} />
									</article>
									<div className='txt'>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi distinctio porro nihil. Debitis
											dicta minus maxime ratione iusto facilis dignissimos.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className='btn_wrap'>
						<Link to='#' className='btn'>
							Explore our history
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default memo(Imprv);
