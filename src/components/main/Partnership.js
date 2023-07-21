import { memo } from 'react';
import { useSelector } from 'react-redux';

function Partnership() {
	return (
		<>
			<section id='partnership' className='my_scroll'>
				<div className='inner'>
					<h1>Partnership</h1>
					<div className='prs_wrap'>
						<div className='item'>
							<div className='name'>
								<p>Lorem ipsum</p>
								<div className='cross'>
									<span className='bar row'></span>
									<span className='bar col'></span>
								</div>
							</div>
							<article className='img_area'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prs1.jpg`} alt={'partnership'} />
							</article>
						</div>
						<div className='item'>
							<div className='name'>
								<p>Lorem ipsum</p>
								<div className='cross'>
									<span className='bar row'></span>
									<span className='bar col'></span>
								</div>
							</div>
							<article className='img_area'>
								<img src={`${process.env.PUBLIC_URL}/img/main/prs2.jpg`} alt={'partnership'} />
							</article>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default memo(Partnership);
