import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from '../actions/actionConstants';

const initialState = {
    images: []
};

const carouselReducer =(state = initialState, action) => {
    switch(action.type) {
        case FETCH_IMAGES_SUCCESS:
        return { ...state,
            images: action.images
        }
        case FETCH_IMAGES_FAILURE:
            return { ...state,
                error: action.errorMessage,
                images: {}
            }
        default:
            return state;
    }
}

export default carouselReducer;