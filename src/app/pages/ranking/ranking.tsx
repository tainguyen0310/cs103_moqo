// import Image from "next/image";
import "tailwindcss/tailwind.css"
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import MovieCard from "@/components/MovieCard/MovieCard";

type Movie = {
  title: string;
  dir: string;
  year: string;
  poster: string;
  rank: string;
};

export default function Ranking() {
  const movies: Movie[] = [
    { rank:"1", title: "Spiderman: Across the Spider-verse", dir: "Joaquim Dos Santos, Justin K. Thompson, Kemp Powers", year: "2023", poster: "https://images2.thanhnien.vn/528068263637045248/2023/6/1/spider-man-across-the-spider-verse-poster-16850724641101103572976-168564586504456671684.jpg" },
    { rank:"2", title: "Spiderman: Across the Spider-verse", dir: "Joaquim Dos Santos, Justin K. Thompson, Kemp Powers", year: "2023", poster: "https://images2.thanhnien.vn/528068263637045248/2023/6/1/spider-man-across-the-spider-verse-poster-16850724641101103572976-168564586504456671684.jpg" },
    { rank:"3", title: "Spiderman: Across the Spider-verse", dir: "Joaquim Dos Santos, Justin K. Thompson, Kemp Powers", year: "2023", poster: "https://images2.thanhnien.vn/528068263637045248/2023/6/1/spider-man-across-the-spider-verse-poster-16850724641101103572976-168564586504456671684.jpg" },
    { rank:"4", title: "Spiderman: Across the Spider-verse", dir: "Joaquim Dos Santos, Justin K. Thompson, Kemp Powers", year: "2023", poster: "https://images2.thanhnien.vn/528068263637045248/2023/6/1/spider-man-across-the-spider-verse-poster-16850724641101103572976-168564586504456671684.jpg" },
  ];
  
    return(
      <div className="bg-cover bg-center min-h-screen custom_bg">
        <Navbar />
        <div>
          <div className="text-center text-yellow-200 text-3xl font-bold font-sans my-3">Most Popular Movies</div>
        </div>
        <div className="flex justify-center">
          <div>
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
}