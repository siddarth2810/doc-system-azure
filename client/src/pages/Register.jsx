import React from "react";
import { Form, message, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterStyles.css";
import api from "../api.jsx";

const Register = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const res = await api.post("api/v1/user/register", values);

      if (res.data.success) {
        message.success("User Registered Successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (err) {
      console.error("Error during registration:", err);
      message.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <div className="image-container"></div>
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form card p-3">
        <h3>Register User</h3>
        <Form.Item label="Name" name="name">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
        <Link to="/login" className="ms-2">
          Already a User
        </Link>
      </Form>
    </div>
  );
};

export default Register;
