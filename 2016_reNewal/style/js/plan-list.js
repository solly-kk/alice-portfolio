$(document).ready(function() {
    $('.selected-order').each(function() {
        $(this).click(function() {
            $(this).parent().find('.select-order').toggle();
        });
    });

    $('.select-order ul li').click(function() {
        $('.select-order').hide();
    });

    $('h4.theme-title').click(function() {
        $('.themes-select').toggle();
    });
});