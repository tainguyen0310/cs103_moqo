'use client' //
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = (props: any) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = () => {
        if (password === confirmPassword) {
        // Passwords match, perform form submission or other actions
        setPasswordMatch(true);
        // You can proceed with the registration logic here
        } else {
        setPasswordMatch(false);
        }
    };
    return(
        //register form
        <form className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="text" placeholder="Username" />
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="tel" placeholder="Phone Number" />
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w-64 bg-white bg-inherit text-black outline-none" type="password" 
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password" />
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w-64 bg-white bg-inherit text-black outline-none" type="password" value={confirmPassword}
                     onChange={handleConfirmPasswordChange}
                     placeholder="Confirm Password" />
                    {!passwordMatch && (
                        <p className="text-red-500 text-xs italic">Passwords do not match.</p>
                    )}
                </div>
                
                <div className="flex justify-center mt-4">
                    <div className="border-2 rounded-full bg-gradient border-login-btn w-64 flex items-center justify-center">
                        <button className="rounded-full px-4 py-2 bg-inherit text-white font-bold" type="button">Sign Up</button>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <h2 className="text-sm">Already have an account?</h2>
                    <Link href="/auth/login" className="text-yellow-200 font-bold px-1 text-sm">Sign In</Link>
                </div>
        </form>
    );
};

export default RegisterForm;