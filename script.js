const currentDate = document.querySelector(".current-date");
const currentTime = document.querySelector(".current-time");
const currentLocation = document.querySelector(".current-location");
const temp = document.querySelector(".current-temp");
const tempMin = document.querySelector(".temp-min");
const tempMax = document.querySelector(".temp-max");
const tempUnit = document.querySelector(".temp-unit");
const icon = document.querySelector(".temp-icon");
const description = document.querySelector(".description");
const locationForm = document.querySelector("form");
let locationInput = document.querySelector(".location-input");
const findLocationButton = document.querySelector(".find-location-button");

// let lat;
// let lon;
// let city;

// locationInput.value === myLocation;

const dateTimestamp = moment().format("dddd, MMMM Do");
// const timeTimestamp = moment().format("HH:mm:ss);
console.log(dateTimestamp);
const timeTimestamp = moment().format("h:mm A");

const renderWeatherData = async (data) => {
  currentDate.innerHTML = dateTimestamp;
  currentTime.innerHTML = timeTimestamp;
  currentLocation.innerHTML = data.name;
  temp.innerHTML = `${data.main.temp} °F`;
  tempMin.innerHTML = `Low: ${data.main.temp_min} °F`;
  tempMax.innerHTML = `High: ${data.main.temp_max} °F`;
  let currentIcon = data.weather[0].icon;
  icon.src = `http://openweathermap.org/img/wn/${currentIcon}@2x.png`;
  console.log(currentIcon);
  description.innerHTML = data.weather[0].description;
};

const fetchWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&&appid=c2e3fdc3e2e3cfbcbd7192df10c3a265`
  );

  if ((response.status = 200)) {
    const data = await response.json();
    console.log(data);
    return renderWeatherData(data);
  } else {
    throw new Error("unable to fetch weather data");
  }
};

// const weatherData = {
//   city: data.name,
//   temp: data.temp,
//   minTemp: data.temp_min,
//   maxTemp: data.temp_max,
//   icon: data.icon,
//   description: data.description
// };

// console.log(weatherData);

window.addEventListener("DOMContentLoaded", () => {
  fetchWeatherData("Los Angeles");
});

locationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  city = locationInput.value;
  console.log(city);
  fetchWeatherData(city);
});
