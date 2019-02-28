import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE} from './actionConstants';

const IMAGE_BASE_API = 'https://pixabay.com/api/';
const KEY = '9656065-a4094594c34f9ac14c7fc4c39';
const QUERY = 'q=beautiful+landscape&image_type=photo';

/* FETCH IMAGES ACTION */
export function fetchImages() {
	return (dispatch) => {
		const embedded_api = `${IMAGE_BASE_API}?key=${KEY}&${QUERY}`;
		return fetch(embedded_api)
		.then(function(response) {
			return response.json();
		}).then(function(data) {
			dispatch({
				type: FETCH_IMAGES_SUCCESS,
				images: data.hits
			});
		}).catch(function(error) {
			dispatch({
				type: FETCH_IMAGES_FAILURE,
				errorMessage: error.message
			});
		});
	}
}
