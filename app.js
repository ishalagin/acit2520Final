// install packages:
// hsb
// bodyparser
// express
// fs


// use GIT bash for git stuff

// create a git repository//
// Got to github and create new repository DONT create README.md
// use the lines they provide to create a link to the github//
//echo "# acit2520Final" >> README.md
//git init
//git add README.md
//git commit -m "first commit"
//git remote add origin https://github.com/ishalagin/acit2520Final.git
//git push -u origin master


//Heroku!!!!!
// log in to heroku from CMD/power shell using:
        //heroku login
        //email: i.shalagin@gmail.com
        //password: hunter2 :)
// heroku create
// push to heroku
// git push heroku
// heroku open



const express =require('express');
const hbs = require('hbs');
const fs = require('fs');
const bodyparser = require('body-parser');
//api used import
const api_used = require('./api_called.js')

const port = process.env.PORT || 8080;
    
var app = express();
//api info stfuu being stored
var placeholder_for_api_return = ''

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'))

app.use(bodyparser.json());       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.get('/', (request, response) => {
        get_req = request.query
        response.render('home.hbs', {
                title: 'Home Page',
                text: get_req.Hello
        })
})
app.get('/page1', (request, response) =>{
        response.render('page1.hbs', {
                title: 'page1'
        })
})
app.get('/page2', (request, response) =>{
        response.render('page2.hbs', {
                title: 'page2'
        })
})

app.get('/404', (request, response) => {
        response.send({
            error: 'Page not found'
        })
    })
    
app.listen(port, () => {
        console.log(`Server is up on the port ${port}`);
        //add the api stuff so in weather i called weather_info 
        api_used.getWeather(40,80).then((nvbdhgyhdc) => {
                console.log(nvbdhgyhdc.humidity)
        }) 
});

