(function () {
    var createUserForm = jQuery('#createUser');
    createUserForm.on('submit', function (event) {
        event.preventDefault();
        jQuery.ajax({
            method: 'POST',
            url: '/createUser',
            body: createUserForm.serialize(),
            success: function (result) {
                result;
            },
            error: function (err) {
                err;
            }
        });
    });
})();