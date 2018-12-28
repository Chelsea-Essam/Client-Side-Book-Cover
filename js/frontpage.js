$(document).ready(function(){
    $("#generate").click(function(){
        
        $("#divtitle").text($("#title").val());
        $("#divsubtitle").text($("#subtitle").val());
        
       /* $("#divauthor").text($("#author").val());*/
        $("#divauthor").append($("#author").val());
        $("#divpublisher").append($("#publisher").val());
        $("#divyear").append($("#select").val());
        $("#cover").css('background-color',$("#color").val());
    });
    $("#reload").click(function(){
        location.reload(true);
    });
});