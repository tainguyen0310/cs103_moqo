import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import MaleImage from "../../../public/male.png";
//create profile page
export default function Profile() {
  const profile = {
    name: "John Doe",
    phone:"1234567890",
    email: "john.doe@example.com",
    address: "1234 Main St",
  };
    return(
      <div className="bg-cover bg-center min-h-screen custom_bg">
        <Navbar />
        <div className="flex justify-center">
          <div
          className="lg:flex overflow-hidden shadow-lg border-2"
          style={{
            borderRadius: "20px", 
            marginTop: "5rem"// Border radius
          }}>
            <div className="px-16 pt-10 bg-white">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden rounded-full border-4 border-black"
                title="Woman holding a mug">
                <Image  
                    src={MaleImage} // Image path
                    alt={"Image of Male"}/>
                  
              </div> 
              <div className="mt-3 flex flex-col items-center">
                <button className="rounded-full bg-black text-yellow-200 font-bold px-5 py-2 mt-1 mb-4 text-sm" >Change Photo</button>
                <button className="text-stone-400 font-bold text-lg mt-1">My Info</button>
                <button className="text-black font-bold text-lg mt-1">Password</button>
                <button className="text-black font-bold text-lg mt-1 mb-6">Liked Quotes</button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col justify-center items-center">
                <div className="text-yellow-200 text-3xl font-bold my-3">My Profile</div>
                <div className="mx-16">
                  <div className="flex flex-col items-center justify-center my-2">
                    <h3 className="text-yellow-200 text-xl my-1 font-semibold">Name</h3>
                    <div className="rounded-lg bg-white w-96 flex justify-center my-1 p-1">
                      <p className="text-black font-medium">{profile.name}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center my-2">
                    <h3 className="text-yellow-200 text-xl my-1 font-semibold">Email</h3>
                    <div className="rounded-lg bg-white w-96 flex justify-center my-1 p-1">
                      <p className="text-black font-medium">{profile.email}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center my-2">
                    <h3 className="text-yellow-200 text-xl my-1 font-semibold">Phone Number</h3>
                    <div className="rounded-lg bg-white w-96 flex justify-center my-1 p-1">
                      <p className="text-black font-medium">{profile.phone}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center my-2">
                    <h3 className="text-yellow-200 text-xl my-1 font-semibold">Address</h3>
                    <div className="rounded-lg bg-white w-96 flex justify-center my-1 p-1">
                      <p className="text-black font-medium">{profile.address}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full border-2 border-search-btn w-1/3 hover mt-4">
                  <button className="rounded-full px-4 py-2 w-full bg-inherit text-yellow-300" >Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}