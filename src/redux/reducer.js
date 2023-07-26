import { combineReducers } from 'redux';

const departmentReducer = (state = { members: [], schedules: [] }, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return { ...state, members: action.payload };
		case 'SET_SCHEDULES':
			return { ...state, schedules: action.payload };
		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case 'SET_YOUTUBE':
			return { ...state, youtube: action.payload };
		default:
			return state;
	}
};

const youtubeThumbReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case 'SET_YOUTUBETHUMB':
			return { ...state, youtube: action.payload };
		default:
			return state;
	}
};

const reducers = combineReducers({ departmentReducer, youtubeReducer, youtubeThumbReducer });
export default reducers;
