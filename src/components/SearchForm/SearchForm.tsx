"use client"
import Image from "next/image";
import searchIcon from "../../../public/searchIcon.jpg";
import React from "react";
import "tailwindcss/tailwind.css";
import { searchMovie } from "@/api/movie";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Movie {
    id: string;
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
  }
const SearchForm = (props: any) => {
    const router = useRouter();
    const [searchContent, setSearchContent] = useState("");
    // return the only one movie that we get from the api
    const [SearchError, setSearchError] = useState("");
    const [movie, setMovie] = useState<Movie| null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleSearchClick = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const fetchedMovie = await searchMovie(searchContent);
            const movie = setMovie(fetchedMovie);
            console.log(movie);
            const id  = fetchedMovie.id;
            router.push(`/pages/detail/${id}`);
          } catch (error) {
            setSearchError("Cannot find movie");
          }
        setIsLoading(false);
    };
    return(
        <form onSubmit={handleSearchClick}>
        <div className="flex justify-center border-2 rounded-full bg-gradient">
            <div className="flex justify-center items-center w-full ">
                <div className="flex bg-gradient bg-transparent w-full">
                <Image className="h-4 w-4 mr-2 my-auto ml-5" src={searchIcon} alt="SearchIcon" />
                <input className="rounded-full px-4 py-2 w-full bg-inherit text-white outline-none" type="text" placeholder="Search"
                value={searchContent}
                onChange={(e) => setSearchContent(e.target.value)} />
            </div>
            
        </div>
        
        </div>
        {/* if there is no movie show cannot find movie message */}
        {SearchError && (
                <div className="text-red-500 text-center mt-2 text-xl">{SearchError}</div>

                )}
        <div className="flex justify-center mt-16 ">
          <div className="border-2  rounded-full bg-gradient border-search-btn w-1/3">
            <div className="flex justify-center items-center px-auto">
                {/* Search Button */}
                <div className="flex bg-gradient bg-transparent">
                    <button className="rounded-full px-4 py-2 w-full bg-inherit text-yellow-300" type="submit">Search</button>
                </div>
            </div>
          </div>
        </div>
        
      </form>
    )    
}

export default SearchForm;