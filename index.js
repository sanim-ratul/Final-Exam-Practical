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