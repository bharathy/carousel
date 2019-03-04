import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ image }) => {
    return (
        <div className="carousel__slide" key={ image.id }>
            <img className="carousel__slide__img" src={ image.previewURL } alt={ image.tags } title={ image.tags }/>
            <h4 className="carousel__slide__title">{ `${image.user} -  ${image.likes}` }</h4>
        </div>
    );
};

Slide.propTypes = {
    image: PropTypes.object.isRequired
};

export default Slide;