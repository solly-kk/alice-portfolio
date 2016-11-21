$(document).ready(function() {
    $('.icon-info').each(function() {

        var spotWishbeen = $(this).parent().find('.spot-wishbeen');
        var spotTit = $(this).parent('.spot-tit');

        $(this).click(function() {
            if(spotWishbeen.is(':visible')){
                spotTit.removeClass('on');
                spotWishbeen.hide();
            } else {
                spotTit.addClass('on');
                spotWishbeen.show();
            }

        });
    });
});