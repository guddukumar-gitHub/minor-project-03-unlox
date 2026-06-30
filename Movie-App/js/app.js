
import {
    searchMovies,
    getMovieDetails
} from "./api.js";

import {
    displayMovies,
    showLoading,
    hideLoading,
    showError,
    hideError,
    clearMovies
} from "./ui.js";

const searchForm = document.querySelector("#searchForm");

const movieInput = document.querySelector("#movieInput");

// Submit Event
searchForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const movieName = movieInput.value.trim();

    // Validation
    if (!movieName) {

        clearMovies();

        showError("Please enter a movie name.");

        return;

    }

    try {

        hideError();

        clearMovies();

        showLoading();

        // Search Movies
        const movies = await searchMovies(movieName);

        // Fetch Full Details
        const detailedMovies = await Promise.all(

            movies.map((movie) =>

                getMovieDetails(movie.imdbID)

            )

        );

        // Display
        displayMovies(detailedMovies);

    } catch (error) {

        showError(error.message);

    } finally {

        hideLoading();

    }

});