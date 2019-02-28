import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from "../utils/mapDispatchToProps";
import mapStateToProps from "../utils/mapStateToProps";

class Carousel extends React.Component{
    constructor(props) {
        super(props);
      }

    render() {
        return (<div className="carousel flex-auto p10 bdr-rt">
                </div>)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Carousel);