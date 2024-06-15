import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <>
            <h2>homepage</h2>
            <Link to="/register">Register</Link>
        </>
    );
}

export default HomePage;
