import { useRef, useEffect, useState } from 'react';
import Anime from '../../asset/anime';

function Btns() {
	console.log('btns');
	const btnRef = useRef(null);
	const pos = useRef([]);
	const [Num, setNum] = useState(0);

	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.my_scroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);

		setNum(pos.current.length);
	};

	const activation = () => {
		const base = -350;
		const scroll = window.scrollY;
		const btns = btnRef.current.children;
		const boxs = btnRef.current.parentElement.querySelectorAll('.my_scroll');

		pos.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				console.log(pos);

				for (const btn of btns) btn.classList.remove('on');
				for (const box of boxs) box.classList.remove('on');
				btns[idx].classList.add('on');
				boxs[idx].classList.add('on');
			}
		});
	};

	const visualEvt = () => {
		const visual = btnRef.current.parentElement.querySelector('#visual');
		visual.classList.add('active');
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		window.addEventListener('load', () => {
			setTimeout(visualEvt, 500);
			console.log('load');
		});
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
			window.removeEventListener('load', visualEvt);
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		};
	}, []);

	return (
		<ul className='btn_navi' ref={btnRef}>
			{Array(Num)
				.fill()
				.map((_, idx) => {
					let defaultCalss = '';
					if (idx === 0) defaultCalss = 'on';
					return (
						<li
							key={idx}
							className={defaultCalss}
							onClick={() => {
								console.log(idx);
								new Anime(window, {
									prop: 'scroll',
									value: pos.current[idx],
									duration: 500,
								});
							}}
						></li>
					);
				})}
		</ul>
	);
}

export default Btns;
