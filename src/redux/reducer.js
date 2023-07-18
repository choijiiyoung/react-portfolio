import { combineReducers } from 'redux';
import * as types from './actionType';

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return state;
		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };
		case types.YOUTUBE.fail:
			return { ...state, youtube: action.payload };
		default:
			return state;
	}
};

const youtubeThumbReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBETHUMB.start:
			return state;
		case types.YOUTUBETHUMB.success:
			return { ...state, youtube: action.payload };
		case types.YOUTUBETHUMB.fail:
			return { ...state, youtube: action.payload };
		default:
			return state;
	}
};

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case types.FLICKR.start:
			return state;
		case types.FLICKR.success:
			return { ...state, flickr: action.payload };
		case types.FLICKR.fail:
			return { ...state, flickr: action.payload };
		default:
			return state;
	}
};

const departmentReducer = (state = { department: [] }, action) => {
	switch (action.type) {
		case types.DEPARTMENT.start:
			return state;
		case types.DEPARTMENT.success:
			return { ...state, department: action.payload };
		case types.DEPARTMENT.fail:
			return { ...state, department: action.payload };
		default:
			return state;
	}
};

const scheduleReducer = (state = { schedule: [] }, action) => {
	switch (action.type) {
		case types.SCHEDULE.start:
			return state;
		case types.SCHEDULE.success:
			return { ...state, schedule: action.payload };
		case types.SCHEDULE.fail:
			return { ...state, schedule: action.payload };
		default:
			return state;
	}
};

const reducers = combineReducers({
	youtubeReducer,
	youtubeThumbReducer,
	departmentReducer,
	scheduleReducer,
	flickrReducer,
});
export default reducers;
