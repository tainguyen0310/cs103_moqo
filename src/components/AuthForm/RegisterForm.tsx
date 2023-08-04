'use client' //
import Link from "next/link";
import React, { useState,FormEvent } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = (props: any) => {
    const router= useRouter();
    const [formData, setFormData] = useState({name:"", email: "",phone :"", password: "", confirmPassword:"",  });
    const [error, setError] = useState({name:"", email: "",phone :"", password: "", confirmPassword:"",  });
    const [loading, setLoding] = useState<Boolean>(false);
    const [passwordMatch, setPasswordMatch] = useState<Boolean>(true);
    
    const HandleSumbit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoding(true);
        
        let hasError = false;

        if (!formData.name) {
            setError((prevError) => ({ ...prevError, name: "Name is required" }));
            hasError = true;
        }
        
        if (!formData.email) {
            setError((prevError) => ({ ...prevError, email: "Email is required" }));
            hasError = true;
        }

        if (!formData.phone) {
            setError((prevError) => ({ ...prevError, phone: "Phone Number is required" }));
            hasError = true;
        }
        
        if (!formData.password) {
            setError((prevError) => ({ ...prevError, password: "Password is required" }));
            hasError = true;
        }

        if (!formData.confirmPassword) {
            setError((prevError) => ({ ...prevError, confirmPassword: "Confirm Password is required" }));
            hasError = true;
        } else if (formData.password !== formData.confirmPassword) {
            setError((prevError) => ({ ...prevError, confirmPassword: "Passwords do not match" }));
            hasError = true;
        }

        if (hasError) {
            return;
        }
        try {
            // If login is successful, navigate to the home page
            router.push("/"); // Replace "/" with your actual home page route
        } catch (error) {
            // If login fails, display an error message
            setError((prevError) => ({ ...prevError, email: "Invalid credentials" }));
        }
    };
    return(
        //register form
        <form className="flex flex-col justify-center items-center" onSubmit={HandleSumbit}>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="text" 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Username" />
                    {!formData.name && ( // If there's an error, display it
                        <p className="text-red-500 text-xs italic mt-1">{error.name}</p>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="email" 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email" />
                    {!formData.email && ( // If there's an error, display it
                        <p className="text-red-500 text-xs italic mt-1">{error.email}</p>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="tel" 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number" />
                    {!formData.phone && ( // If there's an error, display it
                        <p className="text-red-500 text-xs italic mt-1">{error.phone}</p>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w-64 bg-white bg-inherit text-black outline-none" type="password" 
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Password" />
                    {!formData.password && ( // If there's an error, display it
                        <p className="text-red-500 text-xs italic mt-1">{error.password}</p>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                <input  className="rounded-full px-4 py-2 w-64 bg-white bg-inherit text-black outline-none"
                    type="password"
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Confirm Password"
                    />
                    {!formData.confirmPassword && ( // If there's an error, display it
                        <p className="text-red-500 text-xs italic mt-1">{error.confirmPassword}</p>
                    )}
                </div>
                
                <div className="flex justify-center mt-4">
                    <div className="border-2 rounded-full bg-gradient border-login-btn w-64 flex items-center justify-center">
                        <button className="rounded-full px-4 py-2 bg-inherit text-white font-bold" type="submit">Sign Up</button>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <h2 className="text-sm">Already have an account?</h2>
                    <Link href="/pages/auth/login" className="text-yellow-200 font-bold px-1 text-sm">Sign In</Link>
                </div>
        </form>
    );
};

export default RegisterForm;