import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from './redux/youtubeSlice';
import youtubeThumbReducer from './redux/youtubeThumbSlice';
import departmetReducer from './redux/departmentSlice';
import scheduleReducer from './redux/scheduleSlice';

const store = configureStore({
	reducer: {
		youtube: youtubeReducer,
		youtubeThumb: youtubeThumbReducer,
		department: departmetReducer,
		schedules: scheduleReducer,
	},
});

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);
