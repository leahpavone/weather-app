const currentDate = document.querySelector(".current-date");
const currentTime = document.querySelector(".current-time");
const currentLocation = document.querySelector(".current-location");
const temp = document.querySelector(".current-temp");
const tempMin = document.querySelector(".temp-min");
const tempMax = document.querySelector(".temp-max");
const icon = document.querySelector(".temp-icon");
const description = document.querySelector(".description");
const locationForm = document.querySelector("form");
let locationInput = document.querySelector(".location-input");
const findLocationButton = document.querySelector(".find-location-button");

const fButton = document.querySelector(".f-button");
const cButton = document.querySelector(".c-button");
// const tempUnit = document.querySelector(".temp-unit");

const dateTimestamp = moment().format("dddd, MMMM Do");
const timeTimestamp = moment().format("h:mm A");

const sunriseTime = document.querySelector(".sunrise-time");
const sunsetTime = document.querySelector(".sunset-time");

// const getFahrenheit = (num) => {
//   const f = (num - 273.15) * 1.8 + 32;
//   return Math.round(f * 10) / 10;
// };

// const getCelsius = (num) => {
//   const c = num - 273.15;
//   return Math.round(c * 10) / 10;
// };

const renderWeatherData = (data) => {
  currentDate.innerHTML = dateTimestamp;
  currentTime.innerHTML = timeTimestamp;
  currentLocation.innerHTML = data.name;

  const changeUnit = (unit) => {
    if (fButton.classList.contains("active")) {
      unit === "F";
    } else {
      unit === "C";
      fButton.classList.remove("active");
      cButton.classList.add("active");
    }
    return unit;
  };

  const mainT = data.main.temp;
  const minT = data.main.temp_min;
  const maxT = data.main.temp_max;

  const newMainT = ((mainT - 32) * (5 / 9)).toFixed(2);
  const newMinT = ((minT - 32) * (5 / 9)).toFixed(2);
  const newMaxT = ((maxT - 32) * (5 / 9)).toFixed(2);

  console.log(`${newMainT}° C`);

  // if (cButton.classList.contains("active")) {
  //   temp.innerHTML = `${newMainT}° C`;
  //   tempMin.innerHTML = `${newMinT}° C`;
  //   tempMax.innerHTML = `${newMaxT}° C`;
  // }
  if (fButton.classList.contains("active")) {
    temp.innerHTML = `${mainT}° F`;
    tempMin.innerHTML = `${minT}° F`;
    tempMax.innerHTML = `${maxT}° F`;
  } else {
    cButton.classList.add("active");
    temp.innerHTML = `${newMainT}° C`;
    tempMin.innerHTML = `${newMinT}° C`;
    tempMax.innerHTML = `${newMaxT}° C`;
  }

  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;

  console.log(sunrise, sunset);
  console.log(data.timezone);

  const srTime = moment.unix(sunrise).format("h:mm A");
  console.log(moment.unix(sunrise));
  const ssTime = moment.unix(sunset).format("h:mm A");
  sunriseTime.innerHTML = srTime;
  sunsetTime.innerHTML = ssTime;

  console.log(srTime, ssTime);

  let currentIcon = data.weather[0].icon;
  icon.src = `http://openweathermap.org/img/wn/${currentIcon}@2x.png`;

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

window.addEventListener("DOMContentLoaded", () => {
  fetchWeatherData("Los Angeles");
  fButton.classList.add("active");
});

locationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (locationInput.value.length === 0) {
    alert("Please enter city");
  } else {
    city = locationInput.value;
    fetchWeatherData(city);
  }
  locationInput.value = "";
});

cButton.addEventListener("click", () => {
  fButton.classList.remove("active");
  cButton.classList.add("active");
});

fButton.addEventListener("click", () => {
  cButton.classList.remove("active");
  fButton.classList.add("active");
});
