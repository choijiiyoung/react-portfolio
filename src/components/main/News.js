import { memo } from 'react';
import { Link } from 'react-router-dom';

function News() {
	return (
		<>
			<section id='news' className='my_scroll'>
				<div className='inner'>
					<div className='content'>
						<div className='title_area'>
							<h1>Our articles</h1>
							<Link to='#' className='btn_view'>
								VIEW ALL
							</Link>
						</div>
						<div className='txt_area'>
							<ul className='news_list'>
								<li>
									<div className='inner_area'>
										<div className='cont'>
											<span>Lorem ipsum dolor</span>
											<p className='title'>
												<b>Lorem ipsum dolor sit amet.</b>
											</p>
											<p className='txt'>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, deserunt!Lorem ipsum dolor
												sit amet consectetur adipisicing elit. Inventore, deserunt!
											</p>
										</div>
										<Link to='#' className='btn_view'>
											READ MORE
										</Link>
									</div>
								</li>
								<li>
									<div className='inner_area'>
										<div className='cont'>
											<span>Lorem ipsum dolor</span>
											<p className='title'>
												<b>Lorem ipsum dolor</b>
											</p>
											<p className='txt'>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, deserunt!
											</p>
										</div>
										<Link to='#' className='btn_view'>
											READ MORE
										</Link>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default memo(News);
