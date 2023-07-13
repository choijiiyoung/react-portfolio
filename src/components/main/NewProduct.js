import { memo } from 'react';
import { Link } from 'react-router-dom';

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
								<div className='slide_wrap'></div>
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
								<div className='slide_wrap'></div>
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
								<div className='slide_wrap'></div>
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
