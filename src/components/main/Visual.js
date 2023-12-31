import { memo } from 'react';
import { Link } from 'react-router-dom';

function Visual() {
	return (
		<>
			<figure id='visual' className='my_scroll on'>
				<div className='inner'>
					<div className='title_wrap'>
						<h1>
							<span className='title'>Hear.</span>
							<span className='title'>See.</span>
							<span className='title small'>
								<span>Like nothing</span>
								<span>you've heard before</span>
								<span className='line'></span>
							</span>
							<span className='title last'>Feel.</span>
						</h1>
					</div>

					<article className='pic'>
						<img src={`${process.env.PUBLIC_URL}/img/main/visual.jpg`} alt={'visual'} />
					</article>

					<div className='txt_wrap'>
						<div className='txt'>
							<div className='desc'>
								<p>
									Bang & Olufsen has been designing the future <span>since 1925.</span>
								</p>
								<p>We have never been afraid to the edge of possibility.</p>
							</div>
							<div className='cross'>
								<span className='bar row'></span>
								<span className='bar col'></span>
							</div>
						</div>
						<Link to='#' className='btn'>
							DISCOVER
						</Link>
					</div>
				</div>
			</figure>
		</>
	);
}

export default memo(Visual);
