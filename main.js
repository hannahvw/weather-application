// Date
let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let date = now.getDate();
let year = now.getFullYear();

let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDate()];

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day}, ${month} ${date}, ${year} ${hour}:${minutes}`;

//display current weather function and api

function displayCurrentWeather(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.temperature.current);
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  let condition = response.data.condition.description;
  let icon = response.data.condition.icon_url;

  let currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.innerHTML = `${humidity}`;

  let currentWind = document.querySelector("#current-wind");
  currentWind.innerHTML = `${wind}`;

  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = `${temperature}`;

  let currentCondition = document.querySelector("#current-condition");
  currentCondition.innerHTML = `${condition}`;

  let currentIcon = document.querySelector("#current-weather-icon");
  currentIcon.innerHTML = `<img src=${icon}>`;
}

// Replace city name with searched city name

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#text-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = searchInput.value;
  }
  let city = searchInput.value;
  let apiKey = "2cacbf3044aeb9a87b5a33at06fco72a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayCurrentWeather);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

function displayForecast(response) {
  console.log(response.data);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

    let forecastDay = document.querySelectorAll(".forecast-day");
    forecastDay.innerHTML = "hello";
  
}

let city = "Chicago;";
let apiKey = "2cacbf3044aeb9a87b5a33at06fco72a";
let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
axios.get(forecastApiUrl).then(displayForecast);
