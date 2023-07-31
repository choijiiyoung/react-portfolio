import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFlickr = async ({ queryKey }) => {
	const opt = queryKey[1];
	const baseURL = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=1`;
	const key = 'db5673d91b2fb6704d13f6b0181efd99';
	const method_interest = 'flickr.interestingness.getList';
	const method_user = 'flickr.people.getPhotos';
	const method_search = 'flickr.photos.search';
	const num = 20;
	let url = '';

	if (opt.type === 'interest') url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
	if (opt.type === 'search') url = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${num}&tags=${opt.tags}`;
	if (opt.type === 'user') url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.user}`;

	const response = await axios.get(url);
	return response.data.photos.photo;
};

export const useFlickrQuery = (opt) => {
	return useQuery(['flickrData', opt], fetchFlickr, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		cacheTime: 1000 * 60,
		staleTime: 1000 * 60,
	});
};
