import { Route } from 'react-router-dom';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

//main
import Visual from './components/main/Visual';
import NewProduct from './components/main/NewProduct';
import Imprv from './components/main/Imprv';
import Prod from './components/main/Prod';
import Collabo from './components/main/Collabo';
import Partnership from './components/main/Partnership';
import News from './components/main/News';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Member from './components/sub/Member';

import './scss/style.scss';

function App() {
	return (
		<>
			<Header />

			<Route exact path='/'>
				<Visual />
				<NewProduct />
				<Imprv />
				<Prod />
				<Collabo />
				<Partnership />
				<News />
			</Route>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/member' component={Member} />

			<Footer />
		</>
	);
}

export default App;
