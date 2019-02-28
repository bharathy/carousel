import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from "../utils/mapDispatchToProps";
import mapStateToProps from "../utils/mapStateToProps";

class Carousel extends React.Component{
    constructor(props) {
        super(props);
      }

    render() {
        return (<div className="carousel">
                    <ul className="carousel__slide__container">
                        <li className="carousel__slide">
                            <img className="carousel__slide__img" src="/slide.png" alt="slide1" title="slide1"/>
                            <h4 className="carousel__slide__title">Image Title 1</h4>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__slide__img" src="/slide.png" alt="slide2" title="slide2"/>
                            <h4 className="carousel__slide__title">Image Title 1</h4>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__slide__img" src="/slide.png" alt="slide3" title="slide3"/>
                            <h4 className="carousel__slide__title"> Image Title 1</h4>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__slide__img" src="/slide.png" alt="slide4" title="slide4"/>
                            <h4 className="carousel__slide__title">Image Title 1</h4>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__slide__img" src="/slide.png" alt="slide5" title="slide5"/>
                            <h4 className="carousel__slide__title">Image Title 1</h4>
                        </li>
                    </ul>
                    <div className="carousel__btn">
                        <button className="btn carousel__btn__prev">Prev</button>
                        <button className="btn carousel__btn__next">Next</button>
                    </div>
                </div>
                )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Carousel);