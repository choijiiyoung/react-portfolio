import { useRef, useEffect } from 'react';

function Btns() {
	const btnRef = useRef(null);
	let pos = useRef([]);

	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.my_scroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const visualEvt = () => {
		const visual = btnRef.current.parentElement.querySelector('#visual');
		visual.classList.add('active');
	};

	useEffect(() => {
		getPos();
		visualEvt();
		window.addEventListener('resize', getPos);
		window.addEventListener('load', () => {
			setTimeout(visualEvt, 500);
			console.log('load');
		});
		return () => {
			window.addEventListener('resize', getPos);
			window.addEventListener('load', visualEvt);
		};
	}, []);

	return (
		<ul className='btn_navi' ref={btnRef}>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	);
}

export default Btns;
