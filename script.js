$(document).ready(function(){    
    $("h1").hover(function(){
        $(this).css("color", "red");
    }, function(){
        $(this).css("color", "black");
    });
});


$(document).ready(function() {
    $("p").click(function() {
        $("p").text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish.  A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not alanguage, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before JQuery, and compresses it.");
    });
});

$(document).ready(function() {
    $("li").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("input").keydown(function(){
        $(this).toggleClass('input');
    });
});