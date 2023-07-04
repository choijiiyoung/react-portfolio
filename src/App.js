import { Route } from 'react-router-dom';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

//main
import Main from './components/main/Main';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Member from './components/sub/Member';

//etc
import Etc from './components/sub/Etc';
import Etc2 from './components/sub/Etc2';
import Etc3 from './components/sub/Etc3';

import './scss/style.scss';

function App() {
	return (
		<>
			<Header />

			<Route exact path='/' component={Main} />

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/member' component={Member} />

			<Route path='/etc' component={Etc} />
			<Route path='/etc2' component={Etc2} />
			<Route path='/etc3' component={Etc3} />

			<Footer />
		</>
	);
}

export default App;
