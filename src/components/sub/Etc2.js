import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Layout from '../common/Layout';

function Etc2() {
	return (
		<Layout name={'Etc2'}>
			<section>
				<div className='inner'>
					<FontAwesomeIcon icon={faUser} />
				</div>
			</section>
		</Layout>
	);
}

export default Etc2;
