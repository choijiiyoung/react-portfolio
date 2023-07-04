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

	const deletePost = (delIndex) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(Posts.filter((_, idx) => idx !== delIndex));
	};

	const enableUpdate = (editIndex) => {
		setPosts(
			Posts.map((post, postIndex) => {
				if (editIndex === postIndex) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (editIndex) => {
		setPosts(
			Posts.map((post, postIndex) => {
				if (editIndex === postIndex) post.enableUpdate = false;
				return post;
			})
		);
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
									{post.enableUpdate ? (
										<>
											{/* 수정 */}
											<div className='txt_wrap'>
												<input type='text' defaultValue={post.title} />
												<br />
												<textarea cols='30' rows='3' defaultValue={post.content}></textarea>
											</div>

											<div className='btn_wrap'>
												<button onClick={() => disableUpdate(idx)}>CANCLE</button>
												<button>UPDATE</button>
											</div>
										</>
									) : (
										<>
											{/* 출력 */}
											<div className='txt_wrap'>
												<h2>{post.title}</h2>
												<p>{post.content}</p>
											</div>

											<nav className='btn_wrap'>
												<button onClick={() => enableUpdate(idx)}>EDIT</button>
												<button onClick={() => deletePost(idx)}>DELETE</button>
											</nav>
										</>
									)}
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
