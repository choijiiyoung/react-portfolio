import { combineReducers } from 'redux';
import * as types from './actionType';

const youtubeReducer = (state = { youtube: [], youtubetxt: [] }, action) => {
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

const reducers = combineReducers({ youtubeReducer });
export default reducers;
