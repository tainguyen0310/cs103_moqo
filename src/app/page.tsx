import React from "react"
// import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/Navbar"
import SearchForm from "@/components/SearchForm/SearchForm"
import "tailwindcss/tailwind.css"



export default function Home() {
  return (
    <main className="bg-cover bg-center min-h-screen custom_bg">
      {/* <Navbar /> */}
      <Navbar/>
      <div className="flex flex-col justify-center items-center" style={{ height: '75vh' }}>
        <div>
          <h2 className="text-yellow-200 font-sans text-6xl font-bold text-center my-10">
            MOQO
          </h2>
          <p className="text-white text-2xl font-bold text-center mb-2 mt-10">
            Unleash Your Movie Obsession: Find Your Perfect Flick
          </p>
          <SearchForm/>
        </div>
      </div>
    </main>
  );
}

