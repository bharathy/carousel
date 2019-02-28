import { FETCH_CAROUSEL_IMAGES } from '../actions/actionConstants';

// import { } from '../utils/carousel-utils';

const initialState = {
    images: []
};

const carouselReducer =(state = initialState, action) => {
    switch(action.type) {
        case FETCH_CAROUSEL_IMAGES:
           return { ...state }
        default:
            return state;
    }
}

export default carouselReducer;