(function () {
    var form = jQuery('#formId');

    form.on('submit', function (event) {
        event.preventDefault();
            numbers = jQuery('[name="numbers"]');
            letters = jQuery('[name="letters"]');
            agreement = jQuery('[name="agreement"]');
            radio = jQuery('[name="typeradio"]');
            valueCheckedRadio = jQuery('[name="typeradio"]:checked').val();

        jQuery.ajax({
            method: 'POST',
            url: '/validation',
            data: JSON.stringify({
                numbers: numbers.val(),
                letters: letters.val(),
                statusCheckBox: agreement.prop('checked'),
                radio: valueCheckedRadio
            }),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function (data) {
                jQuery('body').html('<div class="message"></div>');
                jQuery('div').text(data.message);
            },
            error: function (err) {
                console.log(err);

                (err.responseJSON.numbers) ? numbers.parent().find('.msg').removeClass('msg-false').addClass('msg-true').text('valid'):numbers.parent().find('.msg').removeClass('msg-true').addClass('msg-false').text('not valid');
                (err.responseJSON.letters) ? letters.parent().find('.msg').removeClass('msg-false').addClass('msg-true').text('valid'):letters.parent().find('.msg').removeClass('msg-true').addClass('msg-false').text('not valid');
                (err.responseJSON.statusCheckBox) ? agreement.parent().find('.msg').removeClass('msg-false').addClass('msg-true').text('valid'):agreement.parent().find('.msg').removeClass('msg-true').addClass('msg-false').text('not valid');
                (err.responseJSON.radio) ? radio.parent().find('.msg').removeClass('msg-false').addClass('msg-true').text('valid'):radio.parent().find('.msg').removeClass('msg-true').addClass('msg-false').text('not valid');
            }
        });
    });
})();