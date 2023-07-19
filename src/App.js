import { Route, Switch } from 'react-router-dom';
import { useRef } from 'react';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Menu from './components/common/Menu';

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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

function App() {
	const dispatch = useDispatch();
	const menu = useRef(null);

	useEffect(() => {
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.YOUTUBETHUMB.start });
		dispatch({ type: types.DEPARTMENT.start });
		dispatch({ type: types.SCHEDULE.start });
		dispatch({ type: types.FLICKR.start, opt: { type: 'user', user: '198483448@N02' } });
	}, [dispatch]);

	return (
		<>
			<Switch>
				<Route exact path='/' render={() => <Main menu={menu} />} />
				<Route path='/' render={() => <Header type={'sub'} menu={menu} />} />
			</Switch>

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

			<Menu ref={menu} />
		</>
	);
}

export default App;
