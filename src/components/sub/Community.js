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
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요.');
		}

		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
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
							<button onClick={resetForm}>CANCLE</button>
							<button onClick={createPost}>WRITE</button>
						</div>
					</div>

					<div className='show_box'>
						{Posts.map((post, idx) => {
							return (
								<article key={idx}>
									<h2>{post.title}</h2>
									<p>{post.content}</p>

									<nav className='btn_wrap'>
										<button>EDIT</button>
										<button>DELETE</button>
									</nav>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Community;
