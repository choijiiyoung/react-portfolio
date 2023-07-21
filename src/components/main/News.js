import { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function News() {
	const dummy = [
		{
			title: 'Lorem ipsum dolor sit amet.',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, deserunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, deserunt!',
		},
		{ title: 'Hello5', content: 'here comes description in detail.' },
		{ title: 'Hello4', content: 'here comes description in detail.' },
		{ title: 'Hello3', content: 'here comes description in detail.' },
		{ title: 'Hello2', content: 'here comes description in detail.' },
		{ title: 'Hello1', content: 'here comes description in detail.' },
	];

	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data) return JSON.parse(data);
		else return dummy;
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<>
			<section id='news' className='my_scroll'>
				<div className='inner'>
					<div className='content'>
						<div className='title_area'>
							<h1>Our articles</h1>
							<Link to='#' className='btn_view'>
								VIEW ALL
							</Link>
						</div>
						<div className='txt_area'>
							<ul className='news_list'>
								{Posts.map((post, idx) => {
									if (idx >= 2) return null;
									return (
										<li>
											<div className='inner_area'>
												<div className='cont'>
													<span>Lorem ipsum dolor</span>
													<p className='title'>
														<b>{post.title}</b>
													</p>
													<p className='txt'>{post.content}</p>
												</div>
												<Link to='#' className='btn_view'>
													READ MORE
												</Link>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default memo(News);
