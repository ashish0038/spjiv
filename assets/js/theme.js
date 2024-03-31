$(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 68) {
            header.addClass("darkHeader");
        } else {
            header.removeClass("darkHeader");
        }
    });
});