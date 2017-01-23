 (function() {
      $('#submit').on('click', function(event) {
        event.preventDefault()
         var name= $(".nombre").val();
        var job=$ (".trabajo").val();
        var telf= $(".telefono").val();
        var mail= $(".mail").val();
        $ ("#name").empty();
        $("#name").append(name);
        $ ("#job-title").empty();
        $("#job-title").append(job);
        $ ("#phone").empty();
        $("#phone").append(telf);
        $("#email").empty();
        $("#email").append(mail);
      });

      $('button.blue').on('click', function(event) {
        event.preventDefault()
        $(".biz-card").css("background-color","#21325D");
      });
      //de forma bruta,que supongo que no estará del todo bien hecha
      $('button.yellow').on('click', function(event) {
        event.preventDefault()
        $(".biz-card").addClass("yellow");
        
      });
    })()