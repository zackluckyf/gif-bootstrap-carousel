$(document).ready(function() {
    "use strict"
    $('video').get(0).pause();
    $('video').get(1).pause();
    $('video').get(2).pause();
    $('video').get(3).pause();
    $('video').get(4).pause();
    var figure = $(".video").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }
});
