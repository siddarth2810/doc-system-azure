import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import {setUser} from "../redux/features/userSlice"
export default function ProtectedRoutes({ children }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const getUser = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await api.post('api/v1/user/getUserData',
                { token },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            if (res.data.success) {
                dispatch(setUser(res.data.data));
        } else {
            localStorage.clear();
            <Navigate to="/login" />
        }
    }
        catch (err) {
        localStorage.clear();
        console.log(err);
    }
}
useEffect(() => {
    if (!user) {
        getUser();
    }
}, [user, getUser]);


if (localStorage.getItem("token")) {
    return children;
}
else {
    return <Navigate to="/login" />
}

}


