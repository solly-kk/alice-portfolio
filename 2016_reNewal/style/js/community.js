$(document).ready(function() {
    $('.selected-order').click(function() {
       $('.select-order').toggle();
    });

    $('.select-order ul li').click(function() {
        $(this).parent('.select-order').hide();
    });
});