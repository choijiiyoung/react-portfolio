import { useRef, useEffect } from 'react';
import Layout from '../common/Layout';

function Contact() {
	const container = useRef(null);
	const { kakao } = window;
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

	useEffect(() => {
		const mapInstance = new kakao.maps.Map(container.current, option);
		const marker = new kakao.maps.Marker({
			position: option.center,
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
