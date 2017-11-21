
module.exports = function (request, response) {
    console.log(request.body);
    if (request.body.type === '3') {
        console.log('I am was heare');
        response.json({id: 1, name: 'change name' + request.body.name});
    } else {
        console.log('I am heare');
        response.status(505).json({message: 'Invalid type'});
    }
};