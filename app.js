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



const express =require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 8080;
    
var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'))


app.get('/', (request, response) => {
        response.render('home.hbs', {
                title: 'Home Page'
        })
})


app.get('/404', (request, response) => {
        response.send({
            error: 'Page not found'
        })
    })
    
app.listen(port, () => {
console.log(`Server is up on the port ${port}`);

});

