import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Layout from '../common/Layout';

function Etc() {
	return (
		<Layout name={'Etc'}>
			<section>
				<div className='inner'>
					<FontAwesomeIcon icon={faHeart} />
				</div>
			</section>
		</Layout>
	);
}

export default Etc;