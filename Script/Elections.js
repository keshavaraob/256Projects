var i = 0;
var j = 0;
$(document).ready(function () {
    $('.VOTE1').click(function () {
        i += 1;
        $('#p1').find("span").text("My fate score is " + i);

    });


    $('.VOTE2').click(function () {
        j += 1;
        $('#p2').find("span").text("My fate score is " + j);
    });
    $('#NOTA').click(function () {
        i -= 1;
        j -= 1;
        $('#p1').find("span").text("My fate score is " + i);

        $('#p2').find("span").text("My fate score is " + j);
    });
    $('#Result').click(function () {
        if (i > j) {
            $('#p2').fadeOut(1500);
            $('#p1').find("span").text("My fate score is " + i + ". Hurray!!! I got an opportunity to ...");
            $('#NOTA').css({
                'cursor': 'none'
            });
            $('.VOTE2').css({
                'cursor': 'none'
            });
            $('.VOTE1').css({
                'cursor': 'none'
            });
        }
        else if (j > i) {
            $('#p1').fadeOut(2000);
            $('#p2').find("span").text("My fate score is " + j + ". Hurray!!! I got an opportunity to ...");
            $('#NOTA').css({
                'cursor': 'none'
            });
            $('.VOTE2').css({
                'cursor': 'none'
            });
            $('.VOTE1').css({
                'cursor': 'none'
            });
        }
       
    });
});