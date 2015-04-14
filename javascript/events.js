(function(){
// var Img = window.Img;
var kittyArray = window.kittyArray
var Kitty = window.Kitty;
var imageContainer1 = document.getElementById('image1');
var imageContainer2 = document.getElementById('image2');


window.newKitty = new Kitty();
newKitty.render();

var imgClickFunction1 = function(event){
  event.preventDefault();
  var kittyScore = newKitty.kitty1;
  // var kittyObj = kittyArray.indexOf(kittyScore);
  kittyScore.score += 1;
  var buttonEl = document.getElementById('button');
  var btn = document.createElement('BUTTON');
  var t = document.createTextNode('The red kitty won, click here to play again!');
  btn.appendChild(t);
  buttonEl.appendChild(btn);

  var reloadFunction = function(event){
    event.preventDefault();
    var imgEl1 = document.getElementById("image1");
    var imgEl2 = document.getElementById('image2');
    var btnEl = document.getElementById('button');
    while (imgEl1.firstChild) {
      imgEl1.removeChild(imgEl1.firstChild);
    }
    while (imgEl2.firstChild) {
      imgEl2.removeChild(imgEl2.firstChild);
    }
    while (btnEl.firstChild) {
      btnEl.removeChild(btnEl.firstChild);
    }
    newKitty.render();
  };
    buttonEl.addEventListener("click", reloadFunction)
};

var imgClickFunction2 = function(event){
  event.preventDefault();
  var kittyScore = newKitty.kitty2;
  kittyScore.score +=1;
  var buttonEl = document.getElementById('button');
  var btn = document.createElement('BUTTON');
  var t = document.createTextNode('The gold kitty won, click here to play again!');
  btn.appendChild(t);
  buttonEl.appendChild(btn);
  var reloadFunction = function(event){
    event.preventDefault();
    var imgEl1 = document.getElementById("image1");
    var imgEl2 = document.getElementById('image2');
    var btnEl = document.getElementById("button");

    while (imgEl1.firstChild) {
      imgEl1.removeChild(imgEl1.firstChild);
    }

    while (imgEl2.firstChild) {
      imgEl2.removeChild(imgEl2.firstChild);
    }

    while (btnEl.firstChild) {
      btnEl.removeChild(btnEl.firstChild);
    }
    newKitty.render();
  };
    buttonEl.addEventListener("click", reloadFunction)
};


imageContainer1.addEventListener("click", imgClickFunction1);
imageContainer2.addEventListener("click", imgClickFunction2);

// window.addEventListener("load", imgContainerLoad);
})();
