import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Modal from '../common/Modal';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Txts, setTxts] = useState([]);
	const [Thumbs, setThumbs] = useState([]);

	const frame = useRef(null); //상단 슬라이드
	const panel = useRef([]); //상단 텍스트
	const [idxNext, setidxNext] = useState(3); //next버튼

	const modal = useRef(null);

	useEffect(() => {
		const key = 'AIzaSyAuF0TpI6-3VX54rC1jnTjptdGcBXybDGU';
		const list = 'PLFAS7kFpzjoPZEvZ5LcpGZkgyn_FOx9Qg';
		const num = 4;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;

		axios.get(url).then((data) => {
			setVids(data.data.items);
			setTxts(data.data.items);
			setThumbs(data.data.items);
		});
	}, []);

	const btnPrev = () => {
		frame.current.prepend(frame.current.lastElementChild);
	};

	const btnNext = () => {
		frame.current.append(frame.current.firstElementChild);
		setidxNext(idxNext + 1);

		if (idxNext === frame.current.children.length - 1) {
			setidxNext(0);
		}
		console.log(idxNext);

		const panels = panel.current.parentElement.querySelectorAll('.panel');
		activation(panels, idxNext);
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
												<div className='pic' onClick={() => console.log(modal)}>
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
															<h2>{txt.snippet.title.length > 40 ? txt.snippet.title.substr(0, 40) + '...' : txt.snippet.title}</h2>
															<p>{txt.snippet.description.length > 100 ? txt.snippet.description.substr(0, 100) + '...' : txt.snippet.description}</p>
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
															<h2>{txt.snippet.title.length > 40 ? txt.snippet.title.substr(0, 40) + '...' : txt.snippet.title}</h2>
															<p>{txt.snippet.description.length > 100 ? txt.snippet.description.substr(0, 100) + '...' : txt.snippet.description}</p>
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
											<div className='pic'>
												<img src={thumb.snippet.thumbnails.standard.url} alt={thumb.snippet.title} className='thumb' />
											</div>

											<div className='title'>
												<h3>{thumb.snippet.title.length > 30 ? thumb.snippet.title.substr(0, 30) + '...' : thumb.snippet.title}</h3>
												<p>{thumb.snippet.publishedAt.split('T')[0].split('-').join('.')}</p>
											</div>
											<p className='txt'>{thumb.snippet.description.length > 100 ? thumb.snippet.description.substr(0, 100) + '...' : thumb.snippet.description}</p>
										</article>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</Layout>

			<Modal ref={modal} />
		</>
	);
}

export default Youtube;
