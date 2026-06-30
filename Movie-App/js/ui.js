// DOM Elements

const movieContainer = document.querySelector("#movieContainer");

const loading = document.querySelector("#loading");

const error = document.querySelector("#error");

// Render Movies
export const displayMovies = (movies) => {

    movieContainer.innerHTML = "";

    movies.forEach((movie) => {

        const {
            Title,
            Poster,
            Year,
            Released,
            imdbRating,
            Runtime,
            Genre,
            Plot
        } = movie;

        const poster =
            Poster !== "N/A"
                ? Poster
                : "../assets/no-image.jpg";

        const movieCard = document.createElement("div");

        movieCard.className = "movie-card";

        movieCard.innerHTML = `

            <img
                src="${poster}"
                alt="${Title}"
            >

            <div class="movie-info">

                <h3>${Title}</h3>

                <p><strong>Year:</strong> ${Year}</p>

                <p><strong>Released:</strong> ${Released}</p>

                <p><strong>IMDb:</strong> ⭐ ${imdbRating}</p>

                <p><strong>Runtime:</strong> ${Runtime}</p>

                <p><strong>Genre:</strong> ${Genre}</p>

                <p>${Plot}</p>

            </div>

        `;

        const image = movieCard.querySelector("img");

        image.onerror = () => {

            image.onerror = null;

            image.src = "../assets/no-image.jpg";

        };


        movieContainer.appendChild(movieCard);

    });

};

// Show Loading
export const showLoading = () => {

    loading.classList.remove("hidden");

};

// Hide Loading
export const hideLoading = () => {

    loading.classList.add("hidden");

};

// Show Error
export const showError = (message) => {

    error.textContent = message;

    error.classList.remove("hidden");

};

// Hide Error
export const hideError = () => {

    error.textContent = "";

    error.classList.add("hidden");

};

// Clear Movies
export const clearMovies = () => {

    movieContainer.innerHTML = "";

};