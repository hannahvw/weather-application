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
