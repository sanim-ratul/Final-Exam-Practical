const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key

function getWeather() {
  const cityName = document.getElementById("city-search").value.trim();
  if (!cityName) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/3.0/onecall?q=${cityName}&appid=${apiKey}`;