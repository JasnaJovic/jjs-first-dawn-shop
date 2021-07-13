$(document).ready(function(){

  var price_default = $(".variant__price").first().text();
  var option_default = $(".variant__option").first().text();
  $(".product-inputs").css("background-color","transparent");
  $(".product-inputs").first().css("background-color","#EDF0FC");
  
  $(".option__price").text(price_default);
  $(".option__desc").text(option_default);
  $(".product-inputs").click(function(){
    $(".product-inputs").css("background-color","transparent");
    $(this).css("background-color","#EDF0FC");
    var price = $(this).find(".variant__price").text();
    var option = $(this).find(".variant__option").text();
    $(".option__price").text(price);
    $(".option__desc").text(option);
  });

});