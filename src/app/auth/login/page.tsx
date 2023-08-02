import React from "react";
import LoginForm from "@/components/AuthForm/LoginForm";
export default function Login(){
    return(
        <div className="bg-cover bg-center min-h-screen login_bg">
            <div className="flex flex-col justify-center items-center h-screen">
                <div>
                    <h2 className="text-yellow-200 text-6xl font-bold text-center my-10">
                        MOQO
                    </h2>
                </div>
                {/* Login form */}
                <div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}