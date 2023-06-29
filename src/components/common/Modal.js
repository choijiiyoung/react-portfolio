import { forwardRef } from 'react';

const Modal = forwardRef((props, ref) => {
	return (
		<aside className='modal' ref={ref}>
			<div className='con'></div>
			<div className='close'>close</div>
		</aside>
	);
});

export default Modal;
