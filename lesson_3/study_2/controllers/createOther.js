var path = require('path');
module.exports = function (request, response) {
    if (request.body.name.length < 3) {
        response.sendFile(path.resolve(__dirname + '/../public/error.html'));
    } else response.sendFile(path.resolve(__dirname + '/../public/success.html'));
};