module.exports = function (request, response) {
    if (request.body.inputData.search(/\D/) === -1 ) {
        return response.json('validtrue');
    } else {
        return response.json('validfalse');
    }
}
