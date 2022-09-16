console.log("hi");

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

const temp12a = document.querySelector(".time-temp-12a");
const temp1a = document.querySelector(".time-temp-1a");
const temp2a = document.querySelector(".time-temp-2a");
const temp3a = document.querySelector(".time-temp-3a");
const temp4a = document.querySelector(".time-temp-4a");
const temp5a = document.querySelector(".time-temp-5a");
const temp6a = document.querySelector(".time-temp-6a");
const temp7a = document.querySelector(".time-temp-7a");
const temp8a = document.querySelector(".time-temp-8a");
const temp9a = document.querySelector(".time-temp-9a");
const temp10a = document.querySelector(".time-temp-10a");
const temp11a = document.querySelector(".time-temp-11a");
const temp12p = document.querySelector(".time-temp-12p");
const temp1p = document.querySelector(".time-temp-1p");
const temp2p = document.querySelector(".time-temp-2p");
const temp3p = document.querySelector(".time-temp-3p");
const temp4p = document.querySelector(".time-temp-4p");
const temp5p = document.querySelector(".time-temp-5p");
const temp6p = document.querySelector(".time-temp-6p");
const temp7p = document.querySelector(".time-temp-7p");
const temp8p = document.querySelector(".time-temp-8p");
const temp9p = document.querySelector(".time-temp-9p");
const temp10p = document.querySelector(".time-temp-10p");
const temp11p = document.querySelector(".time-temp-11p");

const time12a = document.querySelector(".time-12a");
const time1a = document.querySelector(".time-1a");
const time2a = document.querySelector(".time-2a");
const time3a = document.querySelector(".time-3a");
const time4a = document.querySelector(".time-4a");
const time5a = document.querySelector(".time-5a");
const time6a = document.querySelector(".time-6a");
const time7a = document.querySelector(".time-7a");
const time8a = document.querySelector(".time-8a");
const time9a = document.querySelector(".time-9a");
const time10a = document.querySelector(".time-10a");
const time11a = document.querySelector(".time-11a");
const time12p = document.querySelector(".time-12p");
const time1p = document.querySelector(".time-1p");
const time2p = document.querySelector(".time-2p");
const time3p = document.querySelector(".time-3p");
const time4p = document.querySelector(".time-4p");
const time5p = document.querySelector(".time-5p");
const time6p = document.querySelector(".time-6p");
const time7p = document.querySelector(".time-7p");
const time8p = document.querySelector(".time-8p");
const time9p = document.querySelector(".time-9p");
const time10p = document.querySelector(".time-10p");
const time11p = document.querySelector(".time-11p");

const temp12aF2 = document.querySelector(".time-temp-12a-f2");
const temp1aF2 = document.querySelector(".time-temp-1a-f2");
const temp2aF2 = document.querySelector(".time-temp-2a-f2");
const temp3aF2 = document.querySelector(".time-temp-3a-f2");
const temp4aF2 = document.querySelector(".time-temp-4a-f2");
const temp5aF2 = document.querySelector(".time-temp-5a-f2");
const temp6aF2 = document.querySelector(".time-temp-6a-f2");
const temp7aF2 = document.querySelector(".time-temp-7a-f2");
const temp8aF2 = document.querySelector(".time-temp-8a-f2");
const temp9aF2 = document.querySelector(".time-temp-9a-f2");
const temp10aF2 = document.querySelector(".time-temp-10a-f2");
const temp11aF2 = document.querySelector(".time-temp-11a-f2");
const temp12pF2 = document.querySelector(".time-temp-12p-f2");
const temp1pF2 = document.querySelector(".time-temp-1p-f2");
const temp2pF2 = document.querySelector(".time-temp-2p-f2");
const temp3pF2 = document.querySelector(".time-temp-3p-f2");
const temp4pF2 = document.querySelector(".time-temp-4p-f2");
const temp5pF2 = document.querySelector(".time-temp-5p-f2");
const temp6pF2 = document.querySelector(".time-temp-6p-f2");
const temp7pF2 = document.querySelector(".time-temp-7p-f2");
const temp8pF2 = document.querySelector(".time-temp-8p-f2");
const temp9pF2 = document.querySelector(".time-temp-9p-f2");
const temp10pF2 = document.querySelector(".time-temp-10p-f2");
const temp11pF2 = document.querySelector(".time-temp-11p-f2");

const time12aF2 = document.querySelector(".time-12a-f2");
const time1aF2 = document.querySelector(".time-1a-f2");
const time2aF2 = document.querySelector(".time-2a-f2");
const time3aF2 = document.querySelector(".time-3a-f2");
const time4aF2 = document.querySelector(".time-4a-f2");
const time5aF2 = document.querySelector(".time-5a-f2");
const time6aF2 = document.querySelector(".time-6a-f2");
const time7aF2 = document.querySelector(".time-7a-f2");
const time8aF2 = document.querySelector(".time-8a-f2");
const time9aF2 = document.querySelector(".time-9a-f2");
const time10aF2 = document.querySelector(".time-10a-f2");
const time11aF2 = document.querySelector(".time-11a-f2");
const time12pF2 = document.querySelector(".time-12p-f2");
const time1pF2 = document.querySelector(".time-1p-f2");
const time2pF2 = document.querySelector(".time-2p-f2");
const time3pF2 = document.querySelector(".time-3p-f2");
const time4pF2 = document.querySelector(".time-4p-f2");
const time5pF2 = document.querySelector(".time-5p-f2");
const time6pF2 = document.querySelector(".time-6p-f2");
const time7pF2 = document.querySelector(".time-7p-f2");
const time8pF2 = document.querySelector(".time-8p-f2");
const time9pF2 = document.querySelector(".time-9p-f2");
const time10pF2 = document.querySelector(".time-10p-f2");
const time11pF2 = document.querySelector(".time-11p-f2");

