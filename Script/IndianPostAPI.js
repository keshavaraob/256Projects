$(document).ready(function () {
    $("#btnSubmit").mouseenter(function () {
               $(this).animate({ marginLeft: '3px' }, 'slow')
    });
    $("#btnSubmit").mouseleave(function () {
               $(this).animate({ marginLeft: '-3px' }, 'slow')
        
    });
    $(document.body).on("click", "#btnSubmit", function () {
        $("#output").html("Waiting for response...");
        $.ajax({
            url: 'https://indianpost.p.mashape.com/getOffices.php',
            type: 'GET',
            data: { pincode: $('input:text[name=txtpincode]').val() },
            datatype: 'json',
            success: function (data) {
                $("#output").html(data);

            },
            error: function (err) {
                $("#output").html(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "jxBZm0Pxj46weTKYecEC882tPRVNEg4p");
            }
        });
    });
});

