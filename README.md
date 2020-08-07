# Node/Express app

## Setting up a Node app

1. Create a new folder for the first node project
```
mkdir my-first-node-project
```

2. Initialize Node inside the project folder
```
npm init -y
```

3. Make entry point
```
touch index.js
console.log("Hello World")
```

4. Run program
```
node index.js
```

## Node module
```
touch myModule.js
module.exports.beBasic = () => "That's so fetch!"
```

Import module in index.js

```
const myModule = require('./myModule.js')
console.log(myModule.beBasic());
```

## Install npm packages
```
npm i moment
```

Require and use in index.js

```
const moment = require("moment")
console.log(moment().format('dddd [the] Do [of] MMMM [in the year] YYYY'));
```

## `.gitignore` Instruction
```
touch .gitignore
```
and then add `node_modules/` inside the file

Or the simple way:
```
echo "node_modules/" >> .gitignore
```

## Install globely:  `nodemon`
```
npm i -g nodemon
```

## Express routes setup
```
const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.listen(8000)
```

## views

1. make a `views` folder `mkdir views`

2. inside `views` create `home.html`

3. change `index.js` to following
```
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(8000)
```

## Templates

1. Add EJS
```
npm install ejs
```

2. Set the view engine to EJS
```
app.set('view engine', 'ejs')
```

3. Rename the `.html` files to `.ejs` files

4. Change home route
```
app.get('/', function(req, res) {
  res.render('index.ejs');
});
```

## Templating with Variables

index,js
```
app.get('/', function(req, res) {
  res.render('index', {name: "Sterling Archer", age: 35});
});
```
index.ejs
```
<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
  </head>
  <body>
    <h1>Hello, <%= name %>!</h1>
  </body>
</html>
```

## Partials

1. Create the partials

create a `partials` folder that includes a `header.ejs` file

```
<header>
  <img src="http://placekitten.com/500/500">
</header>
```

2. Include partials in index.ejs

```
<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
  </head>
  <body>

    <% include ../partials/header.ejs %>

    <h1>Hello, <%= name %>!</h1>
.
.
.
```

## Layouts

1. Install EJS layouts
```
npm install express-ejs-layouts
```

2. Set up EJS layouts
index.js
```
var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.listen(8000)
```

3. Create a Layout
layout.ejs
```
<!DOCTYPE html>
<html>
<head>
  <title>Faves&Hates</title>
</head>
<body>
  <%- body %>
</body>
</html>
```

4. Use Layout
home.ejs
```
<h1>This is the home page!</h1>
```
index.js
```
app.get('/', function(req, res) {
  res.render('home');
});
```

5. Set up a few more views/routes
index.js
```
app.get('/animals', function(req, res) {
  res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
});
```
animals.ejs
```
<h1><%= title %></h1>
<ul>
  <% animals.forEach(function(animal) { %>
    <li><%= animal %></li>
  <% }) %>
</ul>
```
layout.ejs
```
<!DOCTYPE html>
<html>
<head>
  <title>Faves&Hates</title>
</head>
<body>
  <ul>
    <li><a href='/foods'>Favorite Foods</a></li>
    <li><a href='/animals'>Favorite Animals</a></li>
  </ul>
  <%- body %>
</body>
</html>
```

## Controllers

1. Create a faves folder and move `foods.ejs` and `animals.ejs` into it

2. Inside the views folder, create a hates folder that also contains a `foods.ejs` and `animals.ejs`

3. Create a `controllers` folder inside the root directory

4. Inside the `controllers` folder, create `faves.js`:
```
var express = require('express');
var router = express.Router();

router.get('/foods', function(req, res) {
  res.render('faves/foods', {title: 'Favorite Foods', foods: ['coconut', 'avocado']});
});

router.get('/animals', function(req, res) {
  res.render('faves/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
});

module.exports = router;
```

6. add some middleware to `index.js`
```
app.use('/faves', require('./controllers/faves'));
```
