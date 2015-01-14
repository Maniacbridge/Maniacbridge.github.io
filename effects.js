$(document).ready(function ()
{
    $("div p").hide();
    $("div").click(function ()
    {
        $("div").fadeOut('slow');
        $("div p").show();
        $("div p").fadeOut("slow");
    });    
});


