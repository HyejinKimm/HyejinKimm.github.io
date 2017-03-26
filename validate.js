$(document).ready(function(){
  var form = $("form");

  form.submit(function(event) {

    event.preventDefault();

    var naam = $("#name");
    var email = $("#email");
    var bericht = $("#message");

    var formData = {
      "naam": naam.val(),
      "email": email.val(),
      "bericht": bericht.val()
    };

    if ((formData.naam != "") && (formData.email != "") && (formData.bericht != "")) {
      $.ajax({
        "type": "POST",
        "url": "mail.php",
        "data": formData,
        "dataType": "json",
        "encode": true
      })
      .done(function(response){
        console.log(response);

        var feedback = $("div#feedback");
        feedback.html(response.bericht);
        // setTimeout(function(){ feedback.html("") }, 3000);

        naam.val("");
        email.val("");
        bericht.val("");
      })
    } else {

        feedback.html('<p>There is an empty box.<p>');

    }

  })
})
