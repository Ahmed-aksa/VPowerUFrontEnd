$(document).ready(function() {

  $("#backbnt").css("display", "none");

  $('#NextID').click(function() {

       $("#backbnt").css("display", "contents");
       $("#first-step").css("display", "none");
       $("#second-step").css("display", "block");
       $("#line-design").removeClass("line-color-first");
       $('#line-design').addClass('line-color-second');

       $("#image").css("display", "none");
       $("#image-1").css("display", "block");

  });

  $('#backbnt').click(function() {
    $("#backbnt").css("display", "none");

    $("#first-step").css("display", "block");
    $("#second-step").css("display", "none");

    $("#line-design").removeClass("line-color-second");
    $('#line-design').addClass('line-color-first');


    $("#image").css("display", "block");
    $("#image-1").css("display", "none");

  });


  $('#NextID-').click(function() {
    $("#first-step").css("display", "none");
    $("#second-step").css("display", "block");

    $("#line-design").removeClass("line-color-first");
    $('#line-design').addClass('line-color-second');

    $("#image").css("display", "none");
    $("#image-1").css("display", "block");

  });

  $('#backbnt-').click(function() {
    $("#first-step").css("display", "block");
    $("#second-step").css("display", "none");

    $("#line-design").removeClass("line-color-second");
    $('#line-design').addClass('line-color-first');


    $("#image").css("display", "block");
    $("#image-1").css("display", "none");

  });


});























