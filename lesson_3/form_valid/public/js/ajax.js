(function () {
    var form = jQuery('#formId');

    form.on('submit', function (event) {
        event.preventDefault();
        var data=jQuery('[name="numbers"]').val();
        jQuery.ajax({
            method: 'POST',
            url: '/validation',
            data: JSON.stringify({inputData:data}),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function (data) {
                jQuery('#formId input[type="text"]').after('<span>' + data +'</span>');
            },
            error: function (err) {
                err;
            }
        });
    });
})();