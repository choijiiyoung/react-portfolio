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
