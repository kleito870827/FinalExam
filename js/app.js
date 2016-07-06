var $element = $("#contact-div a").attr("href");
var $text = $("#card-text");
var $button = $("<button id='sendAgain'>thank</button>");

$("#contact-div").on("click", function(e){
  e.preventDefault();
  $($text).hide();
  $("form").show();

});

$("#form").on("click", function(f){
  f.preventDefault();
  var queryString = $("form").serialize();
  var $name = $("#form-nm").val();
  var $phone = $("#form-ph").val();
  var $email = $("#form-e").val();
  confirm("is your name "+ $name+ " is your phone "+$phone +" is your email "+$email);
  $.ajax({
    url: "http://fvi-grad.com:4004/fakeform?"+ queryString,
    success: function(resp, txt, xhr){
      if (resp === "ok") {
        $("#form").hide();
        $("#send").append($button).show();
        $("#sendAgain").click(function(){
          $("#sendAgain").html("it has been sent");
        });

      }


      console.log(resp);
    },
    error: function(error){
           console.log(error);
         },
         method: 'POST'
  });


});
