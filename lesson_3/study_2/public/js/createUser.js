(function () {
    var createUserForm = jQuery('#createUser');

    createUserForm.on('submit', function (event) {
        event.preventDefault();
        jQuery.ajax({
            method: 'POST',
            url: '/createUser',
            data: createUserForm.serialize(),
            success: function (data) {
                console.log('Success');
                console.log(data);
                console.log('********');
                //jQuery('input[type="text"]').css('padding', '5px');
                //jQuery('input[type="text"]').css('box-shadow', '2px 0px 8px red inset');
            },
            error: function (err) {
                console.log('ERROR');
                //alert(err.responseJSON.message);
                jQuery('#createUser input[type="text"]').css('padding', '5px');
                jQuery('#createUser input[type="text"]').after(err.responseJSON.message);
                jQuery('#createUser input[type="text"]').css('box-shadow', '2px 0px 8px red inset');
            }
        });
    });
})();