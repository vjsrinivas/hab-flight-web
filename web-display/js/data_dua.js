$(function() {
    $('#loading-what').fadeOut(1000, function() {
        $(this).text('Some other text!').fadeIn(500);
    });
});

function setProgress(progress_amount){
    $(".badge-orange").text(progress_amount+"%");
}

function doneLoading(){
    
}

setProgress(10);