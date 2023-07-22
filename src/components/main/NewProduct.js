import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function NewProduct() {
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
										<p className='name'>Lorem ipsum</p>
										<p className='txt'>Lorem ipsum dolor sit amet</p>
									</div>
									<div className='price'>
										<span>$529</span>
									</div>
								</Link>
							</div>
							<div className='item center'>
								<div className='slide_wrap'>
									<Swiper modules={[Navigation]} loop={true} navigation={true}>
										<SwiperSlide>
											<img src={`${process.env.PUBLIC_URL}/img/main/slide1.png`} alt='slide' />
										</SwiperSlide>
										<SwiperSlide>
											<img src={`${process.env.PUBLIC_URL}/img/main/slide2.png`} alt='slide' />
										</SwiperSlide>
										<SwiperSlide>
											<img src={`${process.env.PUBLIC_URL}/img/main/slide3.png`} alt='slide' />
										</SwiperSlide>
									</Swiper>
								</div>
								<Link to='#'>
									<div className='info'>
										<p className='name'>Lorem ipsum</p>
										<p className='txt'>Lorem ipsum dolor sit amet</p>
									</div>
									<div className='price'>
										<span>$529</span>
									</div>
								</Link>
							</div>
							<div className='item last'>
								<div className='img_wrap'>
									<img src={`${process.env.PUBLIC_URL}/img/main/new2.png`} alt='new1' />
								</div>
								<Link to='#'>
									<div className='info'>
										<p className='name'>Lorem ipsum</p>
										<p className='txt'>Lorem ipsum dolor sit amet</p>
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
