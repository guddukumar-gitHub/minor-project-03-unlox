
import { getWeatherByCity } from "./api.js";

import {
    displayWeather,
    showLoading,
    hideLoading,
    showError,
    hideError,
    hideWeather
} from "./ui.js";

// DOM Elements
const searchForm = document.querySelector("#searchForm");

const cityInput = document.querySelector("#cityInput");

// Form Submit Event
searchForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {

        hideWeather();

        showError("Please enter a city name.");

        return;

    }

    try {

        hideError();

        hideWeather();

        showLoading();

        // Fetch weather data
        const weatherData = await getWeatherByCity(city);

        // Update UI
        displayWeather(weatherData);

    } catch (error) {

        showError(error.message);

    } finally {

        hideLoading();

    }

});