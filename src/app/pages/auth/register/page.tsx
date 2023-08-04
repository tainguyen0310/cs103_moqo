import React from "react";
import RegisterForm from "@/components/AuthForm/RegisterForm";

export default function Register(){
    return(
        <div className="bg-cover bg-center min-h-screen register_bg">
             <div className="flex flex-col justify-center items-center h-screen">
                <div>
                    <h2 className="text-yellow-200 text-6xl font-bold text-center my-10">
                        MOQO
                    </h2>
                </div>
                {/* Login form */}
                <div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};