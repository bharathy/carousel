import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from "../utils/mapDispatchToProps";
import mapStateToProps from "../utils/mapStateToProps";

import Slide from './slide';

class Carousel extends React.Component{
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        const { images, currentImage, nextImage, prevImage }= this.props;
        const currentImageIndex = (currentImage) ? currentImage.index : 0;
        const slides = images.map(image => <Slide key= { image.id } image={ image}/> );
        const disableNext = currentImageIndex === images.length-1
        const disablePrev = currentImageIndex === 0;

        return (<div className="carousel">
                    <div className={`carousel__slider active-slide-${currentImageIndex}`}>
                        <button className={`arrow_wrapper prev ${(disablePrev) ? 'disable' : ''}`} 
                                onClick={ prevImage }
                                disabled={ disablePrev }>
                            <img src="arrow.svg" alt="prev" className="prev"/>
                        </button>

                        <button className={`arrow_wrapper ${(disableNext) ? 'disable' : ''}`}
                                onClick={ nextImage }
                                disabled={ disableNext }>
                            <img src="arrow.svg" alt="next" className="next"/>
                        </button>

                        <div className="carousel__slider__wrapper" 
                            style={{'transform': `translateX(-${currentImageIndex * (100/images.length)}%)`}}>
                            { slides }  
                        </div>
                    </div>
                    <div className="carousel__btn">
                        <button className={`btn carousel__btn__prev ${(disablePrev) ? 'disable' : ''}`} 
                                onClick={ prevImage }
                                disabled={ disablePrev }>Prev</button>
                        <button className={`btn carousel__btn__next ${(disableNext) ? 'disable' : ''}`}
                                onClick={ nextImage }
                                disabled={ disableNext }>Next</button>
                    </div>
                </div>
               
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Carousel);