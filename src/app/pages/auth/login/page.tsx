"use client";
import React from "react";
import LoginForm from "@/components/AuthForm/LoginForm";
import { ApolloProvider } from "@apollo/client"; 
import client from "@/api/apollo"; 
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
export default function Login(){
    loadDevMessages();
    loadErrorMessages();
    return(
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}