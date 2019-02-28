import React from 'react';
import { connect } from 'react-redux';

import mapStateToProps from '../utils/mapStateToProps';
import '../styles/main.scss';

import Carousel from '../components/carousel';

const App = () => {
    return (
        <div className="app">
            <div className="content">
                <Carousel />
            </div>
        </div>
    )
};

export default connect(mapStateToProps)(App);