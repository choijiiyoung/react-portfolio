import { takeLatest, put, call, fork, all } from 'redux-saga/effects';
import { fetchYoutube, fetchYoutubeThumb } from './api';
import * as types from './actionType';

//youtube slide saga
function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}
function* returnYoutube() {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.fail, payload: err });
	}
}

//youtube thumb list saga
function* callYoutubeThumb() {
	yield takeLatest(types.YOUTUBETHUMB.start, returnYoutubeThumb);
}
function* returnYoutubeThumb() {
	try {
		const response = yield call(fetchYoutubeThumb);
		yield put({ type: types.YOUTUBETHUMB.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBETHUMB.fail, payload: err });
	}
}

export default function* rootSaga() {
	yield all([fork(callYoutube), fork(callYoutubeThumb)]);
}
