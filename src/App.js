import { Route, Switch } from 'react-router-dom';

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

import './scss/style.scss';

import { fetchDepartment } from './redux/departmentSlice';
import { fetchSchedule } from './redux/scheduleSlice';
import { fetchFlickr } from './redux/flickrSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
	const queryClient = new QueryClient();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDepartment());
		dispatch(fetchSchedule());
		dispatch(fetchFlickr({ type: 'user', user: '198483448@N02' }));
	}, [dispatch]);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Switch>
					<Route exact path='/' render={() => <Main />} />
					<Route path='/' render={() => <Header type={'sub'} />} />
				</Switch>
				<Route path='/department' component={Department} />
				<Route path='/community' component={Community} />
				<Route path='/gallery' component={Gallery} />
				<Route path='/youtube' component={Youtube} />
				<Route path='/contact' component={Contact} />
				<Route path='/member' component={Member} />
				<Footer />
				<Menu />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
