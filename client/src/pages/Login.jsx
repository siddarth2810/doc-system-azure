import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../api.jsx"
const Login = () => {
    const navigate = useNavigate();
    const onFinishHandler = async (values) => {
        try {
            const res = await api.post("api/v1/user/login", values);

            if (res.data.success) {
                message.success(`Login successful`);
                navigate('/');
            } else {
                message.error(res.data.message)
            }


        }
        catch (err) {
            console.log(`Error while logging ${err}`);
            message.error("Something went wrong");

        }

    };
    return (
        <>
            <div className="form-container">
                <Form
                    layout="vertical"
                    onFinish={onFinishHandler}
                    className="register-form card p-3 "
                >
                    <h3>Login</h3>

                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>

                    <Link to="/register" className="ms-2">
                        Not a User
                    </Link>
                </Form>
            </div>
        </>
    );
}

export default Login;
