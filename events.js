(function(){
var Img = window.Img;
var Kitty = window.Kitty;
var redImageContainer = document.getElementById('image1');
var goldImageContainer = document.getElementById('image2');

var imgContainerLoad = function (event){
  event.preventDefault();
  var newImage = new Img();
  newImage.renderRed();
  newImage.renderGold();

};

var redImageSumbit = function (event) {
  var newImage = new Img();
  var kittyScore = newImage.getRed();
  kittyScore.score += 1;
  console.log(kittyScore.score);
  };

var goldImageSubmit = function (event){
  var newImage = new Img();
  var kittyScore = newImage.getGold();
  kittyScore.score += 1;
  console.log(kittyScore.score);
};

window.addEventListener("load", imgContainerLoad);

 redImageContainer.addEventListener('click', redImageSumbit);
 goldImageContainer.addEventListener('click', goldImageSubmit);
// imgContainer2.addEventListener('click', imgContainerSubmit2);

})();
