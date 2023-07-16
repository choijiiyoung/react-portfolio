import { takeLatest, put, call, fork, all } from 'redux-saga/effects';
import { fetchYoutube, fetchDepartment, fetchFlickr } from './api';
import * as types from './actionType';

//youtube saga
function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}
function* returnYoutube(action) {
	try {
		const response = yield call(fetchYoutube, action.opt);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.fail, payload: err });
	}
}

//youtube thumb list saga
// function* callYoutubeThumb() {
// 	yield takeLatest(types.YOUTUBETHUMB.start, returnYoutubeThumb);
// }
// function* returnYoutubeThumb() {
// 	try {
// 		const response = yield call(fetchYoutubeThumb);
// 		yield put({ type: types.YOUTUBETHUMB.success, payload: response.data.items });
// 	} catch (err) {
// 		yield put({ type: types.YOUTUBETHUMB.fail, payload: err });
// 	}
// }

//flickr saga
function* callFlickr() {
	yield takeLatest(types.FLICKR.start, returnFlickr);
}
function* returnFlickr(action) {
	try {
		const response = yield call(fetchFlickr, action.opt);
		yield put({ type: types.FLICKR.success, payload: response.data.photos.photo });
	} catch (err) {
		yield put({ type: types.FLICKR.fail, payload: err });
	}
}

//department member saga
function* callDepartment() {
	yield takeLatest(types.DEPARTMENT.start, returnDepartment);
}
function* returnDepartment() {
	try {
		const response = yield call(fetchDepartment);
		yield put({ type: types.DEPARTMENT.success, payload: response.data.members });
	} catch (err) {
		yield put({ type: types.DEPARTMENT.fail, payload: err });
	}
}

//department schedule saga
function* callSchedule() {
	yield takeLatest(types.SCHEDULE.start, returnSchedule);
}
function* returnSchedule() {
	try {
		const response = yield call(fetchDepartment);
		yield put({ type: types.SCHEDULE.success, payload: response.data.schedules });
	} catch (err) {
		yield put({ type: types.SCHEDULE.fail, payload: err });
	}
}

export default function* rootSaga() {
	yield all([fork(callYoutube), fork(callDepartment), fork(callSchedule), fork(callFlickr)]);
}
