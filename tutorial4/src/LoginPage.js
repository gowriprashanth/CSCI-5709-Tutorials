import axios from "axios";
import React from "react";
import { useNavigate } from 'react-router-dom';
import {  ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const loginurl="https://express-t4.onrender.com/api/login"

function LoginPage(){
    
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const credentials={
            username:e.target.email.value,
            password:e.target.password.value
        }

        axios.post(loginurl,credentials)
        .then((response)=>{
            if(response.data.message==="Login success!"){
            toast.success("Login success");
            console.log(response.data)
            navigate('/profile-list');
            }
            else {
                toast.error("Incorrect email or password");
              }

        }).catch(
            (err)=>{
                console.log(err)
                toast.error("Incorrect email or password");
            }
        )
    }

    return(
        <div>
        <form onSubmit={handleSubmit}> 
            <label>
                <input type="text" id="email" name="email" placeholder="Email"/>
            </label>

            <label>
                <input type="password" id="password" name="password" placeholder="Password"/>
            </label>

            <label>
                <input type ="submit" value="Log in"/>
            </label>
        </form>

      <ToastContainer position="top-right" autoClose={4000} />

        </div>
    );
}

export default LoginPage;