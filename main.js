const apiKey = 'e9a7eae639c7385738bbef9add2eba9d';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (!cityName) {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
       
        <p>Temperature:${Math.round(data.main.temp)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].main}</p>
       
      `;
    })
    .catch(error => {
      weatherInfo.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    });
});
