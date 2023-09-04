import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDepartment = async () => {
	const response = await axios.get(`${process.env.PUBLIC_URL}/DB/department.json`);
	return response.data.members;
};

export const useDepartmentQuery = () => {
	return useQuery(['departmentData'], fetchDepartment, {
		refetchOnMount: false, //윈도우 포커스갈때마다 패칭되는거 막아줌
		refetchOnWindowFocus: false, //불필요한 리패칭 방지
		cacheTime: 1000 * 60 * 60 * 24,
		staleTime: 1000 * 60 * 60 * 24,
	});
};
