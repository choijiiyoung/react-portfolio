import Layout from '../common/Layout';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import { useState, useEffect, useRef, useCallback } from 'react';
import Modal from '../common/Modal';

function Gallery() {
	const openModal = useRef(null);
	const frame = useRef(null);
	const [Items, setItems] = useState([]);
	const [Loader, setLoader] = useState(true);
	const [Index, setIndex] = useState(0);

	const getFlickr = useCallback(async (opt) => {
		const baseURL = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=1`;
		const key = 'db5673d91b2fb6704d13f6b0181efd99';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const num = 20;
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
	}, []);

	useEffect(() => getFlickr({ type: 'interest' }), [getFlickr]);

	return (
		<>
			<Layout name={'Gallery'}>
				<section>
					<div className='inner'>
						<div className='top_wrap'>
							<div className='btn_wrap'>
								<button>Interest Gallery</button>
								<button className='on'>My Gallery</button>
							</div>

							<div className='search_box'>
								<input type='text' placeholder='검색어를 입력하세요.' />
								<button>Seach</button>
							</div>
						</div>

						<div className='frame' ref={frame}>
							<Masonry elementType={'div'} options={{ transitionDuration: '0.5s' }}>
								{Items.map((item, idx) => {
									return (
										<article key={idx}>
											<div className='item'>
												<div
													className='pic'
													onClick={() => {
														openModal.current?.open();
														setIndex(idx);
													}}
												>
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
						{Loader && (
							<img className='loader' src={`${process.env.PUBLIC_URL}/img/gallery/loading.gif`} alt='loader' />
						)}
					</div>
				</section>
			</Layout>

			<Modal ref={openModal}>
				<img
					src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
					alt={Items[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Gallery;
