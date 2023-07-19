import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';
import { useState, useEffect, useRef } from 'react';
import Modal from '../common/Modal';
import { useSelector } from 'react-redux';

function Gallery() {
	const Items = useSelector((store) => store.flickrReducer.flickr);
	const openModal = useRef(null);
	const frame = useRef(null);
	const counter = useRef(0);
	const [Loader, setLoader] = useState(true);
	const [Index, setIndex] = useState(0);
	const enableEvent = useRef(true);

	useEffect(() => {
		counter.current = 0;
		const imgs = frame.current?.querySelectorAll('img');

		if (!imgs) return;

		imgs.forEach((img) => {
			img.onload = () => {
				++counter.current;

				if (counter.current === imgs.length) {
					setLoader(false);
					frame.current.classList.add('on');
					enableEvent.current = true;
				}
			};
		});
	}, [Items]);

	useEffect(() => {
		enableEvent.current = false;
		setLoader(true);
		frame.current.classList.remove('on');
	}, []);

	return (
		<>
			<Layout name={'Gallery'}>
				<section>
					<div className='inner'>
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
