import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	//로컬저장소의 데이터를 반환하는 함수
	//저장소에 값이 있으면 해당 값을 다시 JSON형태로 변경해서 반환
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};

	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true); //복수개 글 수정 진입불가

	//리셋
	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	//Create - 데이터 저장 (게시글 저장)
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요.');
		}

		//Read - 데이터 호출 (게시글 보기)
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
		resetForm();
	};

	//Delete - 데이터 삭제 (게시글 삭제)
	const deletePost = (delIndex) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(Posts.filter((_, idx) => idx !== delIndex));
	};

	//Update(Edit) - 데이터 수정 (게시글 수정)
	const enableUpdate = (editIndex) => {
		//수정모드 진입함수 호출시 Allowed가 true일때에만 로직이 실행되도록 처리
		if (!Allowed) return;
		//일단 로직이 실행되면 Allowed값을 false로 바꿔서 이후부터는 다시 수정모드로 진입되는 것을 방지
		setAllowed(false);

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
		//글 수정 취소버튼을 눌러서 disableUpdate함수가 호출이 되어야지만 Allowed값을 다시 true로 바꿔서 글 수정 가능하게 처리
		setAllowed(true);
	};

	//Update - 데이터 수정 (게시글 수정)
	const updatePost = (editIndex) => {
		if (!editInput.current.value.trim() || !editTextarea.current.value.trim()) {
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}

		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
		setAllowed(true);
	};

	useEffect(() => {
		//Posts State값이 변경될때마다 해당 데이터를 문자화해서 localStorage에 저장
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout name={'Community'} bg={'Community.jpg'}>
			<section>
				<div className='inner'>
					<div className='input_wrap'>
						<div className='text_box'>
							<h2>Feedback</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque eum, explicabo cumque non
								asperiores odio tenetur quasi vitae tempore tempora cupiditate. Quam cumque enim libero minus incidunt
								consectetur debitis.
							</p>
						</div>
						<div className='input_box'>
							<div className='item'>
								<label htmlFor='subject'>Subject</label>
								<input type='text' id='subject' ref={input} />
							</div>
							<div className='item'>
								<p>Description</p>
								<textarea cols='30' rows='3' ref={textarea}></textarea>
							</div>

							<div className='btn_wrap'>
								<button onClick={resetForm}>CANCLE</button>
								<button onClick={createPost}>WRITE</button>
							</div>
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
												<input type='text' defaultValue={post.title} ref={editInput} />
												<br />
												<textarea cols='30' rows='3' defaultValue={post.content} ref={editTextarea}></textarea>
											</div>

											<div className='btn_wrap'>
												<button onClick={() => disableUpdate(idx)}>CANCLE</button>
												<button onClick={() => updatePost(idx)}>UPDATE</button>
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
