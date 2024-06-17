import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { useEffect } from 'react';
import Layout from "../components/Layout.jsx"
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
        <Layout>
            <h2>homepage</h2>
        </Layout>
        </>
    );
}

export default HomePage;
