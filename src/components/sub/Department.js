import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Department() {
	const [Members, setMembers] = useState([]);
	const [Schedules, setSchedules] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/department.json`).then((data) => {
			setMembers(data.data.members);
			setSchedules(data.data.schedule);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			<section className='section first'>
				<div className='inner'>
					<div className='cont_wrap'>
						<div className='left'>
							<p>
								<strong>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nemo, cupiditate debiti quaerat blanditiis eos neque iusto quibusdam odio? Dolorem. orem ipsum dolor, sit amet
									consectetur
								</strong>
							</p>
						</div>

						<div className='right'>
							<div className='box'>
								<div className='cont_area'>
									<div className='item txt'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illum atque eius ex ipsam iusto tempora neque consectetur? Minima corporis eos dolores aliquid tenetur aperiam
											alias deserunt nihil atque dolor?
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis, totam ad itaque ab asperiores nam incidunt tempore soluta culpa distinctio ipsum aliquid sed deserunt
											placeat, provident sapiente maxime ullam.
										</p>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati quisquam veritatis impedit animi facilis laborum dolores suscipit quasi commodi.</p>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga! Lorem ipsum dolor sit amet consectetur adip</p>
									</div>
									<article className='item'>
										<img src={`${process.env.PUBLIC_URL}/img/department/bg.jpg`} alt={'bg'} />
									</article>
								</div>
							</div>
							<div className='box line'>
								<h2>Lorem ipsum</h2>
								<div className='cont_area'>
									<div className='item txt'>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quos nesciunt, ex laboriosam qui voluptates fugiat aut molestiae dignissimos cupiditate! Blanditiis</p>
										<Link to='#' className='btn_view'>
											View full list of awards
										</Link>
									</div>
									<div className='item txt'>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='section last'>
				<div className='inner'>
					<div className='cont_wrap'>
						<div className='left line'>
							<p>
								<span>Lorem ipsum dolor,</span>
								<span>sit amet consectetur</span>
							</p>
						</div>
						<div className='right'>
							<div className='box line'>
								<h2>Directors</h2>
								<div className='cont_area'>
									{Members.map((member, idx) => {
										return (
											<article key={idx}>
												<div className='pic'>
													<img src={`${process.env.PUBLIC_URL}/img/department/${member.pic}`} alt={member.name} />
												</div>
												<div className='info'>
													<p className='name'>{member.name}</p>
													<p className='pos'>{member.position}</p>
													<span className='dept'>{member.dept}</span>
												</div>
											</article>
										);
									})}
								</div>
							</div>
							<div className='box line'>
								<h2>Selected Publications</h2>
								<div className='list_area'>
									<ul>
										{Schedules.map((schedule, idx) => {
											return (
												<li key={idx}>
													<p className='title'>{schedule.subj}</p>
													<div className='place'>
														<p>{schedule.date}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Department;
