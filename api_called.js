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

//export the result
module.exports = {
    getWeather
}