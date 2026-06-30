// OpenWeather API Configuration

const API_KEY = "dc290486fa13d9421a414abef0775c08";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Fetch Weather Data
export const getWeatherByCity = async (city) => {

    try {

        const response = await fetch(
            `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        // Handle HTTP errors and provide API message when available
        if (!response.ok) {

            let errMsg = `Request failed (${response.status})`;

            try {
                const errData = await response.json();
                if (errData && errData.message) errMsg = errData.message;
            } catch (e) {
                // ignore JSON parse errors
            }

            throw new Error(errMsg);

        }

        const data = await response.json();

        return data;

    } catch (error) {

        throw error;

    }

};