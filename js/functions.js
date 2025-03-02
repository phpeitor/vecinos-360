$(document).ready(function () {
  $("#btn-yape").click(function (e) {
    $("#btn-yape").addClass("active");
    $("#btn-tambo").removeClass("active");
    $("#btn-kasnet").removeClass("active");
    $("#btn-scotiabank").removeClass("active");
    $("#btn-bbva").removeClass("active");
    $("#btn-interbank").removeClass("active");
    $("#btn-bcp").removeClass("active");
    $("#btn-rappibank").removeClass("active");
    $("#btn-caja-arequipa").removeClass("active");
    $('#btn-caja-huancayo').removeClass('active');

    $("#instrucciones-yape").removeClass("d-none");
    $("#instrucciones-tambo").addClass("d-none");
    $("#instrucciones-kasnet").addClass("d-none");
    $("#instrucciones-scotiabank").addClass("d-none");
    $("#instrucciones-bbva").addClass("d-none");
    $("#instrucciones-interbank").addClass("d-none");
    $("#instrucciones-bcp").addClass("d-none");
    $("#instrucciones-rappibank").addClass("d-none");
    $("#instrucciones-caja-arequipa").addClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $("#btn-tambo").click(function (e) {
    $("#btn-yape").removeClass("active");
    $("#btn-tambo").addClass("active");
    $("#btn-kasnet").removeClass("active");
    $("#btn-scotiabank").removeClass("active");
    $("#btn-bbva").removeClass("active");
    $("#btn-interbank").removeClass("active");
    $("#btn-bcp").removeClass("active");
    $("#btn-rappibank").removeClass("active");
    $("#btn-caja-arequipa").removeClass("active");
    $('#btn-caja-huancayo').removeClass('active');

    $("#instrucciones-yape").addClass("d-none");
    $("#instrucciones-tambo").removeClass("d-none");
    $("#instrucciones-kasnet").addClass("d-none");
    $("#instrucciones-scotiabank").addClass("d-none");
    $("#instrucciones-bbva").addClass("d-none");
    $("#instrucciones-interbank").addClass("d-none");
    $("#instrucciones-bcp").addClass("d-none");
    $("#instrucciones-rappibank").addClass("d-none");
    $("#instrucciones-caja-arequipa").addClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $("#btn-kasnet").click(function (e) {
    $("#btn-yape").removeClass("active");
    $("#btn-tambo").removeClass("active");
    $("#btn-kasnet").addClass("active");
    $("#btn-scotiabank").removeClass("active");
    $("#btn-bbva").removeClass("active");
    $("#btn-interbank").removeClass("active");
    $("#btn-bcp").removeClass("active");
    $("#btn-rappibank").removeClass("active");
    $("#btn-caja-arequipa").removeClass("active");
    $('#btn-caja-huancayo').removeClass('active');

    $("#instrucciones-yape").addClass("d-none");
    $("#instrucciones-tambo").addClass("d-none");
    $("#instrucciones-kasnet").removeClass("d-none");
    $("#instrucciones-scotiabank").addClass("d-none");
    $("#instrucciones-bbva").addClass("d-none");
    $("#instrucciones-interbank").addClass("d-none");
    $("#instrucciones-bcp").addClass("d-none");
    $("#instrucciones-rappibank").addClass("d-none");
    $("#instrucciones-caja-arequipa").addClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $("#btn-scotiabank").click(function (e) {
    $("#btn-yape").removeClass("active");
    $("#btn-tambo").removeClass("active");
    $("#btn-kasnet").removeClass("active");
    $("#btn-scotiabank").addClass("active");
    $("#btn-bbva").removeClass("active");
    $("#btn-interbank").removeClass("active");
    $("#btn-bcp").removeClass("active");
    $("#btn-rappibank").removeClass("active");
    $("#btn-caja-arequipa").removeClass("active");
    $('#btn-caja-huancayo').removeClass('active');

    $("#instrucciones-yape").addClass("d-none");
    $("#instrucciones-tambo").addClass("d-none");
    $("#instrucciones-kasnet").addClass("d-none");
    $("#instrucciones-scotiabank").removeClass("d-none");
    $("#instrucciones-bbva").addClass("d-none");
    $("#instrucciones-interbank").addClass("d-none");
    $("#instrucciones-bcp").addClass("d-none");
    $("#instrucciones-rappibank").addClass("d-none");
    $("#instrucciones-caja-arequipa").addClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $("#btn-bbva").click(function (e) {
    $("#btn-yape").removeClass("active");
    $("#btn-tambo").removeClass("active");
    $("#btn-kasnet").removeClass("active");
    $("#btn-scotiabank").removeClass("active");
    $("#btn-bbva").addClass("active");
    $("#btn-interbank").removeClass("active");
    $("#btn-bcp").removeClass("active");
    $("#btn-rappibank").removeClass("active");
    $("#btn-caja-arequipa").removeClass("active");
    $('#btn-caja-huancayo').removeClass('active');

    $("#instrucciones-yape").addClass("d-none");
    $("#instrucciones-tambo").addClass("d-none");
    $("#instrucciones-kasnet").addClass("d-none");
    $("#instrucciones-scotiabank").addClass("d-none");
    $("#instrucciones-bbva").removeClass("d-none");
    $("#instrucciones-interbank").addClass("d-none");
    $("#instrucciones-bcp").addClass("d-none");
    $("#instrucciones-rappibank").addClass("d-none");
    $("#instrucciones-caja-arequipa").addClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $("#btn-interbank").click(function (e) {
    $("#btn-yape").removeClass("active");
    $("#btn-tambo").removeClass("active");
    $("#btn-kasnet").removeClass("active");
    $("#btn-scotiabank").removeClass("active");
    $("#btn-bbva").removeClass("active");
    $("#btn-interbank").addClass("active");
    $("#btn-bcp").removeClass("active");
    $("#btn-rappibank").removeClass("active");
    $("#btn-caja-arequipa").removeClass("active");
    $('#btn-caja-huancayo').removeClass('active');
    
    $("#instrucciones-yape").addClass("d-none");
    $("#instrucciones-tambo").addClass("d-none");
    $("#instrucciones-kasnet").addClass("d-none");
    $("#instrucciones-scotiabank").addClass("d-none");
    $("#instrucciones-bbva").addClass("d-none");
    $("#instrucciones-interbank").removeClass("d-none");
    $("#instrucciones-bcp").addClass("d-none");
    $("#instrucciones-rappibank").addClass("d-none");
    $("#instrucciones-caja-arequipa").addClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $("#btn-bcp").click(function (e) {
    $("#btn-yape").removeClass("active");
    $("#btn-tambo").removeClass("active");
    $("#btn-kasnet").removeClass("active");
    $("#btn-scotiabank").removeClass("active");
    $("#btn-bbva").removeClass("active");
    $("#btn-interbank").removeClass("active");
    $("#btn-rappibank").removeClass("active");
    $("#btn-bcp").addClass("active");
    $("#btn-caja-arequipa").removeClass("active");
    $('#btn-caja-huancayo').removeClass('active');

    $("#instrucciones-yape").addClass("d-none");
    $("#instrucciones-tambo").addClass("d-none");
    $("#instrucciones-kasnet").addClass("d-none");
    $("#instrucciones-scotiabank").addClass("d-none");
    $("#instrucciones-bbva").addClass("d-none");
    $("#instrucciones-interbank").addClass("d-none");
    $("#instrucciones-bcp").removeClass("d-none");
    $("#instrucciones-rappibank").addClass("d-none");
    $("#instrucciones-caja-arequipa").addClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $("#btn-rappibank").click(function (e) {
    $("#btn-yape").removeClass("active");
    $("#btn-tambo").removeClass("active");
    $("#btn-kasnet").removeClass("active");
    $("#btn-scotiabank").removeClass("active");
    $("#btn-bbva").removeClass("active");
    $("#btn-interbank").removeClass("active");
    $("#btn-bcp").removeClass("active");
    $("#btn-rappibank").addClass("active");
    $("#btn-caja-arequipa").removeClass("active");
    $('#btn-caja-huancayo').removeClass('active');

    $("#instrucciones-yape").addClass("d-none");
    $("#instrucciones-tambo").addClass("d-none");
    $("#instrucciones-kasnet").addClass("d-none");
    $("#instrucciones-scotiabank").addClass("d-none");
    $("#instrucciones-bbva").addClass("d-none");
    $("#instrucciones-interbank").addClass("d-none");
    $("#instrucciones-bcp").addClass("d-none");
    $("#instrucciones-rappibank").removeClass("d-none");
    $("#instrucciones-caja-arequipa").addClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $("#btn-caja-arequipa").click(function (e) {
    $("#btn-yape").removeClass("active");
    $("#btn-tambo").removeClass("active");
    $("#btn-kasnet").removeClass("active");
    $("#btn-scotiabank").removeClass("active");
    $("#btn-bbva").removeClass("active");
    $("#btn-interbank").removeClass("active");
    $("#btn-rappibank").removeClass("active");
    $("#btn-bcp").removeClass("active");
    $("#btn-caja-arequipa").addClass("active");
    $('#btn-caja-huancayo').removeClass('active');

    $("#instrucciones-yape").addClass("d-none");
    $("#instrucciones-tambo").addClass("d-none");
    $("#instrucciones-kasnet").addClass("d-none");
    $("#instrucciones-scotiabank").addClass("d-none");
    $("#instrucciones-bbva").addClass("d-none");
    $("#instrucciones-interbank").addClass("d-none");
    $("#instrucciones-bcp").addClass("d-none");
    $("#instrucciones-rappibank").addClass("d-none");
    $("#instrucciones-caja-arequipa").removeClass("d-none");
    $('#instrucciones-caja-huancayo').addClass('d-none');
  });

  $('#btn-caja-huancayo').click(function(e) {
    $('#btn-yape').removeClass('active');
    $('#btn-tambo').removeClass('active');
    $('#btn-kasnet').removeClass('active');
    $('#btn-scotiabank').removeClass('active');
    $('#btn-bbva').removeClass('active');        
    $('#btn-interbank').removeClass('active');    
    $('#btn-rappibank').removeClass('active');
    $('#btn-bcp').removeClass('active');
    $('#btn-caja-arequipa').removeClass('active');
    $('#btn-caja-huancayo').addClass('active');

    $('#instrucciones-yape').addClass('d-none');
    $('#instrucciones-tambo').addClass('d-none');
    $('#instrucciones-kasnet').addClass('d-none');
    $('#instrucciones-scotiabank').addClass('d-none');
    $('#instrucciones-bbva').addClass('d-none');        
    $('#instrucciones-interbank').addClass('d-none');    
    $('#instrucciones-bcp').addClass('d-none');    
    $('#instrucciones-rappibank').addClass('d-none');    
    $('#instrucciones-caja-arequipa').addClass('d-none');    
    $('#instrucciones-caja-huancayo').removeClass('d-none');
  });
  
  $(".btnExecute").click(function () {
    token = $("#tokenID").val();
    if (token == "") {
      alert("Ingrese un token");
      return;
    } else {
      $("#iframeview-demo").html(
        '<iframe src="e/index.html?token=' +
          token +
          '&mode=iframe" class="w-100 m-0" height="100%" frameborder="0"></iframe>'
      );
    }
  });

  $(".form-check-input").click(function (e) {
    if (e.target.value === "option1") {
      $(".transfer-option-container").removeClass("button-activated");
      $(".card-option-container").addClass("button-activated");
    } else {
      $(".card-option-container").removeClass("button-activated");
      $(".transfer-option-container").addClass("button-activated");
    }
  });

  function getConfig() {
    const pathname = window.location.pathname;
    if (pathname.includes("demo.html")) {
      $.get("./config.json", function (_config) {
        document.title = _config.title;
      });
    }
  }
  getConfig();
});
