import Layout from '../common/Layout';
import Modal from '../common/Modal';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Txts, setTxts] = useState([]);
	const [Thumbs, setThumbs] = useState([]);
	const key = 'AIzaSyAuF0TpI6-3VX54rC1jnTjptdGcBXybDGU';
	const num = 4;
	const ytbSlide = 'PLFAS7kFpzjoPZEvZ5LcpGZkgyn_FOx9Qg';
	const ytbList = 'PLFAS7kFpzjoOzH0K-VNLbCyY2fnoyMYh8';

	const frame = useRef(null); //상단 슬라이드
	const panel = useRef([]); //상단 텍스트
	const [IdxNext, setIdxNext] = useState(3); //next버튼

	const modal = useRef(null);
	const [IdxModal, setIdxModal] = useState(0);

	//유튜브 슬라이드 fetch
	const fetchYoutubeSlide = async () => {
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${ytbSlide}&key=${key}&maxResults=${num}`;
		const result = await axios.get(baseURL);
		setVids(result.data.items);
		setTxts(result.data.items);
	};

	//유트브 리스트 fetch
	const fetchYoutubeList = async () => {
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${ytbList}&key=${key}&maxResults=${num}`;
		const result = await axios.get(baseURL);
		setThumbs(result.data.items);
	};

	useEffect(() => {
		fetchYoutubeSlide();
		fetchYoutubeList();
	}, []);

	const btnPrev = () => {
		frame.current.prepend(frame.current.lastElementChild);
	};

	const btnNext = () => {
		frame.current.append(frame.current.firstElementChild);
		setIdxNext(IdxNext + 1);

		if (IdxNext === frame.current.children.length - 1) {
			setIdxNext(0);
		}
		console.log(IdxNext);

		const panels = panel.current.parentElement.querySelectorAll('.panel');
		activation(panels, IdxNext);
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
								<div className='slide_wrap' ref={frame}>
									{Vids.map((vid, idx) => {
										return (
											<article key={idx}>
												<div
													className='pic'
													onClick={() => {
														modal.current.open();
														setIdxModal(idx);
														console.log(vid?.snippet.resourceId.videoId, 'vids videoid');
													}}
												>
													<img className='thumb' src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
													<span className='num'>0{idx + 1}</span>
												</div>

												<div className='txt'>
													<p>{vid.snippet.publishedAt.split('T')[0].split('-').join('.')}</p>
												</div>
											</article>
										);
									})}
								</div>
								<div className='info_wrap'>
									<div className='txt_wrap'>
										{Txts.map((txt, idx) => {
											if (idx === 2)
												return (
													<div className='panel on' key={idx} ref={panel}>
														<div className='num'>
															<span>0{idx + 1}</span>
														</div>

														<div className='txt'>
															<h2>
																{txt.snippet.title.length > 40
																	? txt.snippet.title.substr(0, 40) + '...'
																	: txt.snippet.title}
															</h2>
															<p>
																{txt.snippet.description.length > 100
																	? txt.snippet.description.substr(0, 100) + '...'
																	: txt.snippet.description}
															</p>
														</div>
													</div>
												);
											else
												return (
													<div className='panel' key={idx}>
														<div className='num'>
															<span>0{idx + 1}</span>
														</div>

														<div className='txt'>
															<h2>
																{txt.snippet.title.length > 40
																	? txt.snippet.title.substr(0, 40) + '...'
																	: txt.snippet.title}
															</h2>
															<p>
																{txt.snippet.description.length > 100
																	? txt.snippet.description.substr(0, 100) + '...'
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
													setIdxModal(idx);
													console.log(thumb?.snippet.resourceId.videoId, 'thumb videoid');
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
					title={Vids[IdxModal]?.id}
					src={`https://www.youtube.com/embed/${Vids[IdxModal]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
