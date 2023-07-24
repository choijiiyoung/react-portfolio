import { useRef, useEffect } from 'react';

function Layout({ name, children, bg }) {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<div className='container' ref={frame}>
			<div className={`content ${name}`}>
				<figure className='sub_visual' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/sub/${bg})` }}>
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
