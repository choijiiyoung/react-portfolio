import { useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Member() {
	const initVal = {
		userid: '',
		pwd1: '',
		ped2: '',
		email: '',
	};

	const [Val, setVal] = useState(initVal);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	useEffect(() => {
		console.log(Val);
	}, [Val]);

	return (
		<Layout name={'Member'}>
			<section>
				<div className='inner'>
					<form>
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
											<input type='radio' name='gender' value='male' id='male' />
											<label htmlFor='male'>Male</label>

											<input type='radio' name='gender' value='female' id='female' />
											<label htmlFor='female'>FeMale</label>
										</td>
									</tr>

									{/* interest */}
									<tr>
										<th>INTERESTS</th>
										<td>
											<input type='checkbox' name='interests' value='music' id='music' />
											<label htmlFor='music'>Music</label>

											<input type='checkbox' name='interests' value='reading' id='reading' />
											<label htmlFor='reading'>Reading</label>

											<input type='checkbox' name='interests' value='game' id='game' />
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
