module.exports = function (request, response) {
    var res = request.body;

    res.numbers = /^\d+$/.test(res.numbers);
    res.letters =/^\D+$/.test(res.letters);
    res.status;

    res.typeradio.filters(function (i , type) {
        if (res.typeradio.length - 1 )
    })

    response.json(res);
}
