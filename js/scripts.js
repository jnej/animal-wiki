$(document).ready(function( ){

  var animal = prompt('Which animal would you like to learn about today "panda", "tiger" or "zebra"?');

    if (animal ==="panda") {
      $("#panda").show();
    }else if (animal === "tiger") {
      $("#tiger").show();
    }else{
      $("#zebra").show();
    }

})
