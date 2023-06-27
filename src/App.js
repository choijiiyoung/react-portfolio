import { Route } from 'react-router-dom';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Visual from './components/main/Visual';
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Member from './components/sub/Member';

function App() {
	return (
		<>
			<Header />

			<Route exact path='/'>
				<Visual />
			</Route>

			<Route path='/department'>
				<Department />
			</Route>

			<Route path='/community'>
				<Community />
			</Route>

			<Route path='/gallery'>
				<Gallery />
			</Route>

			<Route path='/youtube'>
				<Youtube />
			</Route>

			<Route path='/contact'>
				<Contact />
			</Route>

			<Route path='/member'>
				<Member />
			</Route>

			<Footer />
		</>
	);
}

export default App;
