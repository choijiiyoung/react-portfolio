import { forwardRef, useImperativeHandle, useState } from 'react';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { open: () => setOpen(true) };
	});

	return (
		<>
			{Open && (
				<aside className='modal' ref={ref}>
					<div className='con'>{props.children}</div>
					<div className='close' onClick={() => setOpen(false)}>
						close
					</div>
				</aside>
			)}
		</>
	);
});

export default Modal;
