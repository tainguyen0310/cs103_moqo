'use client' //
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const LoginForm = (props: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = async () => {
        try {
            const response = await axios.post("/api/login", { username, password });
            // Assuming the server returns a successful login response
            if (response.data.success) {
                // Perform any necessary logic for successful login
            } else {
                setError("Invalid credentials");
            }
        } catch (error) {
            setError("An error occurred");
        }
    };

    // const handleLogout = async () => {
    //     try {
    //         const response = await axios.post("/api/logout");
    //         // Assuming the server returns a successful logout response
    //         if (response.data.success) {
    //             // Perform any necessary logic for successful logout
    //         }
    //     } catch (error) {
    //         setError("An error occurred");
    //     }
    // };

    return(
        // login form
        <form className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="text" 
                    value = {username}
                    onChange = {(e)=> setUsername(e.target.value)}
                    placeholder="Username" />
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w-64 bg-white bg-inherit text-black outline-none" type="password" 
                    value = {password}
                    onChange = {(e)=> setPassword(e.target.value)}
                    placeholder="Password" />
                </div>
                <div className="flex justify-center mt-4">
                    <div className="border-2 rounded-full bg-gradient border-login-btn w-64 flex items-center justify-center">
                        <button className="rounded-full px-4 py-2 bg-inherit text-white font-bold" type="button"
                        onClick={handleLogin}>Login</button>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <h2 className="text-sm">Do not have an account?</h2>
                    <Link href="/pages/auth/register" className="text-yellow-200 font-bold px-1 text-sm">Sign Up</Link>
                </div>
        </form>
    );
};

export default LoginForm;