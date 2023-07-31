import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useFlickrQuery } from '../../hooks/useFlickerQuery';

function NewProduct() {
	const [Opt, setOpt] = useState({ type: 'user', user: '198483448@N02' });
	const { data: Pics, isSuccess } = useFlickrQuery(Opt);
	const [Slide, setSlide] = useState(null);

	useEffect(() => {
		setOpt({ type: 'user', user: '198483448@N02' });
		if (Slide) {
			Slide.slideTo(1);
		}
	}, [Slide]);

	return (
		<>
			<section id='newProduct' className='my_scroll'>
				<div className='inner'>
					<div className='content'>
						<div className='title_area'>
							<h1>New Arrival</h1>
						</div>
						<div className='product_area'>
							<div className='item first'>
								<div className='img_wrap'>
									<img src={`${process.env.PUBLIC_URL}/img/main/new1.png`} alt='new1' />
								</div>
								<Link to='#'>
									<div className='info'>
										<p className='name'>BEOSOUND A1 2ND GEN</p>
										<p className='txt'>Waterproof Bluetooth speaker</p>
									</div>
									<div className='price'>
										<span>$529</span>
									</div>
								</Link>
							</div>
							<div className='item center'>
								<div className='slide_wrap'>
									<Swiper modules={[Navigation]} loop={true} navigation={true} onSwiper={setSlide}>
										{isSuccess &&
											Pics.map((_, idx) => {
												if (idx >= 3) return null;
												return (
													<SwiperSlide key={idx}>
														<img
															src={`https://live.staticflickr.com/${Pics[idx + 2].server}/${Pics[idx + 2].id}_${
																Pics[idx + 2].secret
															}_b.png`}
															alt={Pics[idx + 2].title}
														/>
													</SwiperSlide>
												);
											})}
									</Swiper>
								</div>
								<Link to='#'>
									<div className='info'>
										<p className='name'>{isSuccess && Pics[2]?.title}</p>
										<p className='txt'>Comfortable, do-it-all headphones</p>
									</div>
									<div className='price'>
										<span>$499</span>
									</div>
								</Link>
							</div>
							<div className='item last'>
								<div className='img_wrap'>
									<img src={`${process.env.PUBLIC_URL}/img/main/new2.png`} alt='new1' />
								</div>
								<Link to='#'>
									<div className='info'>
										<p className='name'>BEOPLAY EQ</p>
										<p className='txt'>Adaptive noise cancelling wireless earphones</p>
									</div>
									<div className='price'>
										<span>$529</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default memo(NewProduct);
