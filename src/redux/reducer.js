import { combineReducers } from 'redux';

const initDepartment = {
	members: [
		{
			name: 'Julia Jung',
			position: 'President',
			dept: 'BIO',
			pic: 'member1.jpg',
		},
		{
			name: 'David Choi',
			position: 'Vice President',
			dept: 'BIO',
			pic: 'member2.jpg',
		},
		{
			name: 'Emily Simpson',
			position: 'UI Designer',
			dept: 'BIO',
			pic: 'member3.jpg',
		},
		{
			name: 'Paul Davison',
			position: 'Front-end Engineer',
			dept: 'BIO',
			pic: 'member4.jpg',
		},
		{
			name: 'Sara Kim',
			position: 'Back-end Engineer',
			dept: 'BIO',
			pic: 'member5.jpg',
		},
		{
			name: 'Michael',
			position: 'Project Manager',
			dept: 'BIO',
			pic: 'member6.jpg',
		},
	],
	schedules: [
		{
			subj: 'Architecture NZ',
			date: 'Iron bank 9/10',
		},
		{
			subj: 'Home',
			date: 'Black Estate vineyard 9/10 \n C3 House 9/10 \n House for five 9/10',
		},
		{
			subj: 'Houses',
			date: 'C3 House 9/13 \n RTA studio 9/13',
		},
		{
			subj: 'Interior',
			date: 'House 9/10',
		},
		{
			subj: 'Urbis',
			date: 'Black Estate Winery \n House for five 9/10',
		},
	],
};

const departmentReducer = (state = initDepartment, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return { ...state, members: action.payload };
		case 'SET_SCHEDULES':
			return { ...state, schedules: action.payload };
		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [], youtubetxt: [] }, action) => {
	switch (action.type) {
		case 'SET_YOUTUBE':
			return { ...state, youtube: action.payload };
		case 'SET_YOUTUBETXT':
			return { ...state, youtubetxt: action.payload };
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
