import { FETCH_CAROUSEL_IMAGES} from './actionConstants';

/* FETCH IMAGES ACTION */
export function fetchImages(data) {
	return (dispatch) => {
		dispatch({
			type: FETCH_CAROUSEL_IMAGES,
			data
		});
	}
}
