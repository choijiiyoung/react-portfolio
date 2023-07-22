import { memo } from 'react';
import { useSelector } from 'react-redux';

function Partnership() {
	const { flickr } = useSelector((store) => store.flickrReducer);

	return (
		<>
			<section id='partnership' className='my_scroll'>
				<div className='inner'>
					<h1>Partnership</h1>
					<div className='prs_wrap'>
						{flickr.map((pic, idx) => {
							if (idx >= 2) return null;
							return (
								<div className='item' key={pic.id}>
									<div className='name'>
										<p>{pic.title}</p>
										<div className='cross'>
											<span className='bar row'></span>
											<span className='bar col'></span>
										</div>
									</div>
									<article className='img_area'>
										<img
											src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
											alt={pic.title}
										/>
									</article>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default memo(Partnership);
