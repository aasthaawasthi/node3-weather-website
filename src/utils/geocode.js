const request = require("request");

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWFzdGhhYXdhc3RoaSIsImEiOiJja2FodDMzYmMwamVtMzNvNDM2bHNjeWJlIn0.jzTWVJLbOs_ZsPwxaWS8tA&limit=1';

    request({ url, json: true }, (error, data) => {
        const { body } = data;
        const { features } = body;
        console.log(features)
        if (error) { 
            callback('Unable to connect to location services!', undefined);
        } else if (!features.length) {
            console.log("andar hu")
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: features[0].center[1],
                logitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
};

module.exports = geocode;