const temp12aF3 = document.querySelector(".time-temp-12a-f3");
const temp1aF3 = document.querySelector(".time-temp-1a-f3");
const temp2aF3 = document.querySelector(".time-temp-2a-f3");
const temp3aF3 = document.querySelector(".time-temp-3a-f3");
const temp4aF3 = document.querySelector(".time-temp-4a-f3");
const temp5aF3 = document.querySelector(".time-temp-5a-f3");
const temp6aF3 = document.querySelector(".time-temp-6a-f3");
const temp7aF3 = document.querySelector(".time-temp-7a-f3");
const temp8aF3 = document.querySelector(".time-temp-8a-f3");
const temp9aF3 = document.querySelector(".time-temp-9a-f3");
const temp10aF3 = document.querySelector(".time-temp-10a-f3");
const temp11aF3 = document.querySelector(".time-temp-11a-f3");
const temp12pF3 = document.querySelector(".time-temp-12p-f3");
const temp1pF3 = document.querySelector(".time-temp-1p-f3");
const temp2pF3 = document.querySelector(".time-temp-2p-f3");
const temp3pF3 = document.querySelector(".time-temp-3p-f3");
const temp4pF3 = document.querySelector(".time-temp-4p-f3");
const temp5pF3 = document.querySelector(".time-temp-5p-f3");
const temp6pF3 = document.querySelector(".time-temp-6p-f3");
const temp7pF3 = document.querySelector(".time-temp-7p-f3");
const temp8pF3 = document.querySelector(".time-temp-8p-f3");
const temp9pF3 = document.querySelector(".time-temp-9p-f3");
const temp10pF3 = document.querySelector(".time-temp-10p-f3");
const temp11pF3 = document.querySelector(".time-temp-11p-f3");

const time12aF3 = document.querySelector(".time-12a-f3");
const time1aF3 = document.querySelector(".time-1a-f3");
const time2aF3 = document.querySelector(".time-2a-f3");
const time3aF3 = document.querySelector(".time-3a-f3");
const time4aF3 = document.querySelector(".time-4a-f3");
const time5aF3 = document.querySelector(".time-5a-f3");
const time6aF3 = document.querySelector(".time-6a-f3");
const time7aF3 = document.querySelector(".time-7a-f3");
const time8aF3 = document.querySelector(".time-8a-f3");
const time9aF3 = document.querySelector(".time-9a-f3");
const time10aF3 = document.querySelector(".time-10a-f3");
const time11aF3 = document.querySelector(".time-11a-f3");
const time12pF3 = document.querySelector(".time-12p-f3");
const time1pF3 = document.querySelector(".time-1p-f3");
const time2pF3 = document.querySelector(".time-2p-f3");
const time3pF3 = document.querySelector(".time-3p-f3");
const time4pF3 = document.querySelector(".time-4p-f3");
const time5pF3 = document.querySelector(".time-5p-f3");
const time6pF3 = document.querySelector(".time-6p-f3");
const time7pF3 = document.querySelector(".time-7p-f3");
const time8pF3 = document.querySelector(".time-8p-f3");
const time9pF3 = document.querySelector(".time-9p-f3");
const time10pF3 = document.querySelector(".time-10p-f3");
const time11pF3 = document.querySelector(".time-11p-f3");

const tempIcon12a = document.querySelector(".temp-icon-t12a");
const tempIcon1a = document.querySelector(".temp-icon-t1a");
const tempIcon2a = document.querySelector(".temp-icon-t2a");
const tempIcon3a = document.querySelector(".temp-icon-t3a");
const tempIcon4a = document.querySelector(".temp-icon-t4a");
const tempIcon5a = document.querySelector(".temp-icon-t5a");
const tempIcon6a = document.querySelector(".temp-icon-t6a");
const tempIcon7a = document.querySelector(".temp-icon-t7a");
const tempIcon8a = document.querySelector(".temp-icon-t8a");
const tempIcon9a = document.querySelector(".temp-icon-t9a");
const tempIcon10a = document.querySelector(".temp-icon-t10a");
const tempIcon11a = document.querySelector(".temp-icon-t11a");
const tempIcon12p = document.querySelector(".temp-icon-t12p");
const tempIcon1p = document.querySelector(".temp-icon-t1p");
const tempIcon2p = document.querySelector(".temp-icon-t2p");
const tempIcon3p = document.querySelector(".temp-icon-t3p");
const tempIcon4p = document.querySelector(".temp-icon-t4p");
const tempIcon5p = document.querySelector(".temp-icon-t5p");
const tempIcon6p = document.querySelector(".temp-icon-t6p");
const tempIcon7p = document.querySelector(".temp-icon-t7p");
const tempIcon8p = document.querySelector(".temp-icon-t8p");
const tempIcon9p = document.querySelector(".temp-icon-t9p");
const tempIcon10p = document.querySelector(".temp-icon-t10p");
const tempIcon11p = document.querySelector(".temp-icon-t11p");

