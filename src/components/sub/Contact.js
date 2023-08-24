import Layout from '../common/Layout';
import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { useThrottle } from '../../hooks/useThrottle';

function Contact() {
	//form
	const form = useRef(null);
	const inputName = useRef(null);
	const inputEmail = useRef(null);
	const inputMsg = useRef(null);
	const [Success, setSuccess] = useState(false);

	//kakao map
	const container = useRef(null); //kakao map 지도가 들어갈 프레임도 가상요소 참조를 위해 useRef로 참조 객체 생성
	const [Traffic, setTraffic] = useState(false);
	const [Location, setLocation] = useState(null);
	const [Index, setIndex] = useState(0);
	const [IsHover, setIsHover] = useState(false);

	const { kakao } = window; //윈도우 객체를 비구조 할당으로 변경
	const info = useRef([
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
	]);

	const marker = useMemo(() => {
		return new kakao.maps.Marker({
			position: info.current[Index].latlng,
			image: new kakao.maps.MarkerImage(
				info.current[Index].imgSrc,
				info.current[Index].imgSize,
				info.current[Index].imgPos
			),
		});
	}, [Index, kakao]);

	const mouseOverEvt = () => {
		setIsHover(true);
	};

	const mouseOutEvt = () => {
		setIsHover(false);
	};

	//폼메일 전송 함수
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_893824x', 'template_kffl4y1', form.current, 'XT-0I8L5nMrP8bxB8').then(
			(result) => {
				console.log(result.text);
				setSuccess(true);
				inputName.current.value = '';
				inputEmail.current.value = '';
				inputMsg.current.value = '';
			},
			(error) => {
				console.log(error.text);
				setSuccess(false);
			}
		);
	};

	const setCenter = useCallback(() => {
		Location?.setCenter(info.current[Index].latlng);
	}, [Index, Location]);

	const setCenter2 = useThrottle(setCenter);

	useEffect(() => {
		container.current.innerHTML = '';

		//인스턴스 호출구문은 컴포넌트 처음 마운트시 호출
		const mapInstance = new kakao.maps.Map(container.current, { center: info.current[Index].latlng, level: 3 });

		marker.setMap(mapInstance);

		//지역변수인 mapInstance값을 다른 함수에서도 활용해야 되므로 Location state에 해당 인스턴스 값 저장
		setLocation(mapInstance);

		//지도영역에 휠 기능 비활성화
		mapInstance.setZoomable(false);
	}, [Index, kakao, marker]);

	useEffect(() => {
		window.addEventListener('resize', setCenter2);
		return () => window.removeEventListener('resize', setCenter2);
	}, [setCenter2]);

	useEffect(() => {
		//Location state에 담겨있는 맵 인스턴스로부터 Traffic레이어 호출 구문 처리(Traffic state가 변경될 때마다)
		//첫 렌더링 사이클에서는 Location값이 null이므로 Optional Chaining을 활용해서 해당 값이 담기는 두번째 랜더링 사이클부터 동작하도록 처리
		Traffic
			? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		Traffic ? mouseOverEvt() : mouseOutEvt();
	}, [Traffic, Location, kakao]);

	return (
		<Layout name={'Contact'} bg={'Location.jpg'}>
			<section>
				<article className='inner place'>
					<ul className='branch_list'>
						{/* 배열정보값을 토대로 동적으로 li버튼 생성하고 해당 버튼 클릭할때 순서값 State를 변경하면서 지도화면이 갱신되도록 수정 */}
						{info.current.map((el, idx) => {
							return (
								<li key={idx} onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
									{el.title}
								</li>
							);
						})}
					</ul>
					<div className='map_wrap'>
						<div
							id='map'
							ref={container}
							onMouseOver={mouseOverEvt}
							onMouseOut={mouseOutEvt}
							className={IsHover || Traffic ? 'on' : ''}
						></div>
					</div>
				</article>

				<article className='inner contact'>
					<div className='btn_wrap'>
						<div className='btn_area'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius possimus voluptates at impedit nisi,
								ratione modi totam animi omnis? Delectus!
							</p>
							<button type='button' className='btn_toggle' onClick={() => setTraffic(!Traffic)}>
								{Traffic ? 'Traffic ON' : 'Traffic OFF'}
							</button>
						</div>
					</div>
					<div id='formBox' className='form_wrap'>
						<form ref={form} onSubmit={sendEmail} className='form_area'>
							<div className='input_wrap'>
								<label htmlFor='name'>Name</label>
								<input type='text' id='name' name='name' ref={inputName} />
							</div>

							<div className='input_wrap'>
								<label htmlFor='email'>Email</label>
								<input type='email' id='email' name='email' ref={inputEmail} />
							</div>

							<div className='msg_wrap'>
								<label htmlFor='message'>Message</label>
								<textarea id='message' name='message' ref={inputMsg} />
							</div>

							<div className='btn_wrap'>
								<input type='submit' value='Send' />
							</div>
						</form>

						{Success && <p>메일이 성공적으로 발송되었습니다.</p>}
					</div>
				</article>
			</section>
		</Layout>
	);
}

export default Contact;
