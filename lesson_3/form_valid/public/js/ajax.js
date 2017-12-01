(function () {
    var form = jQuery('#formId');

    form.on('submit', function (event) {
        event.preventDefault();
        var refs = {
            numbers: jQuery('[name="numbers"]'),
            letters: jQuery('[name="letters"]')
        };
        jQuery.ajax({
            method: 'POST',
            url: '/validation',
            data: JSON.stringify({
                numbers: refs.numbers.val(),
                letters: refs.letters.val()
            }),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function (data) {

/*
                if (jQuery('.msg')) {
                    jQuery('.msg').remove();
                }
                jQuery('#formId input[type="text"]').parent().after('<span class="msg">' + data +'</span>');
*/
            console.log(data);
            },
            error: function (err) {
                console.log(err.responseJSON);
                for (var key in err.responseJSON) {
                    (refs[key]).parent().find('.msg').text('');

                    if (!err[key]) {
                        (refs[key]).parent().find('.msg').text('invalid');
                    }
                }
            }
        });
    });
})();