import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from "../utils/mapDispatchToProps";
import mapStateToProps from "../utils/mapStateToProps";

class Carousel extends React.Component{
    constructor(props) {
        super(props);
      }
    
    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        const { images }= this.props;
        const slides = images.map((image) =>
            <li className="carousel__slide" key={ image.id }>
                <img className="carousel__slide__img" src={ image.previewURL } alt={ image.tags } title={ image.tags }/>
                <h4 className="carousel__slide__title">{ `${image.user} -  ${image.likes}` }</h4>
            </li>);
        
        return (<div className="carousel">
                    <ul className="carousel__slide__container">
                        { slides }  
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