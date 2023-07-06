import Layout from '../common/Layout';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import { useState, useEffect, useRef } from 'react';

function Gallery() {
	const frame = useRef(null);
	const [Items, setItems] = useState([]);
	const [Loader, setLoader] = useState(true);

	const getFlickr = async (opt) => {
		const baseURL = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=1`;
		const key = 'db5673d91b2fb6704d13f6b0181efd99';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const num = 50;
		let url = '';
		let counter = 0;

		if (opt.type === 'interest') url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
		if (opt.type === 'user')
			url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.user}`;

		const result = await axios.get(url);
		setItems(result.data.photos.photo);

		const imgs = frame.current.querySelectorAll('img');
		imgs.forEach((img, idx) => {
			img.onload = () => {
				++counter;

				if (counter === imgs.length) {
					setLoader(false);
					frame.current.classList.add('on');
				}
			};
		});
	};

	// useEffect(() => getFlickr({ type: 'user', user: '198483448@N02' }), []);
	useEffect(() => getFlickr({ type: 'interest' }), []);

	return (
		<Layout name={'Gallery'}>
			<section>
				<div className='inner'>
					<div className='frame' ref={frame}>
						<Masonry elementType={'div'} options={{ transitionDuration: '0.5s' }}>
							{Items.map((item, idx) => {
								return (
									<article key={idx}>
										<div className='item'>
											<div className='pic'>
												<img
													src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
													alt={item.title}
												/>
											</div>

											<div className='profile'>
												<img
													src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
													alt={item.owner}
													onError={(e) => e.target.setAttribute('src', 'https://www.flickr.com/images/buddyicon.gif')}
												/>
												<p>{item.title}</p>
												<span>{item.owner}</span>
											</div>
										</div>
									</article>
								);
							})}
						</Masonry>
					</div>
					{Loader && <img className='loader' src={`${process.env.PUBLIC_URL}/img/gallery/loading.gif`} alt='loader' />}
				</div>
			</section>
		</Layout>
	);
}

export default Gallery;
