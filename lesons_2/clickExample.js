(function () {
    jQuery('#target').click(function() {
        alert("SOme text fo .click() called");
    });

    jQuery('#other').click(function () {
       jQuery('#target').click();
    });

    jQuery('p').click(function () {
        $(this).slideUp();
    });

    var allLiWithClassItemIi=jQuery( "li.item-ii" );
    allLiWithClassItemIi;
})();