var events = function () {
$(function() {

var kittyArray = window.kittyArray
var Kitty = window.Kitty;

window.newKitty = new Kitty();

newKitty.render();

});


$("#image1").click(function(event){
  event.preventDefault();
  $('#image1').css({ boxShadow: '0px 0px 100px #ff0000' });
  var kittyScore1 = newKitty.kitty1;
  var kittyScore2 = newKitty.kitty2;
  kittyScore1.graphTotal += 10;
  kittyScore2.graphTotal -= 10;
  $("#button").toggle();
  renderTable(kittyScore2.graphTotal, kittyScore1.graphTotal);
  $("#button").text("The red kitty wins, click here to vote again!")

});

$("#image2").click(function(event){
  event.preventDefault();
  $('#image2').css({ boxShadow: '0px 0px 100px #ffff00' });
  var kittyScore1 = newKitty.kitty1;
  var kittyScore2 = newKitty.kitty2;
  kittyScore2.graphTotal += 10;
  kittyScore1.graphTotal += 10;
  $("#button").toggle();
  renderTable(kittyScore1.graphTotal, kittyScore2.graphTotal)
  $("#button").text("The gold kitty wins, click here to vote again!");

});

  $("#button").click(function(event){
    $("img").css({boxShadow: '0 0 50px #000000'});
    $("#image1").hover('boxShadow', '0 0 50px #ff0000');
    $("#image2").hover('boxShadow', '0 0 50px #ffff00');
    var kittyScore1 = newKitty.kitty1;
    var kittyScore2 = newKitty.kitty2;
    renderTable(kittyScore2.graphTotal, kittyScore1.graphTotal);
    newKitty.render();
    $(this).toggle();
  });
};
