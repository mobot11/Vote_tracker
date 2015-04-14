(function(){
// var Img = window.Img;
var Kitty = window.Kitty;
var imageContainer1 = document.getElementById('image1');
var imageContainer2 = document.getElementById('image2');

var imgContainerLoad = function (event){
  event.preventDefault();
  window.newKitty = new Kitty();
  newKitty.render();
};

var imgClickFunction1 = function(event){
  event.preventDefault();
  var kittyScore = newKitty.kitty1;
  kittyScore.score += 1;
  console.log(kittyScore);
  prompt('the left Kitty won!')

};

var imgClickFunction2 = function(event){
  event.preventDefault();
  var kittyScore = newKitty.kitty2;
  kittyScore.score +=1;
  console.log(kittyScore.score);
}

imageContainer1.addEventListener("click", imgClickFunction1);
imageContainer2.addEventListener("click", imgClickFunction2);

window.addEventListener("load", imgContainerLoad);
})();
