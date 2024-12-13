"use strict";
let apiKey = "43edfacae267499ca9f224831241212";
let baseURL = "https://api.weatherapi.com/v1/forecast.json";
let searchInput = document.querySelector("#searchInput");
let findBtn = document.querySelector("#findBtn");
let forecastContainer = document.querySelector("#forecastContainer");

async function getWeather(searchQuery) {
  try {
    const response = await fetch(
      `${baseURL}?key=${apiKey}&q=${searchQuery}&days=3`
    );
    if (!response.ok) {
      throw new Error("City not found or network issue!");
    }
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

function displayWeather(data) {
  const location = data.location;
  const forecast = data.forecast.forecastday;
  let cartoona = "";

  forecast.forEach((day) => {
    const date = new Date(day.date).toLocaleDateString();
    const dayName = new Date(day.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    cartoona += `
      <div class="col-md-4">
        <div class="forecast py-2">
          <div class="forecast-header d-flex justify-content-between pt-2 px-2">
            <p>${dayName}</p>
            <p>${date}</p>
          </div>
          <div class="forecast-content py-4 px-4">
            <p>${location.name}, ${location.country}</p>
            <h1 class="fw-bolder text-white">${day.day.maxtemp_c}<sup>o</sup>C / ${day.day.mintemp_c}<sup>o</sup>C</h1>
            <div class="icon">
              <img src="https:${day.day.condition.icon}" alt="Weather Condition" width="90" />
            </div>
            <p class="mb-4">${day.day.condition.text}</p>
            <div class="forecast-footer d-flex justify-content-evenly">
              <span><img src="./imgs/umbrella.png" width="23px" alt="umbrella" class="me-1"/>${day.day.avghumidity}%</span>
              <span><img src="./imgs/wind.png" width="23px" alt="wind" class="me-1"/>${day.day.maxwind_kph} km/h</span>
              <span><img src="./imgs/compass.png" width="23px" alt="compass" class="me-1"/>${day.hour[0].wind_dir}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  forecastContainer.innerHTML = cartoona;
}

// Event listeners
findBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    getWeather(city).then((data) => {
      if (data) {
        displayWeather(data);
      }
    });
  }
});
