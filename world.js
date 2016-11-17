$(document).ready(function(){
    var butt = $("#lookup");
    
    butt.click(function(){
            $.ajax({
                type: 'GET',
                url: 'world.php',
                datatype: 'html',
                data: {
                    c: $("#country").val()
                },
                success: function(text){
                    alert(text);
                    $("#result").html(text);
                }
            });
    });
});