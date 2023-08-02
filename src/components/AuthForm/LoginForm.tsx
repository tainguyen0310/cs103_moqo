import Link from "next/link";
import React from "react";

const LoginForm = (props: any) => {
    return(
        // login form
        <form className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w- bg-white bg-inherit text-black outline-none" type="text" placeholder="Username" />
                </div>
                <div className="flex flex-col justify-center items-center my-1">
                    <input className="rounded-full px-4 py-2 w-64 bg-white bg-inherit text-black outline-none" type="password" placeholder="Password" />
                </div>
                <div className="flex justify-center mt-4">
                    <div className="border-2 rounded-full bg-gradient border-login-btn w-64 flex items-center justify-center">
                        <button className="rounded-full px-4 py-2 bg-inherit text-white font-bold" type="button">Login</button>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <h2 className="text-sm">Do not have an account?</h2>
                    <Link href="/auth/register" className="text-yellow-200 font-bold px-1 text-sm">Sign Up</Link>
                </div>
        </form>
    );
};

export default LoginForm;