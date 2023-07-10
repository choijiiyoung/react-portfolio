import { memo } from 'react';

function Visual() {
	return (
		<>
			<figure id='visual' className='my_scroll on'>
				<div className='inner'>
					<div className='title_wrap'>
						<h1>
							<span className='title'>Hear.</span>
							<span className='title'>See.</span>
							<span className='title small'>
								<span>Like nothing</span>
								<span>you've heard before</span>
								<span className='line'></span>
							</span>
							<span className='title last'>Feel.</span>
						</h1>
					</div>
				</div>
			</figure>
		</>
	);
}

export default memo(Visual);
