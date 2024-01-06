/*  WEEK 3 Homework

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let city = prompt("Enter a city...");
city = city.toLowerCase();

if (weather[city] !== undefined) {
  let temp = weather[city].temp;
  let celciusTemp = Math.round(temp);
  let fahrenheitTemp = Math.round(weather[city].temp * 1.8 + 32);
  let humidity = weather[city].humidity;

  alert(
    `It is currently ${celciusTemp}°C (${fahrenheitTemp}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
*/

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

// Replace city name with searched city name

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#text-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = searchInput.value;
  }  
}



let form = document.querySelector("form");
form.addEventListener("submit", search);

//display current weather function and api

function displayCurrentWeather(response) {
  let temperature = Math.round(response.data.temperature.current);
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  let condition = response.data.condition.description;
console.log(response.data);

  let currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.innerHTML = `${humidity}`;

  let currentWind = document.querySelector("#current-wind");
  currentWind.innerHTML = `${wind}`;

  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = `${temperature}`;

  let currentCondition = document.querySelector("#current-condition");
  currentCondition.innerHTML = `${condition}`;
}

let city = "Denver";
let apiKey = "2cacbf3044aeb9a87b5a33at06fco72a";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;


axios.get(apiUrl).then(displayCurrentWeather);