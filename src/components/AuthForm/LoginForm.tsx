'use client' //
import Link from "next/link";
import React, { useState,FormEvent } from "react";
import axios from "axios";
import { useMutation, gql } from "@apollo/client";
import {LOGIN_USER,LoginData,LoginVariables} from "@/api/auth/login";
import { useRouter } from "next/navigation";

const LoginForm = (props: any) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "" });
    const [loading, setLoding] = useState<Boolean>(false);
    const router= useRouter();
    const [login, {data}] = useMutation<LoginData,LoginVariables>(LOGIN_USER, {
        onCompleted: (data) => {
          console.log(data);
        },
      });
    const HandleSumbit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoding(true);
        let hasError = false;
        if (!formData.email) {
            setError((prevError) => ({ ...prevError, email: "Email is required" }));
            hasError = true;
          }
        
        if (!formData.password) {
            setError((prevError) => ({ ...prevError, password: "Password is required" }));
            hasError = true;
          }
        
        if (hasError) {
            return;
        }
          try {
        
            // If login is successful, navigate to the home page
            await login({
                variables: {
                  email: formData.email,
                  password: formData.password,
                },  
              });
            router.push("/"); // Replace "/" with your actual home page route
          } catch (error) {
            // If login fails, display an error message
            setError((prevError) => ({ ...prevError, email: "Invalid credentials" }));
          }
    }

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
        //login form

        <form className="flex flex-col justify-center items-center" onSubmit={HandleSumbit}>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="text" 
                    onChange={(e)=> setFormData({...formData, email: e.target.value})}
                    placeholder="name@company.com" />
                    {error.email && <p className="text-red-500 mt-1">{error.email}</p>}
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w-64 bg-white bg-inherit text-black outline-none" type="password" 
                    onChange = {(e)=> setFormData({...formData, password: e.target.value})}
                    placeholder="••••••••" />
                     {error.password && <p className="text-red-500 mt-1">{error.password}</p>}
                </div>
                <div className="flex justify-center mt-4">
                    <div className="border-2 rounded-full bg-gradient border-login-btn w-64 flex items-center justify-center">
                        <button className="rounded-full px-4 py-2 bg-inherit text-white font-bold" type="submit"
                        >Login</button>
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