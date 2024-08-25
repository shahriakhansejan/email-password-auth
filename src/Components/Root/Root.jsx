import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = props => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;