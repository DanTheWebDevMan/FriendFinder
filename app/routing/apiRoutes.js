var friends = require('..data/friends');

module.exports = function(app) {
    //return friends from friends.js as JSON
    app.get("/api/friends")
};