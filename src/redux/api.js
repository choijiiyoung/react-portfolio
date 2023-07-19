import axios from 'axios';

//유튜브 슬라이드 fetch
export const fetchYoutube = async () => {
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`;
	const key = 'AIzaSyAuF0TpI6-3VX54rC1jnTjptdGcBXybDGU';
	const num = 5;
	const list = 'PLFAS7kFpzjoPZEvZ5LcpGZkgyn_FOx9Qg';
	const url = `${baseURL}&playlistId=${list}&key=${key}&maxResults=${num}`;
	return await axios.get(url);
};

//유트브 리스트 fetch
export const fetchYoutubeThumb = async () => {
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`;
	const key = 'AIzaSyAuF0TpI6-3VX54rC1jnTjptdGcBXybDGU';
	const num = 4;
	const list = 'PLFAS7kFpzjoOzH0K-VNLbCyY2fnoyMYh8';
	const url = `${baseURL}&playlistId=${list}&key=${key}&maxResults=${num}`;
	return await axios.get(url);
};

//gallery fetch
export const fetchFlickr = async (opt) => {
	const baseURL = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=1`;
	const key = 'db5673d91b2fb6704d13f6b0181efd99';
	const method_interest = 'flickr.interestingness.getList';
	const method_user = 'flickr.people.getPhotos';
	const method_search = 'flickr.photos.search';
	const num = 30;
	let url = '';

	if (opt.type === 'interest') url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
	if (opt.type === 'search') url = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${num}&tags=${opt.tags}`;
	if (opt.type === 'user') url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.user}`;

	return await axios.get(url);
};

//department fetch
export const fetchDepartment = async () => {
	return await axios.get(`${process.env.PUBLIC_URL}/DB/department.json`);
};
