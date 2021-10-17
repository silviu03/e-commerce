$(function() {
    let subscribeBtn = $('#subscribe-btn');
    let closeOverlay = $('.close-subscribe-overlay');
    let subscribeOverlay = $('.subscribe-overlay');

    subscribeBtn.click(function () {
        console.log("sdfs")
        subscribeOverlay.removeClass('hidden');
    });
    closeOverlay.click(function () {
        console.log("dfbdfb")
        subscribeOverlay.addClass('hidden');
    });
    
});