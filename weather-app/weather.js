const request = require("request");

const query = "Ho Chi Minh";

const searchLocation = (query, callback) => {
  request(
    `https://www.metaweather.com/api/location/search/?query=${query}`,
    { json: true },
    function (error, response, body) {
      if (body.length === 0) {
        callback(`No locations found for "${query}"`, undefined);
        return;
      }
      if (body.length > 1) {
        const limit = 5;
        const firstLocationsMsg = body
          .splice(0, limit)
          .map((item) => item.title)
          .join(", ");
        const restLocationsMsg =
          body.length > 0 ? ` and ${body.length} more locations` : "";

        callback(
          `Found: ${firstLocationsMsg}${restLocationsMsg}. Please search for more specific location.`
        );
        return;
      }

      callback(null, body[0]);
    }
  );
};

searchLocation(query, (error, location) => {
  if (error) {
    console.log(error);
    return;
  }

  getLocationWeatherByDate();

  getLocationWeather(
    { locationWoeid: location.woeid, date: args.date },
    (error, weather) => {
      console.log(
        `It's ${weather.weather_state_name} in ${
          location.title
        }. The max temperature is ${
          Math.round(weather.max_temp * 100) / 100
        } and the min temperature is ${
          Math.round(weather.min_temp * 100) / 100
        }. Humidity currently is ${weather.humidity}%.`
      );
    }
  );
});

request(
  `https://www.metaweather.com/api/location/search/?query=${query}`,
  { json: true },
  function (error, response, body) {
    if (body.length === 0) {
      console.log(`No locations found for "${query}"`);
      return;
    }

    if (body.length > 1) {
      const limit = 5;

      const firstLocationsMsg = body
        .splice(0, limit)
        .map((item) => item.title)
        .join(", ");

      const restLocationsMsg =
        body.length > 0 ? ` and ${body.length} more locations` : "";

      console.log(
        `Found: ${firstLocationsMsg}${restLocationsMsg}. Please search for more specific location.`
      );
      return;
    }

    const location = body[0];

    request(
      `https://www.metaweather.com/api/location/${location.woeid}/`,
      { json: true },
      (error, res, body) => {
        const weather = body.consolidated_weather[0];

        console.log(
          `It's ${weather.weather_state_name} in ${
            location.title
          }. The max temperature is ${
            Math.round(weather.max_temp * 100) / 100
          } and the min temperature is ${
            Math.round(weather.min_temp * 100) / 100
          }. Humidity currently is ${weather.humidity}%.`
        );
      }
    );
  }
);
