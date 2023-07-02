import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Contact() {
	const container = useRef(null);
	const [Traffic, setTraffic] = useState(false);
	const [Location, setLocation] = useState(null);
	const [Index, setIndex] = useState(0);
	const [IsHover, setIsHover] = useState(false);

	const { kakao } = window;
	const info = [
		{
			title: 'KBS',
			latlng: new kakao.maps.LatLng(37.524798972757594, 126.91675264356007),
			imgSrc: `${process.env.PUBLIC_URL}/img/contact/marker.png`,
			imgSize: new kakao.maps.Size(50, 64),
			imgPos: { offset: new kakao.maps.Point(25, 32) },
		},
		{
			title: 'MBC',
			latlng: new kakao.maps.LatLng(37.581326703417176, 126.89081503125949),
			imgSrc: `${process.env.PUBLIC_URL}/img/contact/marker.png`,
			imgSize: new kakao.maps.Size(50, 64),
			imgPos: { offset: new kakao.maps.Point(25, 32) },
		},
		{
			title: 'SBS',
			latlng: new kakao.maps.LatLng(37.52929966560047, 126.87378508458899),
			imgSrc: `${process.env.PUBLIC_URL}/img/contact/marker.png`,
			imgSize: new kakao.maps.Size(50, 64),
			imgPos: { offset: new kakao.maps.Point(25, 32) },
		},
	];

	const option = { center: info[Index].latlng, level: 3 };
	const imgSrc = info[Index].imgSrc;
	const imgSize = info[Index].imgSize;
	const imgPos = info[Index].imgPos;
	const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
	const marker = new kakao.maps.Marker({ position: option.center, image: markerImage });

	const mouseOverEvt = () => {
		setIsHover(true);
	};

	const mouseOutEvt = () => {
		setIsHover(false);
	};

	useEffect(() => {
		const mapInstance = new kakao.maps.Map(container.current, option);

		marker.setMap(mapInstance);
		setLocation(mapInstance);
	}, [Index]);

	useEffect(() => {
		Traffic ? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) : Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'Contact'}>
			<section>
				<article className='inner place'>
					<ul className='branch_list'>
						{info.map((el, idx) => {
							return (
								<li key={idx} onClick={() => setIndex(idx)}>
									{el.title}
								</li>
							);
						})}
					</ul>
					<div className='map_wrap'>
						<div id='map' ref={container} onMouseOver={mouseOverEvt} onMouseOut={mouseOutEvt} className={IsHover ? 'on' : ''}></div>
					</div>
				</article>

				<article className='inner contact'>
					<div className='btn_wrap'>
						<div className='btn_area'>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius possimus voluptates at impedit nisi, ratione modi totam animi omnis? Delectus!</p>
							<button type='button' className='btn_toggle' onClick={() => setTraffic(!Traffic)}>
								{Traffic ? 'Traffic ON' : 'Traffic OFF'}
							</button>
						</div>
					</div>
				</article>
			</section>
		</Layout>
	);
}

export default Contact;
