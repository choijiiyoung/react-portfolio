import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [Posts, setPosts] = useState([]);

	//리셋
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPost = () => {
		setPosts([...Posts, { title: input.current.value, content: textarea.current.value }]);
		resetForm();
	};

	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<section>
				<div className='inner'>
					<div className='input_box'>
						<input type='text' placeholder='제목을 입력하세요.' ref={input} />
						<br />
						<textarea cols='30' rows='3' placeholder='본문을 입력하세요.' ref={textarea}></textarea>

						<div className='btn_wrap'>
							<button onClick={resetForm}>cancle</button>
							<button onClick={createPost}>wirte</button>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Community;
