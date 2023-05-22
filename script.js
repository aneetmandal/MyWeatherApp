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
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
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
