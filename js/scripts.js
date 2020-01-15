$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var description = $("input#description").val();
    var date = $("input#date").val();
    var startTime = $("input#starttime").val();
    var endTime = $("input#endtime").val();

    $(".name").text(name);
    $(".description").text(description);
    $(".date").text(date);
    $(".starttime").text(startTime);
    $(".endtime").text(endTime);

    $(".confirm").show();
    $(".booker").hide();


  })
})