var seg, min, duration, control,t;
$(document).ready(function() {
  $("#go").click(function() {
    $( ".btn" ).prop( "disabled", true );
    inicio();
  });
});

function moverTimer() {  
  if (seg == 0 && min >= 1) {
    seg = 59;
    min--;
  }
  if (min / 10 < 1 && seg / 10 < 1) {
    horaImprimivel = "0" + min + ":0" + seg--;
  } else if (min / 10 < 1 && seg / 10 < 1) {
    horaImprimivel = min + ":0" + seg--;
  } else {
    horaImprimivel = min + ":" + seg--;
  }
  $('#timer').text(horaImprimivel);
  if (seg == -1 && min == 0) {
    if (control){
      inicio();
    }else{
      fim();
    }
    return "Fim";
  }
  t = setTimeout("moverTimer()", 1000);
}

function inicio(){
  clearTimeout(t);
  $('#go').text("Session!").css("color","green");;
  $('#timer').css("color","green");
  $('#circle2').css("background-color","#fcd000");
  control = false;
  min = Number($('#number').val());
  seg = 0;
  duration = 1100 * 60 * min;
  $("#circle2")
  .animate({
    width: "+100%",
    height: "+100%",
    top: "-=50%",
    left: "-=50%"
  }, {
    queue: false,
    duration: duration
  });
  moverTimer();
  
}

function fim() {
  clearTimeout(t);
  control = true;
  $('#timer').css("color","red");
  $('#go').text("Break!").css("color","red");
  $('#circle2').css("background-color","red");
  min = Number($('#break').val());
  seg = 0;
  duration = 1100 * 60 * min;
  $("#circle2")
  .animate({
    width: "0%",
    height: "0%",
    top: "+=50%",
    left: "+=50%"
  }, {
    queue: false,
    duration: duration
  });
  moverTimer();  
}

$(function() {
  var action;
  $(".number-spinner button").mousedown(function() {
    btn = $(this);
    input = btn.closest('.number-spinner').find('input');
    btn.closest('.number-spinner').find('button').prop("disabled", false);

    if (btn.attr('data-dir') == 'up') {
      action = setInterval(function() {
        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
          input.val(parseInt(input.val()) + 1);
        } else {
          btn.prop("disabled", true);
          clearInterval(action);
        }
      }, 50);
    } else {
      action = setInterval(function() {
        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
          input.val(parseInt(input.val()) - 1);
        } else {
          btn.prop("disabled", true);
          clearInterval(action);
        }
      }, 50);
    }
  }).mouseup(function() {
    clearInterval(action);
  });
});