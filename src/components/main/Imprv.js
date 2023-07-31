import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useYoutubeQuery } from '../../hooks/useYoutubeQuery';

function Imprv() {
	const { data: Vids, isSuccess } = useYoutubeQuery();
	const [Index, setIndex] = useState(0);

	return (
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
						{isSuccess &&
							Vids.map((vid, idx) => {
								if (idx >= 3) return null;
								return (
									<li onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''} key={idx}>
										<Link to='#'>
											<span className='num'>0{idx + 1}</span>
											<p>{vid.snippet.title}</p>
											<div className='cross'>
												<span className='bar row'></span>
												<span className='bar col'></span>
											</div>
										</Link>
										<div className='box'>
											<article className='img_area'>
												<img src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
											</article>
											<div className='txt'>
												<p>
													{vid.snippet.description.length > 300
														? vid.snippet.description.substr(0, 300) + '...'
														: vid.snippet.description}
												</p>
											</div>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
				<div className='btn_wrap'>
					<Link to='#' className='btn'>
						Explore our history
					</Link>
				</div>
			</div>
		</section>
	);
}

export default memo(Imprv);
