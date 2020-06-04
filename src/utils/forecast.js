const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=caaa5de568fb6c66a41ef5492a9787e3&query=" + latitude + "," + longitude + "&units=f";

    request({ url, json: true }, (error, data) => {
        const { body } = data;
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.feelslike + '% chance of rain.')
        }
    })
}

module.exports = forecast;