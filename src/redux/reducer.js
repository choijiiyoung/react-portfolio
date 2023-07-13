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

const reducers = combineReducers({ youtubeReducer, youtubeThumbReducer });
export default reducers;
