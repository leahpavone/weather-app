// const currentDate = document.querySelector(".current-date");
// const currentTime = document.querySelector(".current-time");
const currentLocation = document.querySelector(".current-location");
const temp = document.querySelector(".current-temp");
const icon = document.querySelector(".temp-icon");
const description = document.querySelector(".description");
const locationForm = document.querySelector("form");
let locationInput = document.querySelector(".location-input");
const findLocationButton = document.querySelector(".find-location-button");

// const fButton = document.querySelector(".f-button");
// const cButton = document.querySelector(".c-button");

// const dateTimestamp = moment().format("dddd, MMMM Do");
// const timeTimestamp = moment().format("h:mm A");
const day1 = moment().format("dddd M/D");
const day2 = moment().add(1, "days").format("dddd M/D");
const day3 = moment().add(2, "days").format("dddd M/D");

const localTime = document.querySelector(".local-time");

const forecast = document.querySelector(".forecast-1");
const date = document.querySelector(".date");
const feelsLike = document.querySelector(".feels-like");
const avgTemp = document.querySelector(".avgtemp");
const minTemp = document.querySelector(".mintemp");
const maxTemp = document.querySelector(".maxtemp");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const avgHumidity = document.querySelector(".avg-humidity");
const uvIndex = document.querySelector(".uv-index");

const iconF2 = document.querySelector(".temp-icon-f2");
const iconF3 = document.querySelector(".temp-icon-f3");

const forecastTwo = document.querySelector(".forecast-2");
const dateF2 = document.querySelector(".date-f2");
const descriptionF2 = document.querySelector(".description-f2");
const avgTempF2 = document.querySelector(".avgtemp-f2");
const minTempF2 = document.querySelector(".mintemp-f2");
const maxTempF2 = document.querySelector(".maxtemp-f2");
const avgHumidityF2 = document.querySelector(".avg-humidity-f2");
const uvIndexF2 = document.querySelector(".uv-index-f2");
const sunriseF2 = document.querySelector(".sunrise-f2");
const sunsetF2 = document.querySelector(".sunset-f2");

const forecastThree = document.querySelector(".forecast-3");
const dateF3 = document.querySelector(".date-f3");
const descriptionF3 = document.querySelector(".description-f3");
const avgTempF3 = document.querySelector(".avgtemp-f3");
const minTempF3 = document.querySelector(".mintemp-f3");
const maxTempF3 = document.querySelector(".maxtemp-f3");
const avgHumidityF3 = document.querySelector(".avg-humidity-f3");
const uvIndexF3 = document.querySelector(".uv-index-f3");
const sunriseF3 = document.querySelector(".sunrise-f3");
const sunsetF3 = document.querySelector(".sunset-f3");

// currentDate.innerHTML = dateTimestamp;
// currentTime.innerHTML = timeTimestamp;

const renderWeatherData = (data) => {
  localTime.innerHTML = `The local time in ${data.location.name} is ${moment(
    data.location.localtime
  ).format("h:mm A")}`;
  date.innerHTML = day1;

  currentLocation.innerHTML = data.location.name;

  description.innerHTML = data.current.condition.text;
  let currentIcon = data.current.condition.icon;
  icon.src = currentIcon;

  temp.innerHTML = `${data.current.temp_f}° F`;

  feelsLike.innerHTML = `Feels like: ${data.current.feelslike_f}° F`;

  avgTemp.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_f}° F`;
  minTemp.innerHTML = `${data.forecast.forecastday[0].day.mintemp_f}° F`;
  maxTemp.innerHTML = `${data.forecast.forecastday[0].day.maxtemp_f}° F`;
  avgHumidity.innerHTML = `Humidity: ${data.forecast.forecastday[0].day.avghumidity}%`;
  uvIndex.innerHTML = `UV: ${data.forecast.forecastday[0].day.uv}`;
  sunrise.innerHTML = `${data.forecast.forecastday[0].astro.sunrise}`;
  sunset.innerHTML = `${data.forecast.forecastday[0].astro.sunset}`;

  dateF2.innerHTML = day2;
  descriptionF2.innerHTML = data.forecast.forecastday[1].day.condition.text;
  let f2Icon = data.forecast.forecastday[1].day.condition.icon;
  iconF2.src = f2Icon;
  avgTempF2.innerHTML = `Average ${data.forecast.forecastday[1].day.avgtemp_f}° F`;
  minTempF2.innerHTML = `${data.forecast.forecastday[1].day.mintemp_f}° F`;
  maxTempF2.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_f}° F`;
  avgHumidityF2.innerHTML = `Humidity: ${data.forecast.forecastday[1].day.avghumidity}%`;
  uvIndexF2.innerHTML = `UV: ${data.forecast.forecastday[1].day.uv}`;
  sunriseF2.innerHTML = `${data.forecast.forecastday[1].astro.sunrise}`;
  sunsetF2.innerHTML = `${data.forecast.forecastday[1].astro.sunset}`;

  dateF3.innerHTML = day3;
  descriptionF3.innerHTML = data.forecast.forecastday[2].day.condition.text;
  let f3Icon = data.forecast.forecastday[2].day.condition.icon;
  iconF3.src = f3Icon;
  avgTempF3.innerHTML = `Average: ${data.forecast.forecastday[2].day.avgtemp_f}° F`;
  minTempF3.innerHTML = `${data.forecast.forecastday[2].day.mintemp_f}° F`;
  maxTempF3.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_f}° F`;
  avgHumidityF3.innerHTML = `Humidity: ${data.forecast.forecastday[2].day.avghumidity}%`;
  uvIndexF3.innerHTML = `UV: ${data.forecast.forecastday[2].day.uv}`;
  sunriseF3.innerHTML = `${data.forecast.forecastday[2].astro.sunrise}`;
  sunsetF3.innerHTML = `${data.forecast.forecastday[2].astro.sunset}`;
};

const fetchWeatherData = async (cityName) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "974ed41962msh1d60a3df392fcb6p16f858jsn4b85f384d9bd",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
  };

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3`,
    options
  );

  if ((response.status = 200)) {
    const data = await response.json();
    console.log(data);
    return renderWeatherData(data);
  } else {
    throw new Error("unable to fetch weather data");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  fetchWeatherData("Los Angeles");
});

locationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (locationInput.value.length === 0) {
    alert("Please enter city");
  } else {
    cityName = locationInput.value;
    console.log(cityName);
    fetchWeatherData(cityName);
  }
  locationInput.value = "";
});

// cButton.addEventListener("click", () => {
//   fButton.classList.remove("active");
//   cButton.classList.add("active");

//   console.log(temp.innerHTML);

//   // fetchWeatherData("", "C");
// });

// fButton.addEventListener("click", () => {
//   cButton.classList.remove("active");
//   fButton.classList.add("active");

//   console.log(temp.innerHTML);
//   city = locationInput.value;
//   fetchWeatherData(city);
// });
