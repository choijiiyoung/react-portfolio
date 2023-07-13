import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube, setYoutubeTxt, setYoutubeThumb } from './redux/action';

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

function App() {
	const dispatch = useDispatch();
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`;
	const key = 'AIzaSyAuF0TpI6-3VX54rC1jnTjptdGcBXybDGU';
	const menu = useRef(null);

	//유튜브 슬라이드 fetch
	const fetchYoutubeSlide = useCallback(async () => {
		const num = 5;
		const list = 'PLFAS7kFpzjoPZEvZ5LcpGZkgyn_FOx9Qg';
		const url = `${baseURL}&playlistId=${list}&key=${key}&maxResults=${num}`;
		const result = await axios.get(url);
		dispatch(setYoutube(result.data.items));
		dispatch(setYoutubeTxt(result.data.items));
	}, [dispatch, baseURL]);

	//유트브 리스트 fetch
	const fetchYoutubeList = useCallback(async () => {
		const num = 4;
		const list = 'PLFAS7kFpzjoOzH0K-VNLbCyY2fnoyMYh8';
		const url = `${baseURL}&playlistId=${list}&key=${key}&maxResults=${num}`;
		const result = await axios.get(url);
		dispatch(setYoutubeThumb(result.data.items));
	}, [dispatch, baseURL]);

	useEffect(() => {
		fetchYoutubeSlide();
		fetchYoutubeList();
	}, [fetchYoutubeSlide, fetchYoutubeList]);

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
