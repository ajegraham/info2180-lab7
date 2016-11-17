$(document).ready(function(){
    var butt = $("#lookup");
    var cBox = $("#all");
    
    butt.click(function(){
        if(cBox.is(":checked")){
            $.ajax({
                type: "GET",
                url: "world.php",
                datatype: "html",
                data: {
                    a: $("#all").val()
                },
                success: function(text){
                    $("#result").html(text);
                }
            })
        }else{
            $.ajax({
                type: 'GET',
                url: 'world.php',
                datatype: 'html',
                data: {
                    c: $("#country").val()
                },
                success: function(text){
                    $("#result").html(text);
                }
            });
        }
    });
});