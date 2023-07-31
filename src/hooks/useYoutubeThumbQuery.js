import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchYoutubeThumb = async () => {
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`;
	const key = 'AIzaSyAuF0TpI6-3VX54rC1jnTjptdGcBXybDGU';
	const num = 4;
	const list = 'PLFAS7kFpzjoOzH0K-VNLbCyY2fnoyMYh8';
	const url = `${baseURL}&playlistId=${list}&key=${key}&maxResults=${num}`;
	const response = await axios.get(url);
	return response.data.items;
};

export const useYoutubeThumbQuery = () => {
	return useQuery(['youtubeThumbData'], fetchYoutubeThumb, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		cacheTime: 1000 * 5,
		staleTime: 1000 * 5,
	});
};
