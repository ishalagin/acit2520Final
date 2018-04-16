const request = require('request');


// rename this with api Im going to use for final
var getWeather = (latitude, longitude) => {
    //specify what i want to return from the promise
    return new Promise((resolve, reject) => {
        //change url to api link, keep json true
        //
        request({
            url: `https://api.darksky.net/forecast/e33301d637d208b0d5c9f949cc232daa/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`,
            json: true
        }, (error, response, body) => {
            // check for error handling, if an error then reject
            if (error) {
                reject('Cannot connect to Dark Sky Weather');
            
            }
            //if no error get the info i need, its in a dictionary
            else {
                var weatherInfo = {
                    temperature: body.currently.temperature,
                    humidity: body.currently.humidity,
                    windSpeed: body.currently.summary
                };
                //what i will be sending back to the page, the object i created above
                resolve( 
                    weatherInfo
                );
            }
        });
    })
};



var getAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Cannot connect to Google maps');
                // console.log('Cannot connect to Google Maps');
            }
            
            else if (body.status === 'OK') {
                resolve( {
                    address: body.results[0].formatted_address,
                    lng: body.results[0].geometry.location.lng,
                    lat: body.results[0].geometry.location.lat
                });
                     
            }
            else {
                reject('The given location is invalid.');
                // console.log('Cannot find requested address');
            }
        });
    })

};

var API_KEY = '8710265-a5affd9a448016654cdea050f';
var getPicture = (picturetype) => {
    return new Promise((resolve, reject) => {
      request({
        url: `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(picturetype)}&image_type=photo`,
        json: true
      }, (error, response, body) => {
        resolve({
          'pic1': `${body.url}>`
        });
      })
    })
  }

module.exports = {
    getWeather,
    getAddress,
    getPicture
}