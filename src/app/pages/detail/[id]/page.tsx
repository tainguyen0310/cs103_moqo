"use client"
import "tailwindcss/tailwind.css"
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useSearchParams} from "next/navigation";
import { useRouter } from "next/navigation";
import { searchMovieID } from "@/api/movieID";

type Movie = {
    id: string;
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
  };


const Detail = async  ({ params: { id } }: { params: { id: string } })  => {
  const router = useSearchParams();
  const searchedMovie = await searchMovieID(id);
  const movie : Movie ={
    id: searchedMovie.id,
    title: searchedMovie.title,
    releaseDate: searchedMovie.releaseDate,
    overview: searchedMovie.overview,
    posterPath: "https://image.tmdb.org/t/p/original/" + searchedMovie.posterPath
  }

  return(
      <div className="bg-cover bg-center min-h-screen custom_bg">
      <Navbar />
      <div className="flex justify-center mx-20">
          <div className="w-1/3 mr-5">
                <img
                  className="w-full rounded"
                  src={movie.posterPath}
                  alt="Movie Poster"
                />
          </div>
            <div className="mx-5">
              <h2 className="text-4xl font-semibold mb-2 my-1">{movie.title}</h2>
              <p className="text-lg mb-2 my-1">Date of release: {movie.releaseDate}</p>
              <p className="text-base my-1">{movie.overview}</p>
          </div>
      </div>
    </div>
  );
};

    
export default Detail;

