import { useRef, useEffect } from 'react';

function Layout({ name, children }) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<div className='container' ref={frame}>
			<div className={`content ${name}`}>
				<figure className='sub_visual'>
					<h1>{name}</h1>
				</figure>
				{children}
				{/* <section>
					<div className='inner'>{children}</div>
				</section> */}
			</div>
		</div>
	);
}

export default Layout;
