import Layout from '../common/Layout';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Gallery() {
	const baseURL = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=1`;
	const key = 'db5673d91b2fb6704d13f6b0181efd99';
	const method_interest = 'flickr.interestingness.getList';
	const num = 20;
	const url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;

	const [Items, setItems] = useState([]);

	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.photos.photo);
		});
	}, []);

	return (
		<Layout name={'Gallery'}>
			<section>
				<div className='inner'>
					<div className='frame'>
						{Items.map((item, idx) => {
							return (
								<article key={idx}>
									<div className='item'>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
												alt={item.title}
											/>
										</div>
										<h2>{item.title}</h2>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Gallery;
