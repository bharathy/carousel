import React from 'react';
import { connect } from 'react-redux';

import mapStateToProps from '../utils/mapStateToProps';
import '../styles/main.scss';

import Carousel from '../components/carousel';

const App = () => {
    return (
        <div className="content">
            <header className="header">
                <h1>Carousel Test</h1>
            </header>
            <Carousel />
        </div>
    )
};

export default connect(mapStateToProps)(App);