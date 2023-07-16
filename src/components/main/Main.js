import Header from '../common/Header';
import Collabo from './Collabo';
import Imprv from './Imprv';
import NewProduct from './NewProduct';
import News from './News';
import Partnership from './Partnership';
import Prod from './Prod';
import Visual from './Visual';
import Btns from './Btns';

function Main({ menu }) {
	return (
		<main>
			<Header type={'main'} menu={menu} />
			<Visual />
			<NewProduct />
			<Imprv />
			<Prod />
			<Collabo />
			<Partnership />
			<News />
			{/* <Btns /> */}
		</main>
	);
}

export default Main;
