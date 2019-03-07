import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ id, previewURL, tags, user, likes}) => {
    return (
        <div className="carousel__slide" key={ id }>
            <img className="carousel__slide__img" src={ previewURL } alt={ tags } title={ tags }/>
            <h4 className="carousel__slide__title">{ `${ user } -  ${ likes }` }</h4>
        </div>
    );
};

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    previewURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired

};

export default Slide;