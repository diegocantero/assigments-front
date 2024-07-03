// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        try {
            if (formData.username == "Hola123" && formData.password == "Hola123") {
                
                  navigate( '/dashboard')
            }else{
                console.error('Error: Credentials invalid');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (

        <div className="container">
            <h2>Inicio de sesión</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="password" name="password" value={formData.password}
                        onChange={handleInputChange} />
                </div>

                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Iniciar Sesión</button>
            </form>
        </div>

    );
};

export default Login;
