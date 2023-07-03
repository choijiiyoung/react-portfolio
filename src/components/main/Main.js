import Collabo from './Collabo';
import Imprv from './Imprv';
import NewProduct from './NewProduct';
import News from './News';
import Partnership from './Partnership';
import Prod from './Prod';
import Visual from './Visual';

function Main() {
	return (
		<main>
			<Visual />
			<NewProduct />
			<Imprv />
			<Prod />
			<Collabo />
			<Partnership />
			<News />
		</main>
	);
}

export default Main;