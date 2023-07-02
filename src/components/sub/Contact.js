import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Contact() {
	const container = useRef(null);
	const [Traffic, setTraffic] = useState(false);
	const [IsHover, setIsHover] = useState(false);

	const { kakao } = window;
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	const mouseOverEvt = () => {
		setIsHover(true);
	};

	const mouseOutEvt = () => {
		setIsHover(false);
	};

	useEffect(() => {
		const mapInstance = new kakao.maps.Map(container.current, option);

		const imgSrc = `${process.env.PUBLIC_URL}/img/contact/marker.png`;
		const imgSize = new kakao.maps.Size(50, 64);
		const imgPos = { offset: new kakao.maps.Point(25, 32) };
		const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);

		const marker = new kakao.maps.Marker({
			position: option.center,
			image: markerImage,
		});

		marker.setMap(mapInstance);

		Traffic ? mapInstance.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) : mapInstance.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'Contact'}>
			<section>
				<article className='inner place'>
					<ul className='branch_list'></ul>
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
