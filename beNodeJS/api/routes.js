'use strict'
module.exports = function(app) {
    let jokes = require('./controllers/JokeController')

    app.route('/api/joke')
        .get(jokes.get)
    
    app.route('/api/joke/like/:idJoke')
        .patch(jokes.like)

    app.route('/api/joke/dislike/:idJoke')
        .patch(jokes.dislike)
}