// DOM Elements
const weatherCard = document.querySelector("#weatherCard");

const loading = document.querySelector("#loading");

const error = document.querySelector("#error");

const cityName = document.querySelector("#cityName");

const weatherIcon = document.querySelector("#weatherIcon");

const temperature = document.querySelector("#temperature");

const description = document.querySelector("#description");

const humidity = document.querySelector("#humidity");

const wind = document.querySelector("#wind");

// Render Weather
export const displayWeather = (weatherData) => {

    // Object Destructuring
    const {
        name,
        main,
        weather,
        wind: windData
    } = weatherData;

    cityName.textContent = name;

    temperature.textContent = `${Math.round(main.temp)} °C`;

    description.textContent = weather[0].description;

    humidity.textContent = `${main.humidity}%`;

    wind.textContent = `${windData.speed} m/s`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    weatherIcon.alt = weather[0].description;

    weatherCard.classList.remove("hidden");

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

// Hide Weather Card
export const hideWeather = () => {

    weatherCard.classList.add("hidden");

};