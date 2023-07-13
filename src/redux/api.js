import axios from 'axios';

const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet`;
const key = 'AIzaSyAuF0TpI6-3VX54rC1jnTjptdGcBXybDGU';

//유튜브 슬라이드 fetch
export const fetchYoutube = async () => {
	const num = 5;
	const list = 'PLFAS7kFpzjoPZEvZ5LcpGZkgyn_FOx9Qg';
	const url = `${baseURL}&playlistId=${list}&key=${key}&maxResults=${num}`;
	return await axios.get(url);
};
