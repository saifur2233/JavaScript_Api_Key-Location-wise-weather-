const API_KEY = `d067dcd1380a4268df8c2c744618d441`;

const loadTemparature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  const temperature = document.getElementById("temperature");
  temperature.innerText = data.main.temp;
  const cityName = document.getElementById("city-name");
  cityName.innerText = data.name;
  const currentWeather = document.getElementById("current-weather");
  currentWeather.innerText = data.weather[0].main;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  loadTemparature(city);
});
