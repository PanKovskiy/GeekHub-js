(function () {
    var form = jQuery('#formId');

    form.on('submit', function (event) {
        event.preventDefault();
            numbers = jQuery('[name="numbers"]');
            letters = jQuery('[name="letters"]');
            agreement = jQuery('[name="agreement"]');
            typeradio = jQuery('[name="typeradio"]');


        jQuery.ajax({
            method: 'POST',
            url: '/validation',
            data: JSON.stringify({
                numbers: numbers.val(),
                letters: letters.val(),
                status: agreement.prop('checked'),
                typeradio: typeradio
            }),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function (data) {

                (data.numbers) ? numbers.parent().find('.msg').removeClass('msg-false').addClass('msg-true').text('valid'):numbers.parent().find('.msg').removeClass('msg-true').addClass('msg-false').text('not valid');
                (data.letters) ? letters.parent().find('.msg').removeClass('msg-false').addClass('msg-true').text('valid'):letters.parent().find('.msg').removeClass('msg-true').addClass('msg-false').text('not valid');
                (data.status) ? agreement.parent().find('.msg').removeClass('msg-false').addClass('msg-true').text('valid'):agreement.parent().find('.msg').removeClass('msg-true').addClass('msg-false').text('not valid');
            },
            error: function (err) {
                err;
            }
        });
    });
})();