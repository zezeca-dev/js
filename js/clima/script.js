const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('error-message');

const cityName = document.getElementById('city-name');
const localTime = document.getElementById('local-time');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const uvIndex = document.getElementById('uv-index');

const apiKey = 'f446e3c9c6a74a1da2620718251908';


async function fetchWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=pt`
        );
        
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return null;
    }
}


function displayWeatherData(data) {

    const { location, current } = data;
    
    cityName.textContent = `${location.name}, ${location.country}`;
    localTime.textContent = `Horário local: ${location.localtime}`;
    weatherIcon.src = `https:${current.condition.icon}`;
    temperature.textContent = `${current.temp_c}°C`;
    condition.textContent = current.condition.text;
    feelsLike.textContent = `${current.feelslike_c}°C`;
    humidity.textContent = `${current.humidity}%`;
    windSpeed.textContent = `${current.wind_kph} km/h`;
    pressure.textContent = `${current.pressure_mb} hPa`;
    visibility.textContent = `${current.vis_km} km`;
    uvIndex.textContent = current.uv;
    
    weatherResult.classList.remove('hidden');
    errorMessage.classList.add('hidden');
}

function displayError() {
    errorMessage.textContent = 'Cidade não encontrada. Tente novamente.';
    errorMessage.classList.remove('hidden');
    weatherResult.classList.add('hidden');
}

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    
    if (city) {
        const weatherData = await fetchWeatherData(city);
        
        if (weatherData) {
            displayWeatherData(weatherData);
        } else {
            displayError();
        }
    }
});
cityInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        
        if (city) {
            const weatherData = await fetchWeatherData(city);
            
            if (weatherData) {
                displayWeatherData(weatherData);
            } else {
                displayError();
            }
        }
    }
});