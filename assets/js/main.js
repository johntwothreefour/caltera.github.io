(function($) {
    var $window = $(window),
        $body = $('body');

    // Add TitleBar (hamburger menu)
    $('<div id="titleBar">' +
        '<a href="#navPanel" class="toggle"><span></span><span></span><span></span></a>' +
        '<span class="title">' + $('#logo').html() + '</span>' +
    '</div>').appendTo($body);

    // Add NavPanel (menu content)
    $('<div id="navPanel">' +
        '<nav>' +
            $('#nav').navList() +
        '</nav>' +
    '</div>').appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });
})(jQuery);
