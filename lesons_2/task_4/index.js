(function () {
    var input = jQuery('input[type="text"]');
    var checkbox = jQuery('input[type="checkbox"]');

/*
    input.change(function () {
        if (input.prop('value') === 'JavaScript') {
            checkbox.prop('checked', true);
        } else
            checkbox.prop('checked', false);
    })
*/

    input.on('keyup', function (event) {
        if (event.target.value === 'JavaScript') {
            checkbox.prop('checked', true);
        }
    })
})();