// currentDate.innerHTML = dateTimestamp;
// currentTime.innerHTML = timeTimestamp;

const renderWeatherData = (data) => {
  localTime.innerHTML = `(${moment(data.location.localtime).format("h:mm A")})`;
  date.innerHTML = day1;

  currentLocation.innerHTML = data.location.name;

  description.innerHTML = data.current.condition.text;
  icon.src = data.current.condition.icon;

  const currentTemp = Math.round(data.current.temp_f);
  temp.innerHTML = `${currentTemp}° F`;

  feelsLike.innerHTML = `${data.current.feelslike_f}° F`;

  const d1sr = data.forecast.forecastday[0].astro.sunrise;
  const d1srise = moment(d1sr, "h:mm A").format("h:mm A");
  const d1ss = data.forecast.forecastday[0].astro.sunset;
  const d1sset = moment(d1ss, "h:mm A").format("h:mm A");

  const d2sr = data.forecast.forecastday[1].astro.sunrise;
  const d2srise = moment(d2sr, "h:mm A").format("h:mm A");
  const d2ss = data.forecast.forecastday[1].astro.sunset;
  const d2sset = moment(d2ss, "h:mm A").format("h:mm A");

  const d3sr = data.forecast.forecastday[2].astro.sunrise;
  const d3srise = moment(d3sr, "h:mm A").format("h:mm A");
  const d3ss = data.forecast.forecastday[2].astro.sunset;
  const d3sset = moment(d3ss, "h:mm A").format("h:mm A");

  const t12a = data.forecast.forecastday[0].hour[0].time;
  const t12aResult = moment(t12a).format("ha");
  time12a.innerHTML = t12aResult;
  const a12temp = Math.round(data.forecast.forecastday[0].hour[0].temp_f);
  temp12a.innerHTML = a12temp;
  tempIcon12a.src = data.forecast.forecastday[0].hour[0].condition.icon;

  const t1a = data.forecast.forecastday[0].hour[1].time;
  const t1aResult = moment(t1a).format("ha");
  time1a.innerHTML = t1aResult;
  const a1temp = Math.round(data.forecast.forecastday[0].hour[1].temp_f);
  temp1a.innerHTML = a1temp;
  tempIcon1a.src = data.forecast.forecastday[0].hour[1].condition.icon;

  const t2a = data.forecast.forecastday[0].hour[2].time;
  const t2aResult = moment(t2a).format("ha");
  time2a.innerHTML = t2aResult;
  const a2temp = Math.round(data.forecast.forecastday[0].hour[2].temp_f);
  temp2a.innerHTML = a2temp;
  tempIcon2a.src = data.forecast.forecastday[0].hour[2].condition.icon;

  const t3a = data.forecast.forecastday[0].hour[3].time;
  const t3aResult = moment(t3a).format("ha");
  time3a.innerHTML = t3aResult;
  const a3temp = Math.round(data.forecast.forecastday[0].hour[3].temp_f);
  temp3a.innerHTML = a3temp;
  tempIcon3a.src = data.forecast.forecastday[0].hour[3].condition.icon;

  const t4a = data.forecast.forecastday[0].hour[4].time;
  const t4aResult = moment(t4a).format("ha");
  time4a.innerHTML = t4aResult;
  const a4temp = Math.round(data.forecast.forecastday[0].hour[4].temp_f);
  temp4a.innerHTML = a4temp;
  tempIcon4a.src = data.forecast.forecastday[0].hour[4].condition.icon;

  const t5a = data.forecast.forecastday[0].hour[5].time;
  const t5aResult = moment(t5a).format("ha");
  time5a.innerHTML = t5aResult;
  const a5temp = Math.round(data.forecast.forecastday[0].hour[5].temp_f);
  temp5a.innerHTML = a5temp;
  tempIcon5a.src = data.forecast.forecastday[0].hour[5].condition.icon;

  const t6a = data.forecast.forecastday[0].hour[6].time;
  const t6aResult = moment(t6a).format("ha");
  time6a.innerHTML = t6aResult;
  const a6temp = Math.round(data.forecast.forecastday[0].hour[6].temp_f);
  temp6a.innerHTML = a6temp;
  tempIcon6a.src = data.forecast.forecastday[0].hour[6].condition.icon;

  const t7a = data.forecast.forecastday[0].hour[7].time;
  const t7aResult = moment(t7a).format("ha");
  time7a.innerHTML = t7aResult;
  const a7temp = Math.round(data.forecast.forecastday[0].hour[7].temp_f);
  temp7a.innerHTML = a7temp;
  tempIcon7a.src = data.forecast.forecastday[0].hour[7].condition.icon;

  const t8a = data.forecast.forecastday[0].hour[8].time;
  const t8aResult = moment(t8a).format("ha");
  time8a.innerHTML = t8aResult;
  const a8temp = Math.round(data.forecast.forecastday[0].hour[8].temp_f);
  temp8a.innerHTML = a8temp;
  tempIcon8a.src = data.forecast.forecastday[0].hour[8].condition.icon;

  const t9a = data.forecast.forecastday[0].hour[9].time;
  const t9aResult = moment(t9a).format("ha");
  time9a.innerHTML = t9aResult;
  const a9temp = Math.round(data.forecast.forecastday[0].hour[9].temp_f);
  temp9a.innerHTML = a9temp;
  tempIcon9a.src = data.forecast.forecastday[0].hour[9].condition.icon;

  const t10a = data.forecast.forecastday[0].hour[10].time;
  const t10aResult = moment(t10a).format("ha");
  time10a.innerHTML = t10aResult;
  const a10temp = Math.round(data.forecast.forecastday[0].hour[10].temp_f);
  temp10a.innerHTML = a10temp;
  tempIcon10a.src = data.forecast.forecastday[0].hour[10].condition.icon;

  const t11a = data.forecast.forecastday[0].hour[11].time;
  const t11aResult = moment(t11a).format("ha");
  time11a.innerHTML = t11aResult;
  const a11temp = Math.round(data.forecast.forecastday[0].hour[11].temp_f);
  temp11a.innerHTML = a11temp;
  tempIcon11a.src = data.forecast.forecastday[0].hour[11].condition.icon;

  const t12p = data.forecast.forecastday[0].hour[12].time;
  const t12pResult = moment(t12p).format("ha");
  time12p.innerHTML = t12pResult;
  const p12temp = Math.round(data.forecast.forecastday[0].hour[12].temp_f);
  temp12p.innerHTML = p12temp;
  tempIcon12p.src = data.forecast.forecastday[0].hour[12].condition.icon;

  const t1p = data.forecast.forecastday[0].hour[13].time;
  const t1pResult = moment(t1p).format("ha");
  time1p.innerHTML = t1pResult;
  const p1temp = Math.round(data.forecast.forecastday[0].hour[13].temp_f);
  temp1p.innerHTML = p1temp;
  tempIcon1p.src = data.forecast.forecastday[0].hour[13].condition.icon;

  const t2p = data.forecast.forecastday[0].hour[14].time;
  const t2pResult = moment(t2p).format("ha");
  time2p.innerHTML = t2pResult;
  const p2temp = Math.round(data.forecast.forecastday[0].hour[14].temp_f);
  temp2p.innerHTML = p2temp;
  tempIcon2p.src = data.forecast.forecastday[0].hour[14].condition.icon;

  const t3p = data.forecast.forecastday[0].hour[15].time;
  const t3pResult = moment(t3p).format("ha");
  time3p.innerHTML = t3pResult;
  const p3temp = Math.round(data.forecast.forecastday[0].hour[15].temp_f);
  temp3p.innerHTML = p3temp;
  tempIcon3p.src = data.forecast.forecastday[0].hour[15].condition.icon;

  const t4p = data.forecast.forecastday[0].hour[16].time;
  const t4pResult = moment(t4p).format("ha");
  time4p.innerHTML = t4pResult;
  const p4temp = Math.round(data.forecast.forecastday[0].hour[16].temp_f);
  temp4p.innerHTML = p4temp;
  tempIcon4p.src = data.forecast.forecastday[0].hour[16].condition.icon;

  const t5p = data.forecast.forecastday[0].hour[17].time;
  const t5pResult = moment(t5p).format("ha");
  time5p.innerHTML = t5pResult;
  const p5temp = Math.round(data.forecast.forecastday[0].hour[17].temp_f);
  temp5p.innerHTML = p5temp;
  tempIcon5p.src = data.forecast.forecastday[0].hour[17].condition.icon;

  const t6p = data.forecast.forecastday[0].hour[18].time;
  const t6pResult = moment(t6p).format("ha");
  time6p.innerHTML = t6pResult;
  const p6temp = Math.round(data.forecast.forecastday[0].hour[18].temp_f);
  temp6p.innerHTML = p6temp;
  tempIcon6p.src = data.forecast.forecastday[0].hour[18].condition.icon;

  const t7p = data.forecast.forecastday[0].hour[19].time;
  const t7pResult = moment(t7p).format("ha");
  time7p.innerHTML = t7pResult;
  const p7temp = Math.round(data.forecast.forecastday[0].hour[19].temp_f);
  temp7p.innerHTML = p7temp;
  tempIcon7p.src = data.forecast.forecastday[0].hour[19].condition.icon;

  const t8p = data.forecast.forecastday[0].hour[20].time;
  const t8pResult = moment(t8p).format("ha");
  time8p.innerHTML = t8pResult;
  const p8temp = Math.round(data.forecast.forecastday[0].hour[20].temp_f);
  temp8p.innerHTML = p8temp;
  tempIcon8p.src = data.forecast.forecastday[0].hour[20].condition.icon;

  const t9p = data.forecast.forecastday[0].hour[21].time;
  const t9pResult = moment(t9p).format("ha");
  time9p.innerHTML = t9pResult;
  const p9temp = Math.round(data.forecast.forecastday[0].hour[21].temp_f);
  temp9p.innerHTML = p9temp;
  tempIcon9p.src = data.forecast.forecastday[0].hour[21].condition.icon;

  const t10p = data.forecast.forecastday[0].hour[22].time;
  const t10pResult = moment(t10p).format("ha");
  time10p.innerHTML = t10pResult;
  const p10temp = Math.round(data.forecast.forecastday[0].hour[22].temp_f);
  temp10p.innerHTML = p10temp;
  tempIcon10p.src = data.forecast.forecastday[0].hour[21].condition.icon;

  const t11p = data.forecast.forecastday[0].hour[23].time;
  const t11pResult = moment(t11p).format("ha");
  time11p.innerHTML = t11pResult;
  const p11temp = Math.round(data.forecast.forecastday[0].hour[23].temp_f);
  temp11p.innerHTML = p11temp;
  tempIcon11p.src = data.forecast.forecastday[0].hour[23].condition.icon;

  // Forecast 2 times

  const t12aF2 = data.forecast.forecastday[1].hour[0].time;
  const t12aResultF2 = moment(t12aF2).format("ha");
  time12aF2.innerHTML = t12aResultF2;
  const t12a2 = Math.floor(data.forecast.forecastday[1].hour[0].temp_f);
  temp12aF2.innerHTML = `${t12a2}°`;

  const t1aF2 = data.forecast.forecastday[1].hour[1].time;
  const t1aResultF2 = moment(t1aF2).format("ha");
  time1aF2.innerHTML = t1aResultF2;
  const t1a2 = Math.floor(data.forecast.forecastday[1].hour[1].temp_f);
  temp1aF2.innerHTML = `${t1a2}°`;

  const t2aF2 = data.forecast.forecastday[1].hour[2].time;
  const t2aResultF2 = moment(t2aF2).format("ha");
  time2aF2.innerHTML = t2aResultF2;
  const t2a2 = Math.floor(data.forecast.forecastday[1].hour[2].temp_f);
  temp2aF2.innerHTML = `${t2a2}°`;

  const t3aF2 = data.forecast.forecastday[1].hour[3].time;
  const t3aResultF2 = moment(t3aF2).format("ha");
  time3aF2.innerHTML = t3aResultF2;
  const t3a2 = Math.floor(data.forecast.forecastday[1].hour[3].temp_f);
  temp3aF2.innerHTML = `${t3a2}°`;

  const t4aF2 = data.forecast.forecastday[1].hour[4].time;
  const t4aResultF2 = moment(t4aF2).format("ha");
  time4aF2.innerHTML = t4aResultF2;
  const t4a2 = Math.floor(data.forecast.forecastday[1].hour[4].temp_f);
  temp4aF2.innerHTML = `${t4a2}°`;

  const t5aF2 = data.forecast.forecastday[1].hour[5].time;
  const t5aResultF2 = moment(t5aF2).format("ha");
  time5aF2.innerHTML = t5aResultF2;
  const t5a2 = Math.floor(data.forecast.forecastday[1].hour[5].temp_f);
  temp5aF2.innerHTML = `${t5a2}°`;

  const t6aF2 = data.forecast.forecastday[1].hour[6].time;
  const t6aResultF2 = moment(t6aF2).format("ha");
  time6aF2.innerHTML = t6aResultF2;
  const t6a2 = Math.floor(data.forecast.forecastday[1].hour[6].temp_f);
  temp6aF2.innerHTML = `${t6a2}°`;

  const t7aF2 = data.forecast.forecastday[1].hour[7].time;
  const t7aResultF2 = moment(t7aF2).format("ha");
  time7aF2.innerHTML = t7aResultF2;
  const t7a2 = Math.floor(data.forecast.forecastday[1].hour[7].temp_f);
  temp7aF2.innerHTML = `${t7a2}°`;

  const t8aF2 = data.forecast.forecastday[1].hour[8].time;
  const t8aResultF2 = moment(t8aF2).format("ha");
  time8aF2.innerHTML = t8aResultF2;
  const t8a2 = Math.floor(data.forecast.forecastday[1].hour[8].temp_f);
  temp8aF2.innerHTML = `${t8a2}°`;

  const t9aF2 = data.forecast.forecastday[1].hour[9].time;
  const t9aResultF2 = moment(t9aF2).format("ha");
  time9aF2.innerHTML = t9aResultF2;
  const t9a2 = Math.floor(data.forecast.forecastday[1].hour[9].temp_f);
  temp9aF2.innerHTML = `${t9a2}°`;

  const t10aF2 = data.forecast.forecastday[1].hour[10].time;
  const t10aResultF2 = moment(t10aF2).format("ha");
  time10aF2.innerHTML = t10aResultF2;
  const t10a2 = Math.floor(data.forecast.forecastday[1].hour[10].temp_f);
  temp10aF2.innerHTML = `${t10a2}°`;

  const t11aF2 = data.forecast.forecastday[1].hour[11].time;
  const t11aResultF2 = moment(t11aF2).format("ha");
  time11aF2.innerHTML = t11aResultF2;
  const t11a2 = Math.floor(data.forecast.forecastday[1].hour[11].temp_f);
  temp11aF2.innerHTML = `${t11a2}°`;

  const t12pF2 = data.forecast.forecastday[1].hour[12].time;
  const t12pResultF2 = moment(t12pF2).format("ha");
  time12pF2.innerHTML = t12pResultF2;
  const t12p2 = Math.floor(data.forecast.forecastday[1].hour[12].temp_f);
  temp12pF2.innerHTML = `${t12p2}°`;

  const t1pF2 = data.forecast.forecastday[1].hour[13].time;
  const t1pResultF2 = moment(t1pF2).format("ha");
  time1pF2.innerHTML = t1pResultF2;
  const t1p2 = Math.floor(data.forecast.forecastday[1].hour[13].temp_f);
  temp1pF2.innerHTML = `${t1p2}°`;

  const t2pF2 = data.forecast.forecastday[1].hour[14].time;
  const t2pResultF2 = moment(t2pF2).format("ha");
  time2pF2.innerHTML = t2pResultF2;
  const t2p2 = Math.floor(data.forecast.forecastday[1].hour[14].temp_f);
  temp2pF2.innerHTML = `${t2p2}°`;

  const t3pF2 = data.forecast.forecastday[1].hour[15].time;
  const t3pResultF2 = moment(t3pF2).format("ha");
  time3pF2.innerHTML = t3pResultF2;
  const t3p2 = Math.floor(data.forecast.forecastday[1].hour[15].temp_f);
  temp3pF2.innerHTML = `${t3p2}°`;

  const t4pF2 = data.forecast.forecastday[1].hour[16].time;
  const t4pResultF2 = moment(t4pF2).format("ha");
  time4pF2.innerHTML = t4pResultF2;
  const t4p2 = Math.floor(data.forecast.forecastday[1].hour[16].temp_f);
  temp4pF2.innerHTML = `${t4p2}°`;

  const t5pF2 = data.forecast.forecastday[1].hour[17].time;
  const t5pResultF2 = moment(t5pF2).format("ha");
  time5pF2.innerHTML = t5pResultF2;
  const t5p2 = Math.floor(data.forecast.forecastday[1].hour[17].temp_f);
  temp5pF2.innerHTML = `${t5p2}°`;

  const t6pF2 = data.forecast.forecastday[1].hour[18].time;
  const t6pResultF2 = moment(t6pF2).format("ha");
  time6pF2.innerHTML = t6pResultF2;
  const t6p2 = Math.floor(data.forecast.forecastday[1].hour[18].temp_f);
  temp6pF2.innerHTML = `${t6p2}°`;

  const t7pF2 = data.forecast.forecastday[1].hour[19].time;
  const t7pResultF2 = moment(t7pF2).format("ha");
  time7pF2.innerHTML = t7pResultF2;
  const t7p2 = Math.floor(data.forecast.forecastday[1].hour[19].temp_f);
  temp7pF2.innerHTML = `${t7p2}°`;

  const t8pF2 = data.forecast.forecastday[1].hour[20].time;
  const t8pResultF2 = moment(t8pF2).format("ha");
  time8pF2.innerHTML = t8pResultF2;
  const t8p2 = Math.floor(data.forecast.forecastday[1].hour[20].temp_f);
  temp8pF2.innerHTML = `${t8p2}°`;

  const t9pF2 = data.forecast.forecastday[1].hour[21].time;
  const t9pResultF2 = moment(t9pF2).format("ha");
  time9pF2.innerHTML = t9pResultF2;
  const t9p2 = Math.floor(data.forecast.forecastday[1].hour[21].temp_f);
  temp9pF2.innerHTML = `${t9p2}°`;

  const t10pF2 = data.forecast.forecastday[1].hour[22].time;
  const t10pResultF2 = moment(t10pF2).format("ha");
  time10pF2.innerHTML = t10pResultF2;
  const t10p2 = Math.floor(data.forecast.forecastday[1].hour[22].temp_f);
  temp10pF2.innerHTML = `${t10p2}°`;

  const t11pF2 = data.forecast.forecastday[1].hour[23].time;
  const t11pResultF2 = moment(t11pF2).format("ha");
  time11pF2.innerHTML = t11pResultF2;
  const t11p2 = Math.floor(data.forecast.forecastday[1].hour[23].temp_f);
  temp11pF2.innerHTML = `${t11p2}°`;

  // Forecast 3 times

  const t12aF3 = data.forecast.forecastday[2].hour[0].time;
  const t12aResultF3 = moment(t12aF3).format("ha");
  time12aF3.innerHTML = t12aResultF3;
  const t12a3 = Math.floor(data.forecast.forecastday[2].hour[0].temp_f);
  temp12aF3.innerHTML = `${t12a3}°`;

  const t1aF3 = data.forecast.forecastday[2].hour[1].time;
  const t1aResultF3 = moment(t1aF3).format("ha");
  time1aF3.innerHTML = t1aResultF3;
  const t1a3 = Math.round(data.forecast.forecastday[2].hour[1].temp_f);
  temp1aF3.innerHTML = `${t1a3}°`;

  const t2aF3 = data.forecast.forecastday[2].hour[2].time;
  const t2aResultF3 = moment(t2aF3).format("ha");
  time2aF3.innerHTML = t2aResultF3;
  const t2a3 = Math.round(data.forecast.forecastday[2].hour[2].temp_f);
  temp2aF3.innerHTML = `${t2a3}°`;

  const t3aF3 = data.forecast.forecastday[2].hour[3].time;
  const t3aResultF3 = moment(t3aF3).format("ha");
  time3aF3.innerHTML = t3aResultF3;
  const t3a3 = Math.round(data.forecast.forecastday[2].hour[3].temp_f);
  temp3aF3.innerHTML = `${t3a3}°`;

  const t4aF3 = data.forecast.forecastday[2].hour[4].time;
  const t4aResultF3 = moment(t4aF3).format("ha");
  time4aF3.innerHTML = t4aResultF3;
  const t4a3 = Math.round(data.forecast.forecastday[2].hour[4].temp_f);
  temp4aF3.innerHTML = `${t4a3}°`;

  const t5aF3 = data.forecast.forecastday[2].hour[5].time;
  const t5aResultF3 = moment(t5aF3).format("ha");
  time5aF3.innerHTML = t5aResultF3;
  const t5a3 = Math.floor(data.forecast.forecastday[2].hour[5].temp_f);
  temp5aF3.innerHTML = `${t5a3}°`;

  const t6aF3 = data.forecast.forecastday[2].hour[6].time;
  const t6aResultF3 = moment(t6aF3).format("ha");
  time6aF3.innerHTML = t6aResultF3;
  const t6a3 = Math.round(data.forecast.forecastday[2].hour[6].temp_f);
  temp6aF3.innerHTML = `${t6a3}°`;

  const t7aF3 = data.forecast.forecastday[2].hour[7].time;
  const t7aResultF3 = moment(t7aF3).format("ha");
  time7aF3.innerHTML = t7aResultF3;
  const t7a3 = Math.round(data.forecast.forecastday[2].hour[7].temp_f);
  temp7aF3.innerHTML = `${t7a3}°`;

  const t8aF3 = data.forecast.forecastday[2].hour[8].time;
  const t8aResultF3 = moment(t8aF3).format("ha");
  time8aF3.innerHTML = t8aResultF3;
  const t8a3 = Math.round(data.forecast.forecastday[2].hour[8].temp_f);
  temp8aF3.innerHTML = `${t8a3}°`;

  const t9aF3 = data.forecast.forecastday[2].hour[9].time;
  const t9aResultF3 = moment(t9aF3).format("ha");
  time9aF3.innerHTML = t9aResultF3;
  const t9a3 = Math.round(data.forecast.forecastday[2].hour[9].temp_f);
  temp9aF3.innerHTML = `${t9a3}°`;

  const t10aF3 = data.forecast.forecastday[2].hour[10].time;
  const t10aResultF3 = moment(t10aF3).format("ha");
  time10aF3.innerHTML = t10aResultF3;
  const t10a3 = Math.round(data.forecast.forecastday[2].hour[10].temp_f);
  temp10aF3.innerHTML = `${t10a3}°`;

  const t11aF3 = data.forecast.forecastday[2].hour[11].time;
  const t11aResultF3 = moment(t11aF3).format("ha");
  time11aF3.innerHTML = t11aResultF3;
  const t11a3 = Math.round(data.forecast.forecastday[2].hour[11].temp_f);
  temp11aF3.innerHTML = `${t11a3}°`;

  const t12pF3 = data.forecast.forecastday[2].hour[12].time;
  const t12pResultF3 = moment(t12pF3).format("ha");
  time12pF3.innerHTML = t12pResultF3;
  const t12p3 = Math.round(data.forecast.forecastday[2].hour[12].temp_f);
  temp12pF3.innerHTML = `${t12p3}°`;

  const t1pF3 = data.forecast.forecastday[2].hour[13].time;
  const t1pResultF3 = moment(t1pF3).format("ha");
  time1pF3.innerHTML = t1pResultF3;
  const t1p3 = Math.round(data.forecast.forecastday[2].hour[13].temp_f);
  temp1pF3.innerHTML = `${t1p3}°`;

  const t2pF3 = data.forecast.forecastday[2].hour[14].time;
  const t2pResultF3 = moment(t2pF3).format("ha");
  time2pF3.innerHTML = t2pResultF3;
  const t2p3 = Math.round(data.forecast.forecastday[2].hour[14].temp_f);
  temp2pF3.innerHTML = `${t2p3}°`;

  const t3pF3 = data.forecast.forecastday[2].hour[15].time;
  const t3pResultF3 = moment(t3pF3).format("ha");
  time3pF3.innerHTML = t3pResultF3;
  const t3p3 = Math.round(data.forecast.forecastday[2].hour[15].temp_f);
  temp3pF3.innerHTML = `${t3p3}°`;

  const t4pF3 = data.forecast.forecastday[2].hour[16].time;
  const t4pResultF3 = moment(t4pF3).format("ha");
  time4pF3.innerHTML = t4pResultF3;
  const t4p3 = Math.round(data.forecast.forecastday[2].hour[16].temp_f);
  temp4pF3.innerHTML = `${t4p3}°`;

  const t5pF3 = data.forecast.forecastday[2].hour[17].time;
  const t5pResultF3 = moment(t5pF3).format("ha");
  time5pF3.innerHTML = t5pResultF3;
  const t5p3 = Math.round(data.forecast.forecastday[2].hour[17].temp_f);
  temp5pF3.innerHTML = `${t5p3}°`;

  const t6pF3 = data.forecast.forecastday[2].hour[18].time;
  const t6pResultF3 = moment(t6pF3).format("ha");
  time6pF3.innerHTML = t6pResultF3;
  const t6p3 = Math.round(data.forecast.forecastday[2].hour[18].temp_f);
  temp6pF3.innerHTML = `${t6p3}°`;

  const t7pF3 = data.forecast.forecastday[2].hour[19].time;
  const t7pResultF3 = moment(t7pF3).format("ha");
  time7pF3.innerHTML = t7pResultF3;
  const t7p3 = Math.round(data.forecast.forecastday[2].hour[19].temp_f);
  temp7pF3.innerHTML = `${t7p3}°`;

  const t8pF3 = data.forecast.forecastday[2].hour[20].time;
  const t8pResultF3 = moment(t8pF3).format("ha");
  time8pF3.innerHTML = t8pResultF3;
  const t8p3 = Math.round(data.forecast.forecastday[2].hour[20].temp_f);
  temp8pF3.innerHTML = `${t8p3}°`;

  const t9pF3 = data.forecast.forecastday[2].hour[21].time;
  const t9pResultF3 = moment(t9pF3).format("ha");
  time9pF3.innerHTML = t9pResultF3;
  const t9p3 = Math.round(data.forecast.forecastday[2].hour[21].temp_f);
  temp9pF3.innerHTML = `${t9p3}°`;

  const t10pF3 = data.forecast.forecastday[2].hour[22].time;
  const t10pResultF3 = moment(t10pF3).format("ha");
  time10pF3.innerHTML = t10pResultF3;
  const t10p3 = Math.round(data.forecast.forecastday[2].hour[22].temp_f);
  temp10pF3.innerHTML = `${t10p3}°`;

  const t11pF3 = data.forecast.forecastday[2].hour[23].time;
  const t11pResultF3 = moment(t11pF3).format("ha");
  time11pF3.innerHTML = t11pResultF3;
  const t11p3 = Math.round(data.forecast.forecastday[2].hour[23].temp_f);
  temp11pF3.innerHTML = `${t11p3}°`;

  // avgTemp.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_f}° F`;
  const minT = Math.round(data.forecast.forecastday[0].day.mintemp_f);
  minTemp.innerHTML = `${minT}°`;
  const maxT = Math.round(data.forecast.forecastday[0].day.maxtemp_f);
  maxTemp.innerHTML = `${maxT}° F`;
  avgHumidity.innerHTML = `${data.forecast.forecastday[0].day.avghumidity}%`;
  uvIndex.innerHTML = `${data.forecast.forecastday[0].day.uv}`;
  sunrise.innerHTML = d1srise;
  sunset.innerHTML = d1sset;

  dateF2.innerHTML = day2;
  descriptionF2.innerHTML = data.forecast.forecastday[1].day.condition.text;
  let f2Icon = data.forecast.forecastday[1].day.condition.icon;
  iconF2.src = f2Icon;
  avgTempF2.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_f}° F`;
  minTempF2.innerHTML = `${data.forecast.forecastday[1].day.mintemp_f}° F`;
  maxTempF2.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_f}° F`;
  avgHumidityF2.innerHTML = `${data.forecast.forecastday[1].day.avghumidity}%`;
  uvIndexF2.innerHTML = `${data.forecast.forecastday[1].day.uv}`;
  sunriseF2.innerHTML = d2srise;
  sunsetF2.innerHTML = d2sset;

  dateF3.innerHTML = day3;
  descriptionF3.innerHTML = data.forecast.forecastday[2].day.condition.text;
  let f3Icon = data.forecast.forecastday[2].day.condition.icon;
  iconF3.src = f3Icon;
  avgTempF3.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_f}° F`;
  minTempF3.innerHTML = `${data.forecast.forecastday[2].day.mintemp_f}° F`;
  maxTempF3.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_f}° F`;
  avgHumidityF3.innerHTML = `${data.forecast.forecastday[2].day.avghumidity}%`;
  uvIndexF3.innerHTML = `${data.forecast.forecastday[2].day.uv}`;
  sunriseF3.innerHTML = d3srise;
  sunsetF3.innerHTML = d3sset;

  console.log(data.forecast.forecastday[0]);
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
  // fetchWeatherData("Los Angeles");
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
