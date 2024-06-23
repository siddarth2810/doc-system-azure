import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import { setUser } from "../redux/features/userSlice"
export default function ProtectedRoutes({ children }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const getUser = async () => {
        try {
            const res = await api.post(
                "/api/v1/user/getUserData",
                { token: localStorage.getItem("token") },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            if (res.data.success) {
                dispatch(setUser(res.data.data));
            } else {
                localStorage.clear();
                <Navigate to="/login" />;
            }
        } catch (error) {
            localStorage.clear();
            console.log(error);
        }
    };

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    if (localStorage.getItem("token")) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

