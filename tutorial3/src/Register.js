import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'

function Register() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confPassword: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const newErrors = {};
        if (!formData.firstname.match(/^[a-zA-Z]+$/)) {
            newErrors.firstname = 'Only letters are allowed';
        }
        if (!formData.lastname.match(/^[a-zA-Z]+$/)) {
            newErrors.lastname = 'Only letters are allowed';
        }
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password.match(/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/)) {
            newErrors.password = 'Password should contain alpha-numeric and special characters and Minimum limit is 8 characters. at least 8 characters';
        }
        if (formData.password !== formData.confPassword) {
            newErrors.confPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length === 0) {
            navigate(`/profile?firstname=${formData.firstname}&lastname=${formData.lastname}&email=${formData.email}`);
        } else {
            Object.values(newErrors).forEach((error) => toast.error(error));
        }
        }
    

    return (
      
        <div className="app-container">
            <form onSubmit={handleSubmit}>
                <p><label>
                    First Name:
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                    />
                    
                </label>
                </p>

                <p>
                <label>
                    Last Name:
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                    />
                   
                </label>
                </p>

                <p>
                <label>
                    Email:
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                   
                </label>
                </p>

                <p>
                <label>
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    
                </label>
                </p>

                <p>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        id="confPassword"
                        name="confPassword"
                        value={formData.confPassword}
                        onChange={handleInputChange}
                    />
                   
                </label>
                </p>
                
                <input type="submit" name="submit" />
            </form>
            <ToastContainer />
        </div>
       
    );
    }

export default Register;