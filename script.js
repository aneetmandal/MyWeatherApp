// const url =
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f0b63d9c8amsh8709b7178e0b247p106d73jsnb12504dfe696",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const myWeather = async function (city) {
  cityName.innerHTML = city;
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    );
    const result = await response.json();

    console.log(result);

    cloud_pct.innerHTML = result.cloud_pct;
    temp2.innerHTML = result.temp;
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity2.innerHTML = result.humidity;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed2.innerHTML = result.wind_speed;
    wind_speed.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(cities.value);
  myWeather(cities.value);
});

myWeather("Bangalore");

const myWeatherCommonAPI = async function (city) {
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    );
    const result = await response.json();

    console.log(result);
    if (CCU.innerHTML == "Kolkata" && city == "Kolkata") {
      K_cloud_pct.innerHTML = result.cloud_pct;
      K_temp.innerHTML = result.temp;
      K_feels_like.innerHTML = result.feels_like;
      K_humidity.innerHTML = result.humidity;
      K_min_temp.innerHTML = result.min_temp;
      K_max_temp.innerHTML = result.max_temp;
      K_wind_speed.innerHTML = result.wind_speed;
      K_wind_degrees.innerHTML = result.wind_degrees;
      K_sunrise.innerHTML = result.sunrise;
      K_sunset.innerHTML = result.sunset;
    } else if (BNE.innerHTML == "Brisbane" && city == "Brisbane") {
      B_cloud_pct.innerHTML = result.cloud_pct;
      B_temp.innerHTML = result.temp;
      B_feels_like.innerHTML = result.feels_like;
      B_humidity.innerHTML = result.humidity;
      B_min_temp.innerHTML = result.min_temp;
      B_max_temp.innerHTML = result.max_temp;
      B_wind_speed.innerHTML = result.wind_speed;
      B_wind_degrees.innerHTML = result.wind_degrees;
      B_sunrise.innerHTML = result.sunrise;
      B_sunset.innerHTML = result.sunset;
    } else if (BOM.innerHTML == "Mumbai" && city == "Mumbai") {
      M_cloud_pct.innerHTML = result.cloud_pct;
      M_temp.innerHTML = result.temp;
      M_feels_like.innerHTML = result.feels_like;
      M_humidity.innerHTML = result.humidity;
      M_min_temp.innerHTML = result.min_temp;
      M_max_temp.innerHTML = result.max_temp;
      M_wind_speed.innerHTML = result.wind_speed;
      M_wind_degrees.innerHTML = result.wind_degrees;
      M_sunrise.innerHTML = result.sunrise;
      M_sunset.innerHTML = result.sunset;
    } else if (ADL.innerHTML == "Adelaide" && city == "Adelaide") {
      A_cloud_pct.innerHTML = result.cloud_pct;
      A_temp.innerHTML = result.temp;
      A_feels_like.innerHTML = result.feels_like;
      A_humidity.innerHTML = result.humidity;
      A_min_temp.innerHTML = result.min_temp;
      A_max_temp.innerHTML = result.max_temp;
      A_wind_speed.innerHTML = result.wind_speed;
      A_wind_degrees.innerHTML = result.wind_degrees;
      A_sunrise.innerHTML = result.sunrise;
      A_sunset.innerHTML = result.sunset;
    }
  } catch (error) {
    console.error(error);
  }
};

myWeatherCommonAPI("Kolkata");
myWeatherCommonAPI("Brisbane");
myWeatherCommonAPI("Mumbai");
myWeatherCommonAPI("Adelaide");
