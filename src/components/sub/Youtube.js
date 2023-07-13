import Layout from '../common/Layout';
import Modal from '../common/Modal';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Youtube() {
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	const Txts = useSelector((store) => store.youtubeReducer.youtubetxt);
	const Thumbs = useSelector((store) => store.youtubeThumbReducer.youtube);

	//슬라이드
	const frame = useRef(null);
	const panel = useRef(null);
	let [ActiveNum, setActiveNum] = useState(0);

	//App.js에서 유튜브 데이터를 불러오고있으므르 메인에서 유튜브 페이지로 가면 index값 잘 적용되서 나옴
	useEffect(() => {
		frame.current.append(frame.current.firstElementChild);
		frame.current.append(frame.current.firstElementChild);
	}, []);

	//팝업
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	const [State, setState] = useState(0);

	//슬라이드 Next 버튼
	const btnNext = () => {
		const panels = panel.current.querySelectorAll('.panel');
		frame.current.append(frame.current.firstElementChild);
		ActiveNum === frame.current.children.length - 1 ? setActiveNum(0) : setActiveNum(++ActiveNum);
		activation(panels, ActiveNum);
	};

	//슬라이드 Prev 버튼
	const btnPrev = () => {
		const panels = panel.current.querySelectorAll('.panel');
		frame.current.prepend(frame.current.lastElementChild);
		ActiveNum === 0 ? setActiveNum(frame.current.children.length - 1) : setActiveNum(--ActiveNum);
		activation(panels, ActiveNum);
	};

	const activation = (arr, idx) => {
		for (const el of arr) el.classList.remove('on');
		arr[idx].classList.add('on');
	};

	return (
		<>
			<Layout name={'Youtube'}>
				<section>
					<div className='inner'>
						<div className='ytb_wrap'>
							<div className='ytb_area'>
								<div className='slide_frame'>
									<div className='slide_wrap'>
										<div className='slide_area' ref={frame}>
											{Vids.map((vid, idx) => {
												return (
													<article key={idx} className={idx === ActiveNum ? 'on' : ''}>
														<div
															className='pic'
															onClick={() => {
																modal.current.open();
																setState(0);
																setIndex(idx);
															}}
														>
															<img
																className='thumb'
																src={vid.snippet.thumbnails.standard.url}
																alt={vid.snippet.title}
															/>
															<span className='num'>0{idx + 1}</span>
														</div>

														<div className='txt'>
															<p>{vid.snippet.publishedAt.split('T')[0].split('-').join('.')}</p>
														</div>
													</article>
												);
											})}
										</div>
									</div>
								</div>

								<div className='info_wrap'>
									<div className='txt_wrap' ref={panel}>
										{Txts.map((txt, idx) => {
											return (
												<div key={idx} className={idx === ActiveNum ? 'panel on' : 'panel'}>
													<div className='num'>
														<span>0{idx + 1}</span>
													</div>

													<div className='txt'>
														<h2>
															{txt.snippet.title.length > 30
																? txt.snippet.title.substr(0, 30) + '...'
																: txt.snippet.title}
														</h2>
														<p>
															{txt.snippet.description.length > 80
																? txt.snippet.description.substr(0, 80) + '...'
																: txt.snippet.description}
														</p>
													</div>
												</div>
											);
										})}
									</div>
									<div className='btn_wrap'>
										<button
											type='button'
											className='prev'
											onClick={() => {
												btnPrev();
											}}
										>
											<span>PREV</span>
											<FontAwesomeIcon icon={faAnglesLeft} />
										</button>
										<button
											type='button'
											className='next'
											onClick={() => {
												btnNext();
											}}
										>
											<span>NEXT</span>
											<FontAwesomeIcon icon={faAnglesRight} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='inner'>
						<h2>Lorem ipsum dolor sit amet.</h2>
						<ul className='ytb_list'>
							{Thumbs.map((thumb, idx) => {
								return (
									<li key={idx}>
										<article>
											<div
												className='pic'
												onClick={() => {
													modal.current.open();
													setState(1);
													setIndex(idx);
												}}
											>
												<img src={thumb.snippet.thumbnails.standard.url} alt={thumb.snippet.title} className='thumb' />
											</div>

											<div className='title'>
												<h3>
													{thumb.snippet.title.length > 30
														? thumb.snippet.title.substr(0, 30) + '...'
														: thumb.snippet.title}
												</h3>
												<p>{thumb.snippet.publishedAt.split('T')[0].split('-').join('.')}</p>
											</div>
											<p className='txt'>
												{thumb.snippet.description.length > 100
													? thumb.snippet.description.substr(0, 100) + '...'
													: thumb.snippet.description}
											</p>
										</article>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</Layout>

			<Modal ref={modal}>
				<iframe
					title={modal.title}
					src={
						!State
							? `https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`
							: `https://www.youtube.com/embed/${Thumbs[Index]?.snippet.resourceId.videoId}`
					}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
