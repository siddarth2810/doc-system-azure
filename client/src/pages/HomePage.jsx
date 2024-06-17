import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { useEffect } from 'react';
const HomePage = () => {

    const getUserData = async () => {

        try {
            const res = await api.post('api/v1/user/getUserData', {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })

        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getUserData();
    }, []);
    return (
        <>
            <h2>homepage</h2>
            <Link to="/register">Register</Link>
        </>
    );
}

export default HomePage;
