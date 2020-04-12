const express = require('express');
const nunjucks = require('nunjucks')

const server = express();

server.use(express.static('public'))
server.set('view engine', 'njk');

nunjucks.configure('views', {
    autoescape: true,
    express: server,
    noCache: false
});

server.get('/', function(req, res){
    return res.render('index')
})

server.get('/about', function(req, res){
    return res.render('about')
})

server.get('/recipe', function(req, res){
    return res.render('recipe')
})

server.listen('5001', function(){
    console.log('Server  running port 5001');
})