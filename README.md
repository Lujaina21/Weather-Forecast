# Weather Forecast Application ⛅

## Overview
This Weather Forecast Application is a web-based tool that provides accurate and up-to-date weather information for any city in the world. Users can view a three-day weather forecast with details such as temperature, humidity, wind speed, and more. The application fetches data dynamically as the user types a city name in the search field, ensuring a seamless and interactive experience.

---

## Features
- **Three-Day Forecast**: Shows detailed weather for today and the next two days.
- **Real-Time Updates**: Uses WeatherAPI to fetch the latest weather data.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

---

## Technologies Used
- **HTML5**: For the structure of the web page.
- **CSS3 & Bootstrap**: For styling and layout.
- **JavaScript (ES6)**: For dynamic behavior and API integration.
- **WeatherAPI**: For fetching weather data.

---

## Usage

1. **Search for a City**:
   - Type the name of a city into the search input field.
   - Weather data for the city will appear after pressing the button find.

2. **View Weather Details**:
   - For each day, the app displays:
     - Maximum and minimum temperatures.
     - Weather condition and icon.
     - Humidity percentage.
     - Wind speed and direction.

---

## API Configuration

This app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data. To use the app:

1. Sign up at WeatherAPI to obtain your free API key.
2. Replace the placeholder API key in `main.js` with your own:
   ```javascript
   let apiKey = "your-api-key";
   ```

---

## File Structure
```
weather-forecast-app/
├── css/
│   ├── all.min.css         # FontAwesome for icons
│   ├── bootstrap.min.css   # Bootstrap styles
│   └── style.css           # Custom styles
├── imgs/                   # Images for weather icons and app logo
├── js/
│   ├── bootstrap.bundle.min.js  # Bootstrap script
│   └── main.js             # Main JavaScript logic
├── index.html              # Main HTML file
└── README.md               # Documentation (this file)
```

---

## Credits
- Weather data powered by [WeatherAPI](https://www.weatherapi.com/).


