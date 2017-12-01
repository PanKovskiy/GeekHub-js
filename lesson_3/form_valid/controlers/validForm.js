module.exports = function (request, response) {
    var res = request.body;

    res.numbers = /^\d+$/.test(res.numbers);
    res.letters =/^\D+$/.test(res.letters);



    response.status(400).send(res);
}
