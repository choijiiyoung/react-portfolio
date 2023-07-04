import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Layout from '../common/Layout';

function Etc3() {
	return (
		<Layout name={'Etc3'}>
			<section>
				<div className='inner'>
					<FontAwesomeIcon icon={faBagShopping} />
				</div>
			</section>
		</Layout>
	);
}

export default Etc3;
