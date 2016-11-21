$(document).ready(function() {
    $('h1.tit a, h1.tit span').click(function() {
       $(this).parents('h1.tit').hide();
       $('.title-edit-form').show();
    });

    $('.title-edit-form button').click(function() {
        $('h1.tit').show();
        $(this).parents('.title-edit-form').hide();
    });

    $('ul.spot-tabs li').each(function() {
       $(this).click(function () {
           if($(this).hasClass('active')) {
            $(this).removeClass('active');
           } else {
               $(this).addClass('active');
           }
       })
    });

    $('.ev-info-wrap').click(function() {
        if (!$(this).hasClass('ev-direction')) {
            $(this).addClass('selected');
        }
    });

    $('.weekcalendar td.cell').each(function() {
        $(this).hover(function () {
            $(this).append('<i class="glyphicon glyphicon-plus-sign add-my-btn"></i>');
        }, function () {
            $(this).find("i.add-my-btn").remove();
        });

        $(this).on('click', 'i.add-my-btn', function() {

            console.log("click");

            var addMy = ('<div class="add-my">'
            + '<div class="add-my-box">'
            + '<span class="btn-mytransit" data-toggle="modal" data-target="#temp-trf">' + 'My transit' + '</span>'
            + '<span class="btn-myspot">' + 'My spot' + '</span>'
            + '<span class="btn-findhtls">' + 'find hotels' + '</span>'
            + '</div>'
            + '<i class="glyphicon glyphicon-remove-sign"></i>'
            + '</div>');

            $(this).parent().append(addMy);

        });
    });

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

    $(document).on("click", ".glyphicon-remove-sign", function() {
        $(this).parent('.add-my').remove();
    });

});