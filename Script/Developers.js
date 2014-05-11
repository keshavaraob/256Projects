$(document).ready(function () {
    $('.main').click(function () {
        $(this).children('img.curtain').animate({ width: 100 }, { duration: 2000 });
        $(this).children('.content').fadeIn(1000);
        $(this).children('.clickme').fadeOut(1000);
        
    });
});