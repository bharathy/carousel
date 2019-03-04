import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE, NEXT_IMAGE, PREV_IMAGE } from '../actions/actionConstants';

const initialState = {
    images: [],
    currentImage: null
};

const carouselReducer =(state = initialState, action) => {
    switch(action.type) {
        case FETCH_IMAGES_SUCCESS:
        const indexedImages = action.images.map((img, index) => {
            img.index = index;
            return img;
        });
        return { ...state,
            images: indexedImages,
            currentImage: indexedImages[0]
        }
        case FETCH_IMAGES_FAILURE:
            return { ...state,
                error: action.errorMessage,
                images: []
            }
        case NEXT_IMAGE:
            const nextIndex = state.currentImage.index+1;
            return { ...state,
                currentImage: state.images[nextIndex] 
            }
        case PREV_IMAGE:
        const prevIndex = state.currentImage.index-1;
            return { ...state,
                currentImage: state.images[prevIndex] 
            }
        default:
            return state;
    }
}

export default carouselReducer;