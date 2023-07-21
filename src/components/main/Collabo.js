import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Collabo() {
	const Members = useSelector((store) => store.departmentReducer.members);
	const [Index, setIndex] = useState(0);

	return (
		<>
			<section id='collabo' className='my_scroll'>
				<div className='inner'>
					<h1>Collaborations</h1>
					<div className='collabo_wrap'>
						<ul className='collabo_list'>
							{Members.map((member, idx) => {
								return (
									<li key={idx} onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
										<Link to='#'>
											<span className='name'>{member.name}</span>
										</Link>
										<div className='box'>
											<div className='txt_area'>
												<span className='name'>{member.name}</span>
												<div className='cross'>
													<span className='bar row'></span>
													<span className='bar col'></span>
												</div>
											</div>

											<article className='img_wrap'>
												<div className='img_area'>
													<img src={`${process.env.PUBLIC_URL}/img/department/${member.pic}`} alt={'member'} />
												</div>
											</article>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default memo(Collabo);
