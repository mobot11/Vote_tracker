(function(){
// var Img = window.Img;
var Kitty = window.Kitty;
var ImageContainer1 = document.getElementById('image1');
var ImageContainer2 = document.getElementById('image2');

var imgContainerLoad = function (event){
  event.preventDefault();
  var newKitty = new Kitty();
  newKitty.render();
};

// var imgClickFunction = function(event){
//   event.preventDefault();

// };

// imageContainer1.addEventListener("click", imgClickFunction)

window.addEventListener("load", imgContainerLoad);
})();
