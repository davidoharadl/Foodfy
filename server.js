const express = require('express');
const nunjucks = require('nunjucks')


const server = express();
const recipesData = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk');

nunjucks.configure('views', {
    autoescape: true,
    express: server,
    noCache: false
});

server.get('/', function(req, res){
    return res.render('index', {recipes:recipesData})
})

server.get('/about', function(req, res){
    return res.render('about')
})

server.get('/recipe', function(req, res){
            return res.render('recipe', {recipes:recipesData})
})

server.get("/recipes/:index", function (req, res) {
    const recipes = recipesData; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
    return res.render('recipe-detail', {recipe:recipes[recipeIndex]})
  })

server.listen('5000', function(){
    console.log('Server  running port 5000 ');
})