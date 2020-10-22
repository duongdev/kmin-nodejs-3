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

module.exports = { searchLocations };
