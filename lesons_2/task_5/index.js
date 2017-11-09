jQuery('form').on('submit', function (event) {
    var errors = [];
    var numbers = jQuery('[name="numbers"]').val();
    if (!valid(numbers, '0123456789')) {
        errors.push('Invalid numbers');
    }

    var letters = jQuery('[name="letters"]').val();
    if (!valid(letters, 'abcd')) {
        errors.push('Invalid letters');
    }

    if (!jQuery('[name="agreement"]').prop('checked')) {
        errors.push('Agreement is unchecked');
    }

    var types = jQuery('[name="type"]');
    var type = types.filter(function (i, type) {
        return type.checked;
    });
    if (type.length === 0) {
        errors.push('Type is unchecked');
    }

    if (errors.length > 0) {
        event.preventDefault();
        alert(errors.join("\n"));
    }
});

function valid(string, symbols) {
    if (string.length === 0) {
        return false;
    }

    for (var i = 0; i < string.length; i++) {
        if (symbols.indexOf(string.charAt(i)) === -1) {
            return false;
        }
    }

    return true;
}