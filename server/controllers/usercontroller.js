var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quote = mongoose.model('Quote');

module.exports = {
    login: function(req, res){
        console.log('in controller');
        User.find({name: req.body.name}, function(err, users){
            if (users.length < 1){
                User.create({name: req.body.name}, function(err, user){
                    console.log('ur registered');
                    req.session.user = user;
                    res.json({user: user});
                    // req.session.save();

                })
            }else{
                req.session.user = users[0];
                res.json({user: req.session.user});
                console.log('ur logged in');
            }
            
        })
    },
    checkSess: function(req, res){
        if(req.session.user == undefined){
            return res.json({user: null});
        }
        return res.json({user: req.session.user});
    },
    logout: function(req, res){
        req.session.destroy();
        res.redirect('/');
    },
    addQuote: function(req, res){
        Quote.create({content: req.body.content , _user: req.session.user.id, username: req.session.user.name}, function(err, quote){
            quote.save();
            User.findOne({id: quote._user}, function(err, user){
                user.quotes.push(quote);
                user.save(function(err){
                    console.log(quote);
                    res.json({quote: quote});
                })
            })
        })
    },
    getQuotes: function(req, res){
        Quote.find({}, function(err, quotes){
            res.json(quotes);
        })
    },
    addLike: function(req, res){
        Quote.findById(req.params.id, function(err, quote){
            quote.likes += 1;
            quote.save(function(err){
                if(err){
                }else{
                    res.redirect('/quotes')
                }
            })       
        })
    },
    delete: function(req, res){
        Quote.remove({_id: req.params.id}, function(err){
            if(err){
            }else{
                res.redirect('/quotes')
            }
        })
    }
}