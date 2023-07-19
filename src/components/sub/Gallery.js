import Layout from '../common/Layout';
import Masonry from 'react-masonry-component';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlickr } from '../../redux/flickrSlice';
import Modal from '../common/Modal';

function Gallery() {
	const dispatch = useDispatch();
	const openModal = useRef(null);
	const isUser = useRef(true);
	const searchInput = useRef(null);
	const btnSet = useRef(null);
	const enableEvent = useRef(true);
	const frame = useRef(null);
	const [Loader, setLoader] = useState(true);
	const [Index, setIndex] = useState(0);
	const counter = useRef(0);
	const Items = useSelector((store) => store.flickr.data);
	const firstLoaded = useRef(true);

	const resetGallery = (e) => {
		const btns = btnSet.current.querySelectorAll('button');
		btns.forEach((el) => el.classList.remove('on'));
		e.target.classList.add('on');
		enableEvent.current = false;
		setLoader(true);
		frame.current.classList.remove('on');
	};

	const showInterest = (e) => {
		if (!enableEvent.current) return;
		if (e.target.classList.contains('on')) return;

		resetGallery(e);
		dispatch(fetchFlickr({ type: 'interest' }));
		isUser.current = false;
	};

	const showMine = (e) => {
		if (!enableEvent.current) return;
		if (e.target.classList.contains('on')) return;

		resetGallery(e);
		dispatch(fetchFlickr({ type: 'user', user: '164021883@N04' }));
	};

	const showSearch = (e) => {
		const tag = searchInput.current.value.trim();
		if (tag === '') return alert('검색어를 입력하세요.');
		if (!enableEvent.current) return;

		resetGallery(e);
		dispatch(fetchFlickr({ type: 'search', tags: tag }));
		searchInput.current.value = '';
		isUser.current = false;
	};

	useEffect(() => {
		console.log(Items);
		counter.current = 0;
		if (Items.length === 0 && !firstLoaded.current) {
			setLoader(false);
			frame.current.classList.add('on');
			const btnMine = btnSet.current.children;
			btnMine[1].classList.add('on');
			dispatch(fetchFlickr({ type: 'user', user: '164021883@N04' }));
			enableEvent.current = true;
			return alert('이미지 결과값이 없습니다.');
		}
		firstLoaded.current = false;
		const imgs = frame.current.querySelectorAll('img');

		imgs.forEach((img) => {
			img.onload = () => {
				++counter.current;

				if (counter.current === imgs.length - 2) {
					setLoader(false);
					frame.current.classList.add('on');
					enableEvent.current = true;
				}
			};
		});
	}, [Items, dispatch]);

	return (
		<>
			<Layout name={'Gallery'}>
				<section>
					<div className='inner'>
						<div className='top_wrap'>
							<div className='btn_wrap' ref={btnSet}>
								<button onClick={showInterest}>Interest Gallery</button>
								<button className='on' onClick={showMine}>
									My Gallery
								</button>
							</div>

							<div className='search_box'>
								<input
									type='text'
									placeholder='검색어를 입력하세요.'
									ref={searchInput}
									onKeyPress={(e) => e.key === 'Enter' && showSearch(e)}
								/>
								<button onClick={showSearch}>Seach</button>
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
													<span
														onClick={(e) => {
															if (isUser.current) return;
															isUser.current = true;
															setLoader(true);
															frame.current.classList.remove('on');
															dispatch(fetchFlickr({ type: 'user', user: e.target.innerText }));
														}}
													>
														{item.owner}
													</span>
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
