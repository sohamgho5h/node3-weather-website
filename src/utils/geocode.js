const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic29oYW1pemhlcmUiLCJhIjoiY2s3d3VnNHE0MDVxbDNwbzJ1ZnM4M3A5cCJ9.vB0NV7dy__Yp2Xn6IyHkkg&limit=1'
    
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to loaction services.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })            
        }
    })
}

module.exports = geocode