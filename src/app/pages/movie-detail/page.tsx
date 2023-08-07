import "tailwindcss/tailwind.css"
import React from "react";
import Navbar from "@/components/Navbar/Navbar";

type Movie = {
  title: string;
  dir: string;
  year: string;
  poster: string;
  overview: string;
};

export default function Detail() {
    const movie: Movie = 
      { title: "Spiderman: Across the Spider-verse", dir: "Joaquim Dos Santos, Justin K. Thompson, Kemp Powers", year: "2023", poster: "https://images2.thanhnien.vn/528068263637045248/2023/6/1/spider-man-across-the-spider-verse-poster-16850724641101103572976-168564586504456671684.jpg", overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
    
      return(
        <div className="bg-cover bg-center min-h-screen custom_bg">
          <Navbar />
          <div className="flex justify-center">
            <div>
              <div class="container my-5">
                <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid rounded" src={movie.poster} alt="Movie Poster">
                </div>
                <div class="col-md-8">
                    <h2>{movie.title}</h2>
                    <p>Director: {movie.dir}</p> 
                    <p>Year: {movie.year}</p>
                    <p>Overview: {movie.overview}</p>
                </div>
                </div>
               </div>
            </div>
          </div>
        </div>
      );
  }
