
module.exports = function (request, response) {
    if (request.body.type === '3') {
        response.json({id: 1, name: 'msR' + request.body.name})
    } else response.status(505).json({message: 'Invalid type'});
};