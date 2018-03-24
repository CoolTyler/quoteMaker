var users = require('./../controllers/usercontroller');
var quotes = require('./../controllers/usercontroller');
var path = require('path');

module.exports = function(app){
    app.post('/login', function(req, res){
        console.log('in routes');
        users.login(req, res);
        
    })
    app.get('/sess', function(req, res){
        users.checkSess(req, res);
    })

    app.get('/logout', function(req, res){
        users.logout(req, res);
    })

    app.post('/add_quote', function(req, res){
        quotes.addQuote(req, res);
        console.log('quote sent thru routes');
    })

    app.get('/get_quotes', function(req, res){
        quotes.getQuotes(req, res);
    })
    app.get('/addLike/:id', function(req, res){
        quotes.addLike(req, res);
    })
    app.get('/delete/:id', function(req, res){
        quotes.delete(req, res);
    })
    app.all("**", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html"))});
}