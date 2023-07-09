import { useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Member() {
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		gender: '',
		interests: [],
		edu: '',
		comments: '',
	};

	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleCheck = (e) => {
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		let checkArr = [];
		inputs.forEach((el) => {
			if (el.checked) checkArr.push(el.value);
		});
		setVal({ ...Val, [name]: checkArr });
		console.log(setVal({ ...Val, [name]: checkArr }));
	};

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요.';
		}
		if (value.pwd1.length < 5 || !eng.test(value.pwd1) || !num.test(value.pwd1) || !spc.test(value.pwd1)) {
			errs.pwd1 = '비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요.';
		}
		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요.';
		}
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일주소는 8글자 이상 @를 포함하세요.';
		}
		if (value.gender === '') {
			errs.gender = '성별을 체크해주세요.';
		}
		if (value.interests.length === 0) {
			errs.interests = '관심사를 하나 이상 체크하세요.';
		}
		return errs;
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		console.log(Val, '현재 스테이트값');
		console.log(check(Val), 'chk val');
		setErr(check(Val));
		setSubmit(true);
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('모든 인증을 통과했습니다.');
		}
	}, [Err]);

	return (
		<Layout name={'Member'}>
			<section>
				<div className='inner'>
					<form onSubmit={handelSubmit}>
						<fieldset>
							<legend className='h'>회원가입 폼 양식</legend>
							<table>
								<tbody>
									{/* user id */}
									<tr>
										<th scope='row'>
											<label htmlFor='userid'>USER ID</label>
										</th>
										<td>
											<input
												type='text'
												name='userid'
												id='userid'
												placeholder='아이디를 입력하세요'
												onChange={handleChange}
											/>
										</td>
									</tr>

									{/* password */}
									<tr>
										<th>
											<label htmlFor='pwd1'>PASSWORD</label>
										</th>
										<td>
											<input
												type='password'
												name='pwd1'
												id='pwd1'
												placeholder='비밀번호를 입력하세요'
												onChange={handleChange}
											/>
										</td>
									</tr>

									{/* re-password */}
									<tr>
										<th>
											<label htmlFor='pwd2'>RE-PASSWORD</label>
										</th>
										<td>
											<input
												type='password'
												name='pwd2'
												id='pwd2'
												placeholder='비밀번호를 재입력하세요'
												onChange={handleChange}
											/>
										</td>
									</tr>

									{/* e-mail */}
									<tr>
										<th>
											<label htmlFor='email'>E-MAIL</label>
										</th>
										<td>
											<input
												type='text'
												name='email'
												id='email'
												placeholder='이메일주소를 입력하세요'
												onChange={handleChange}
											/>
										</td>
									</tr>

									{/* gender */}
									<tr>
										<th>GENDER</th>
										<td>
											<input type='radio' name='gender' value='male' id='male' onChange={handleRadio} />
											<label htmlFor='male'>Male</label>

											<input type='radio' name='gender' value='female' id='female' onChange={handleRadio} />
											<label htmlFor='female'>FeMale</label>
										</td>
									</tr>

									{/* interest */}
									<tr>
										<th>INTERESTS</th>
										<td>
											<input type='checkbox' name='interests' value='music' id='music' onChange={handleCheck} />
											<label htmlFor='music'>Music</label>

											<input type='checkbox' name='interests' value='reading' id='reading' onChange={handleCheck} />
											<label htmlFor='reading'>Reading</label>

											<input type='checkbox' name='interests' value='game' id='game' onChange={handleCheck} />
											<label htmlFor='game'>Game</label>
										</td>
									</tr>

									{/* btn wrap */}
									<tr>
										<th colSpan='2'>
											<input type='reset' value='CANCEL' />
											<input type='submit' value='SEND' />
										</th>
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</div>
			</section>
		</Layout>
	);
}

export default Member;
