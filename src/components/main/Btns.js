import { useRef, useEffect, memo, useState } from 'react';

function Btns() {
	const btnRef = useRef(null);
	const pos = useRef([]);
	const [Num, setNum] = useState(0);

	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.my_scroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setNum(pos.current.length);
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
			{Array(Num)
				.fill()
				.map((_, idx) => {
					return <li key={idx}></li>;
				})}
		</ul>
	);
}

export default memo(Btns);
