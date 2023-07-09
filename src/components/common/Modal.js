import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { open: () => setOpen(true) };
	});

	useEffect(() => {
		Open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
	}, [Open]);

	return (
		<AnimatePresence>
			{Open && (
				<motion.aside
					className='modal'
					iniitial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.5 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
				>
					<motion.div
						className='con'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transiton: { delay: 0.5 } }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
					>
						{props.children}
					</motion.div>
					<div className='close' onClick={() => setOpen(false)}>
						close
					</div>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Modal;
