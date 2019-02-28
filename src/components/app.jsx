import React from 'react';
import { connect } from 'react-redux';

import mapStateToProps from '../utils/mapStateToProps';
import '../styles/main.scss';

import Carousel from '../components/carousel';

const App = () => {
    return (
        <div className="app p20-0 ft-14">
            <div className="content flex flex-row">
                <Carousel />
            </div>
        </div>
    )
};

export default connect(mapStateToProps)(App);