  //import { Movie } from './moviesData'
  type Movie = {
    title: string;
    dir: string;
    year: string;
    poster: string;
    rank: string;
  };

  const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
      <div className="mt-3 mb-3 relative flex w-full h-[280px] max-w-[40rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 w-1/3 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img
          src= {movie.poster} 
          alt="movie-poster" 
          className="h-full w-50 object-cover"
        />
      </div>
      <div className="p-8 pl-0 pt-5">
        <h3 className="block font-sans text-4xl font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
          #{movie.rank}
        </h3>
        <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {movie.title} ({movie.year})
        </h4>
        <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Directed by: {movie.dir}
        </p>
        <a className="inline-block" href="#">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all bg-pink-500/10 hover:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" >
            See More
          </button>
        </a>
      </div>
    </div>
    );
  }

  export default MovieCard;