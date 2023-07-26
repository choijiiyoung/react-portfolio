export const setMembers = (data) => {
	return {
		type: 'SET_MEMBERS',
		payload: data,
	};
};

export const setSchedules = (data) => {
	return {
		type: 'SET_SCHEDULES',
		payload: data,
	};
};

export const setYoutube = (data) => {
	return {
		type: 'SET_YOUTUBE',
		payload: data,
	};
};

export const setYoutubeThumb = (data) => {
	return {
		type: 'SET_YOUTUBETHUMB',
		payload: data,
	};
};
