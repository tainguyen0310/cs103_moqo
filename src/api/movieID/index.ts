const apiKey: string = '29c85cb4c95ff7a05f69411ec90dc6f2';

interface MovieData {
  id: string;
  title: string;
  releaseDate: string;
  overview: string;
  posterPath: string;
}

// Search movie by ID
async function searchMovieID(movieId: string): Promise<MovieData> {
  try {
    const id: string = encodeURIComponent(movieId.toString());
    const url: string = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data) {
      return {
        id: data.id,
        title: data.title,
        releaseDate: data.release_date,
        overview: data.overview,
        posterPath: data.poster_path,
      };
    } else {
      throw new Error('Movie not found.');
    }
  } catch (error) {
    throw new Error('Error fetching movie data. Please try again later.');
  }
}

// export this function
export { searchMovieID };
