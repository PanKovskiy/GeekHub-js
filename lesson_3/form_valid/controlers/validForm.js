module.exports = function (request, response) {
    var res = request.body;
    res.numbers = /^\d+$/.test(res.numbers);
    res.letters =/^\D+$/.test(res.letters);
    res.statusCheckBox;
    res.radio = (res.radio == 'last') ? true : false;
    //response.json(res);
    if ( res.numbers && res.letters && res.statusCheckBox && res.radio) {
        response.json({message: 'Дані відправлені'});
    } else {
        response.status(400).json(res);
    }
}
