import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE, NEXT_IMAGE, PREV_IMAGE} from './actionConstants';

const IMAGE_BASE_API = 'https://pixabay.com/api/';
const KEY = '9656065-a4094594c34f9ac14c7fc4c39';
const QUERY = 'q=beautiful+landscape&image_type=photo';

/* NEXT IMAGE ACTION */
export function nextImage() {
	console.log("next");
	return (dispatch) => {
		dispatch({
			type: NEXT_IMAGE
		});
	}
}

/* PREV IMAGE ACTION */
export function prevImage() {
	console.log("prev");
	return (dispatch) => {
		dispatch({
			type: PREV_IMAGE
		});
	}
}

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
