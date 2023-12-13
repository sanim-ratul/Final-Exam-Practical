const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key

function getWeather() {
  const cityName = document.getElementById("city-search").value.trim();
  if (!cityName) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/3.0/onecall?q=${cityName}&appid=${apiKey}`;

  const weatherDescElement = weatherDataContainer.querySelector("#weather-desc");
const weatherIconElement = weatherDataContainer.querySelector("#weather-icon");
const forecastListElement = weatherDataContainer.querySelector("#forecast-list");
const feelsLikeElement = weatherDataContainer.querySelector("#feels-like");
const humidityElement = weatherDataContainer.querySelector("#humidity");
const windSpeedElement = weatherDataContainer.querySelector("#wind-speed");

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=YOUR_API_KEY&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Update city name
      cityNameElement.innerText = data.city.name;

      sync function searchWeather() {
        const apiKey = 'Javascript';
        const cityInput = document.getElementById('search-input').value;

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${5a4a244b150449ea4c8ac5fe159deb2a}&units=metric`);
            const data = await response.json();

            document.getElementById('city').innerText = `City: ${data.name}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;