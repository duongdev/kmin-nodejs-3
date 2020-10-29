const request = require("request");

const searchLocations = (query, callback) => {
  request(
    `https://www.metaweather.com/api/location/search/?query=${query}`,
    { json: true },
    function (error, response, body) {
      if (body.length === 0) {
        callback(`No locations found for "${query}"`, undefined);
        return;
      }

      callback(null, body);
    }
  );
};

const getLocationWeather = (woeid, callback) => {
  request.get(
    `https://www.metaweather.com/api/location/${woeid}/`,
    {
      json: true,
    },
    (error, res, body) => {
      if (body.detail === "Not found.") {
        callback(`Location not found`, null);
        return;
      }

      callback(null, {
        woeid: body.woeid,
        locationName: body.title,
        weathers: body.consolidated_weather.map((weather) => ({
          id: weather.id,
          date: weather.applicable_date,
          minTemp: Math.round(weather.min_temp * 100) / 100,
          maxTemp: Math.round(weather.max_temp * 100) / 100,
          weatherStateName: weather.weather_state_name,
          weatherStateAbbr: weather.weather_state_abbr,
        })),
      });
    }
  );
};

module.exports = { searchLocations, getLocationWeather };
