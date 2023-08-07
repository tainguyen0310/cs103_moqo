const apiKey: string = '29c85cb4c95ff7a05f69411ec90dc6f2';

interface MovieData {
  id: string;
  title: string;
  releaseDate: string;
  overview: string;
  posterPath: string;
}

async function searchMovie(searchContent: string): Promise<MovieData> {
  try {
    const query: string = encodeURIComponent(searchContent);
    const url: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    
    const response: Response = await fetch(url);
    const data: any = await response.json();

    if (data.results && data.results.length > 0) {
      // Assuming you want to return the first result
      const movie: any = data.results[0];
      console.log(movie);
      return {
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        overview: movie.overview,
        posterPath: movie.poster_path,
      };
    } else {
      throw new Error('Movie not found.');
    }
  } catch (error) {
    throw new Error('Error fetching movie data. Please try again later.');
  }
}
// export this function
export { searchMovie };

