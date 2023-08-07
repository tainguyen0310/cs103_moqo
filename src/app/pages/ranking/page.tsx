// import Image from "next/image";
import "tailwindcss/tailwind.css"
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import MovieCard from "@/components/MovieCard/MovieCard";

type Movie = {
    title: string;
    dir: string;
    year: string;
    posterPath: string;
    rank: string;
  };

export default function Ranking() {
  const movies: Movie[] = [
    { rank:"1", title: "Spiderman: Across the Spider-verse", dir: "Joaquim Dos Santos, Justin K. Thompson, Kemp Powers", year: "2023", posterPath: "https://images2.thanhnien.vn/528068263637045248/2023/6/1/spider-man-across-the-spider-verse-poster-16850724641101103572976-168564586504456671684.jpg" },
    { rank:"2", title: "Guardians Of The Galaxy vol 3", dir: "James Gunn", year: "2023", posterPath: "https://assets-prd.ignimgs.com/2023/02/13/guardians-of-the-galaxy-vol-three-newbutton-1676306275720.jpg?width=300" },
    { rank:"3", title: "Transformers: Rise of the Beasts", dir: "Steven Caple Jr", year: "2023", posterPath: "https://static.tvtropes.org/pmwiki/pub/images/img_3540.jpeg" },
    { rank:"4", title: "Everything Everywhere All at Once", dir: "Everything Everywhere All at Once ", year: "2023", posterPath: "https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/c/u/cu_c_chi_n_a_v_tr_-_payoff_poster_-_k_ch_th_c_fb_-_dkkc_24062022_1_.jpg" },
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