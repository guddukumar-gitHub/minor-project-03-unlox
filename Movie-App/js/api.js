

const API_KEY = "25f90e37";

const BASE_URL = "https://www.omdbapi.com/";

// Fetch Movies
export const searchMovies = async (movieName) => {

    try {

        const response = await fetch(
            `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(movieName)}`
        );

        if (!response.ok) {

            throw new Error("Something went wrong.");

        }

        const data = await response.json();

        if (data.Response === "False") {

            throw new Error(data.Error);

        }

        return data.Search;

    } catch (error) {

        throw error;

    }

};

// Fetch Movie Details
export const getMovieDetails = async (imdbID) => {

    try {

        const response = await fetch(
            `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`
        );

        if (!response.ok) {

            throw new Error("Unable to fetch movie details.");

        }

        const data = await response.json();

        if (data.Response === "False") {

            throw new Error(data.Error);

        }

        return data;

    } catch (error) {

        throw error;

    }

};