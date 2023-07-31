import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSchedule = async () => {
	const response = await axios.get(`${process.env.PUBLIC_URL}/DB/department.json`);
	return response.data.schedules;
};

export const useScheduleQuery = () => {
	return useQuery(['scheduleData'], fetchSchedule, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		cacheTime: 1000 * 60 * 60 * 24,
		staleTime: 1000 * 60 * 60 * 24,
	});
};
