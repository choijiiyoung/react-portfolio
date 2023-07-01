import { useRef, useEffect } from 'react';
import Layout from '../common/Layout';

function Contact() {
	const container = useRef(null);
	const { kakao } = window;
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
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
	}, []);

	return (
		<Layout name={'Contact'}>
			<section>
				<article className='inner place'>
					<ul className='branch_list'></ul>
					<div className='map_wrap'>
						<div id='map' ref={container}></div>
					</div>
				</article>
			</section>
		</Layout>
	);
}

export default Contact;
