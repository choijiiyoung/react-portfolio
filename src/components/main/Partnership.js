import { memo } from 'react';
import { useFlickrQuery } from '../../hooks/useFlickerQuery';
import { useState, useEffect } from 'react';

function Partnership() {
	const [Mounted, setMounted] = useState(true);
	const { data: Flickr, isSuccess } = useFlickrQuery({ type: 'user', user: '198483448@N02' });

	useEffect(() => {
		return () => setMounted(false);
	}, []);

	return (
		<>
			<section id='partnership' className='my_scroll'>
				<div className='inner'>
					<h1>Partnership</h1>
					<div className='prs_wrap'>
						{Mounted &&
							isSuccess &&
							Flickr.map((pic, idx) => {
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
