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
            console.log(body.current);
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' +
                body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.');
        }
    })
}

module.exports = forecast;