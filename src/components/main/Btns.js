import { useRef, useEffect, useState, memo } from 'react';
import Anime from '../../asset/anime';
import { useCallback } from 'react';

function Btns() {
	const btnRef = useRef(null);
	const pos = useRef([]);
	const [Num, setNum] = useState(0);
	const [Mounted, setMounted] = useState(true);

	const getPos = useCallback(() => {
		pos.current = [];
		const secs = btnRef.current?.parentElement.querySelectorAll('.my_scroll');
		if (!secs) return;

		for (const sec of secs) pos.current?.push(sec.offsetTop);
		Mounted && setNum(pos.current?.length);
	}, [Mounted]);

	const activation = () => {
		const base = -350;
		const scroll = window.scrollY;
		const btns = btnRef.current?.children;
		const boxs = btnRef.current?.parentElement.querySelectorAll('.my_scroll');

		pos.current?.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
				boxs[idx].classList.add('on');
			}
		});
	};

	const visualEvt = useCallback(() => {
		const visual = btnRef.current?.parentElement.querySelector('#visual');
		if (Mounted) {
			visual?.classList.add('active');
		}
	}, [Mounted]);

	useEffect(() => {
		setTimeout(() => {
			visualEvt();
		}, 500);

		setTimeout(() => {
			getPos();
		}, 1000);

		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			setMounted(false);

			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
			window.removeEventListener('load', visualEvt);
		};
	}, [getPos, visualEvt]);

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

export default memo(Btns);
