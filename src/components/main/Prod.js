import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useScheduleQuery } from '../../hooks/useScheduleQuery';

function Prod() {
	const { data: Schedules, isSuccess } = useScheduleQuery();
	const [Index, setIndex] = useState(0);

	return (
		<>
			<section id='prod'>
				<div className='inner'>
					<ul className='prod_list'>
						{isSuccess &&
							Schedules.map((schedule, idx) => {
								if (idx >= 4) return null;
								return (
									<li key={idx} onMouseOver={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
										<Link to='#'>
											<div className='cross'>
												<span className='bar row'></span>
												<span className='bar col'></span>
											</div>
											<p>{schedule.subj}</p>
											<FontAwesomeIcon icon={faArrowUp} />
										</Link>
										<article className='pic'>
											<img src={`${process.env.PUBLIC_URL}/img/main/prod${idx + 1}.jpg`} alt={'img'} />
										</article>
									</li>
								);
							})}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Prod;
